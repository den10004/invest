import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import "./index.css";
import Link from "next/link";
import { Telmask, pasteCallback } from "@/lib/telmask";
import { DetectOS, GetBrowser, GetUserIp } from "@/services/getUserDevices";

export default function RequestModal({ setShowModal }) {
  const searchParams = useSearchParams();
  const [ip, setIp] = useState();
  const [utmParams, setUtmParams] = useState(null);
  const [response, setResponse] = useState({});
  const phoneInput = useRef(null);
  const [buttonEnabled, setbuttonEnabled] = useState(false);

  console.log(response);

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
    GetUserIp()
      .then((response) => response.json())
      .then((response) => {
        setIp(response.ip);
      });
  }, []);

  useEffect(() => {
    let phoneEl = phoneInput.current;
    Telmask({ target: phoneEl });
    function handleEscapeKey(event) {
      if (event.code === "Escape") {
        setShowModal(false);
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
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

    let formObject = {};
    formData.forEach(function (value, key) {
      formObject[key] = value;
    });
    const json = JSON.stringify(formObject);

    const result = await fetch("/api/sendform", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: json,
    });
    setResponse(result);
  }

  return (
    <>
      <div id="add-franch" className="modal_form">
        <div className="top-form popup">
          <div className="close" onClick={() => setShowModal(false)}>
            &times;
          </div>
          <form
            action=""
            method="post"
            className="custom-form modal-form ajax_form"
            onSubmit={Record}
          >
            <div className="modal-title">
              Отправьте заявку на размещение проекта
            </div>

            <div className="input-box">
              <input
                type="text"
                name="name"
                autoComplete="off"
                placeholder="Введите ваше имя"
                required
                minLength="2"
                maxLength="25"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                ref={phoneInput}
                name="phone"
                placeholder="Введите номер телефона"
                onChange={checkPhoneInput}
                onPaste={checkPhonePaste}
              />
            </div>
            <button
              className="btn submit btn-yellow big-btn"
              disabled={!buttonEnabled}
            >
              Разместить проект
            </button>
            <div className="polit-descr">
              Нажимая кнопку Разместить проект, я подтверждаю, что ознакомлен и
              согласен с условиями
              <Link href="/policy" target="_blank" className="polit">
                политики обработки персональных данных
              </Link>
            </div>
          </form>
        </div>
        <div className="overlay"></div>
      </div>
    </>
  );
}
