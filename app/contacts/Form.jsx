"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { DetectOS, GetBrowser, GetUserIp } from "@/services/getUserDevices";
import { Telmask, pasteCallback } from "@/lib/telmask";
import { getPb } from "@/lib/pb";
import Link from "next/link";

export default function Form() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [ip, setIp] = useState();
  const [utmParams, setUtmParams] = useState(null);
  const phoneInput = useRef(null);
  const [buttonEnabled, setbuttonEnabled] = useState(false);

  const ToggleBtn = (value) => {
    if (value.length === 13) {
      setbuttonEnabled(true);
    } else {
      setbuttonEnabled(false);
    }
  };

  const checkPhoneInput = (event) => {
    const { name, value } = event.target;
    Telmask(event);
    ToggleBtn(value);
  };

  const checkPhonePaste = (event) => {
    const { name, value } = event.target;
    pasteCallback(event);
    ToggleBtn(value);
  };

  useEffect(() => {
    let phoneEl = phoneInput.current;
    Telmask({ target: phoneEl });
  }, []);

  useEffect(() => {
    GetUserIp()
      .then((response) => response.json())
      .then((response) => {
        setIp(response.ip);
      });
  }, []);

  useEffect(() => {
    if (searchParams) {
      const params = Object.fromEntries(searchParams.entries());
      const utmKeys = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_term",
        "utm_content",
        "utm_placement",
        "utm_region_name",
      ];
      const filteredParams = utmKeys.reduce((acc, key) => {
        if (params[key]) acc[key] = params[key];
        return acc;
      }, {});

      setUtmParams(filteredParams);
    }
  }, [searchParams]);

  async function Record(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("utm_source", utmParams.utm_source);
    formData.append("utm_medium", utmParams.utm_medium);
    formData.append("utm_campaign", utmParams.utm_campaign);
    formData.append("utm_term", utmParams.utm_term);
    formData.append("utm_content", utmParams.utm_content);
    formData.append("utm_placement", utmParams.utm_placement);
    formData.append("utm_region_name", utmParams.utm_region_name);
    formData.append("platform", DetectOS());
    formData.append("browser", GetBrowser());
    formData.append("ip", ip);
    const pb = await getPb();

    try {
      const data = await pb.collection("orders").create(formData);
      router.push("/thanks");
    } catch (error) {
      console.error(error.message);
      alert("Ошибка при отправки формы");
    }
  }

  return (
    <form
      action=""
      method="post"
      className="form-box flex-wrap"
      onSubmit={Record}
    >
      <div className="title">У вас есть вопрос? Напишите его нам </div>
      <div className="input-wr">
        <div className="input-box">
          <input
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Как к вам обращаться"
            required
            minLength="2"
            maxLength="25"
            className="suggestions-input"
            style={{ boxSizing: "border-box" }}
          />
          <div className="suggestions-wrapper">
            <div
              className="suggestions-suggestions"
              style={{ display: "none" }}
            ></div>
          </div>
        </div>
        <input
          type="tel"
          name="phone"
          placeholder="Номер телефона"
          ref={phoneInput}
          onChange={checkPhoneInput}
          onPaste={checkPhonePaste}
          required
        />
        <input type="email" name="email" placeholder="Ваш e-mail" required />
      </div>
      <textarea
        name="message"
        placeholder="Напишите свой вопрос..."
        required
      ></textarea>

      <button
        className="btn btn-yellow btn-yellow big-btn"
        disabled={!buttonEnabled}
      >
        Отправить сообщение
      </button>
      <div className="polit-descr">
        Нажимая кнопку Отправить сообщение, я подтверждаю, что ознакомлен и
        согласен с условиями
        <Link href="/policy" target="_blank" className="polit">
          политики обработки персональных данных
        </Link>
      </div>
    </form>
  );
}
