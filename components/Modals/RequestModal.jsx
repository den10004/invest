"use client";

import { useEffect } from "react";
import "./index.css";

export default function RequestModal({ setShowModal }) {
  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === "Escape") {
        setShowModal(false);
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

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
                type="tel"
                name="phone"
                placeholder="Введите номер телефона"
              />
            </div>

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
            />

            <div
              id="recaptcha2"
              className="g-recaptcha"
              data-sitekey="<? echo $public_key; ?>"
              data-callback="onSubmit"
              data-size="invisible"
            ></div>

            <button id="captcha1" className="btn submit">
              Разместить проект
            </button>
            <div className="polit-descr">
              Нажимая кнопку Разместить проект, я подтверждаю, что ознакомлен и
              согласен с условиями{" "}
              <a href="" target="_blank" className="polit">
                политики обработки персональных данных
              </a>
            </div>
          </form>
        </div>
        <div className="overlay"></div>
      </div>
    </>
  );
}
