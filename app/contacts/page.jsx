/*
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getPb } from "@/lib/pb";
import { telephone, telephoneMailto, email } from "./../../lib/tel";
import TheFooter from "@/components/TheFooter/TheFooter";
import "./style.css";

export default function Contacts() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [utmParams, setUtmParams] = useState(null);

  useEffect(() => {
    let eventCallback = function (e) {
      let el = e.target,
        clearVal = el.dataset.phoneClear,
        matrix = "+7__________",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");

      if (clearVal !== "false" && e.type === "blur") {
        if (val.length < matrix.match(/([\_\d])/g).length) {
          e.target.value = "";
          return;
        }
      }

      if (def.length >= val.length) val = def;
      e.target.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length
          ? val.charAt(i++)
          : i >= val.length
          ? ""
          : a;
      });
      let freshInput = true;
      if (freshInput && i == 2 && e.target.value == "+7 (8") {
        e.target.value = "+7 (";
        freshInput = false;
      }
    };
    const pasteCallback = async function (e) {
      e.preventDefault();
      let pastedText = await navigator.clipboard.readText();
      console.log(pastedText);
      if (pastedText[0] == "8") {
        e.target.value = "7" + pastedText.substring(1);
        return;
      }
      e.target.value = pastedText;
    };

    let phone_inputs = document.querySelectorAll("input[name=phone]");

    for (let elem of phone_inputs) {
      elem.addEventListener("paste", pasteCallback);
      for (let ev of ["input", "blur", "focus"]) {
        elem.addEventListener(ev, eventCallback);
      }
    }
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

    const pb = await getPb();

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    try {
      const data = await pb.collection("orders").create(formData);
      router.push("/thanks");
    } catch (error) {
      console.error(error.message);
      alert("Ошибка при отправки формы");
    }
  }

  return (
    <>
      <div className="wrap">
        <div className="page-title">Наши контакты</div>

        <div className="contact-box">
          <Link href={"tel:" + telephoneMailto} className="big-phone">
            {telephone}
          </Link>
          <br />
          <Link href={"mailto:" + email} className="email-href">
            {email}
          </Link>
        </div>

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
              required
            />
            <input type="email" name="email" placeholder="Ваш e-mail" />
          </div>
          <textarea
            name="message"
            placeholder="Напишите свой вопрос..."
          ></textarea>

          <button className="btn btn-yellow btn-yellow big-btn">
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
      </div>
      <TheFooter />
    </>
  );
}
*/
