import Link from "next/link";
import "./style.css";
import { telephone, telephoneMailto, email } from "./../../lib/tel";

export default function Contacts() {
  return (
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

      <form action="" method="post" className="form-box flex-wrap">
        <div className="title">У вас есть вопрос? Напишите его нам </div>

        <div className="input-wr">
          <div className="input-box">
            <input
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Как к вам обращаться"
              required=""
              minLength="2"
              maxLength="25"
              autocorrect="off"
              autocapitalize="off"
              spellcheck="false"
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
            required=""
          />
          <input type="email" name="email" placeholder="Ваш e-mail" />
        </div>
        <textarea
          name="message"
          placeholder="Напишите свой вопрос..."
        ></textarea>
        <input type="hidden" name="city" value="Россия" />
        <input type="hidden" name="gmt" className="gmt" value="GMT+3" />
        <input
          type="hidden"
          name="header"
          value="Задать вопрос (страница Контакты)"
        />
        <input type="hidden" name="action" value="custom_form" />

        <input type="hidden" name="utm_source" className="source" value="" />
        <input type="hidden" name="utm_medium" className="source" value="" />
        <input type="hidden" name="utm_term" className="source" value="" />
        <input type="hidden" name="utm_campaign" className="source" value="" />
        <input type="hidden" name="utm_placement" className="source" value="" />
        <input type="hidden" name="utm_region" className="source" value="" />

        <div
          id="recaptcha5"
          className="g-recaptcha"
          data-sitekey="6LfFgPIZAAAAAM1J8sqgap23Lg2ifcbmqXX6rjJR"
          data-callback="onSubmit"
          data-size="invisible"
        ></div>

        <button id="captcha5" className="btn submit">
          Отправить сообщение
        </button>
        <div className="polit-descr">
          Нажимая кнопку "Отправить сообщение", я подтверждаю, что ознакомлен и
          согласен с условиями{" "}
          <Link href="/" target="_blank" className="polit">
            политики обработки персональных данных
          </Link>
        </div>
      </form>
    </div>
  );
}
