import { useEffect, useRef, useState } from "react";
import { getPb } from "@/lib/pb";
import { useSearchParams } from "next/navigation";
import "./index.css";
import Link from "next/link";
import { Telmask } from "@/lib/telmask";
import { DetectOS, GetBrowser } from "@/services/getUserDevices";
import { GetUserIp } from "@/services/GetUserIp";

export default function RequestModal({ setShowModal }) {
  const searchParams = useSearchParams();
  const [ip, setIp] = useState();
  const [utmParams, setUtmParams] = useState(null);
  const phoneInput = useRef(null);

  useEffect(() => {
    GetUserIp()
      .then((response) => response.json())
      .then((response) => {
        setIp(response.ip);
      });
  }, []);

  useEffect(() => {
    let phoneEl = phoneInput.current;
    Telmask(phoneEl);
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
    const pb = await getPb();
    try {
      const data = await pb.collection("orders").create(formData);
      setShowModal(false);
      alert("Форма отправлена");
    } catch (error) {
      console.error(error.message);
      setShowModal(false);
      alert("Ошибка при отправки формы");
    }
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
              />
            </div>
            <button id="captcha1" className="btn submit btn-yellow big-btn">
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
