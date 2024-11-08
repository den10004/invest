import { useEffect, useRef, useState } from "react";
import { getPb } from "@/lib/pb";
import { useSearchParams } from "next/navigation";
import "./index.css";
import Link from "next/link";

export default function RequestModal({ setShowModal }) {
  const searchParams = useSearchParams();
  const [utmParams, setUtmParams] = useState(null);
  const phoneInput = useRef(null);
  let freshInput = true;

  useEffect(() => {
    /*
    let eventCalllback = function (e) {
      let el = e.target,
        clearVal = el.dataset.phoneClear,
        matrix = "+7 (___) ___-__-__",
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

      if (freshInput && i == 2 && e.target.value == "+7 (8") {
        e.target.value = "+7 (";
        freshInput = false;
      }
    };

    const pasteCallback = async function (e) {
      e.preventDefault();
      let pastedText = await navigator.clipboard.readText();
      if (pastedText[0] == "8") {
        e.target.value = "7" + pastedText.substring(1);
        return;
      }
      e.target.value = pastedText;
      console.log(pastedText);
    };

    phoneInput.current.addEventListener("paste", pasteCallback);
    for (let ev of ["input", "blur", "focus"]) {
      phoneInput.current.addEventListener(ev, eventCalllback);
    }
*/
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

    const pb = await getPb();

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
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
  /*
  useEffect(() => {
    let eventCalllback = function (e) {
      let el = e.target,
        clearVal = el.dataset.phoneClear,
        matrix = "+7 (___) ___-__-__",
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
        elem.addEventListener(ev, eventCalllback);
      }
    }
  }, []);
*/
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

            {/*
            <input type="hidden" name="action" value="custom_form_ajax" />
            <input type="hidden" name="city" />
            <input type="hidden" name="gmt" className="gmt" />
            <input type="hidden" name="header" value="Размещение проекта" />
            <input type="hidden" name="which_form" value="Размещение проекта" />
            <input type="hidden" name="link" value="" />

            <input
              type="hidden"
              name="utm_source"
              className="source"
              value="<?php echo isset($_GET['utm_source']) ? $_GET['utm_source'] : ''; ?>"
            />
            <input
              type="hidden"
              name="utm_medium"
              className="source"
              value="<?php echo isset($_GET['utm_medium']) ? $_GET['utm_medium'] : ''; ?>"
            />
            <input
              type="hidden"
              name="utm_term"
              className="source"
              value="<?php echo isset($_GET['utm_term']) ? $_GET['utm_term'] : ''; ?>"
            />
            <input
              type="hidden"
              name="utm_campaign"
              className="source"
              value="<?php echo isset($_GET['utm_campaign']) ? $_GET['utm_campaign'] : ''; ?>"
            />
            <input
              type="hidden"
              name="utm_placement"
              className="source"
              value="<?php echo isset($_GET['utm_placement']) ? $_GET['utm_placement'] : ''; ?>"
            />
            <input
              type="hidden"
              name="utm_region"
              className="source"
              value="<?php echo isset($_GET['utm_region']) ? $_GET['utm_region'] : ''; ?>"
            />
            <input
              type="hidden"
              name="utm_content"
              className="source"
              value="<?php echo isset($_GET['utm_content']) ? $_GET['utm_content'] : ''; ?>"
            />
            <input
              type="hidden"
              name="utm_mail"
              className="source"
              value="<?php echo isset($_GET['utm_mail']) ? $_GET['utm_mail'] : ''; ?>"
            />*/}

            <button id="captcha1" className="btn submit btn-yellow big-btn">
              Разместить проект
            </button>
            <div className="polit-descr">
              Нажимая кнопку Разместить проект, я подтверждаю, что ознакомлен и
              согласен с условиями{" "}
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
