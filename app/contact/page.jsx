"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getPb } from "@/lib/pb";
import { telephone, telephoneMailto, email } from "../../lib/tel";
import TheFooter from "@/components/TheFooter/TheFooter";
import "./style.css";

export default function Contacts() {
  const router = useRouter();
  const searchParams = useSearchParams();
  //const [utmParams, setUtmParams] = useState(null);

  async function Record(event) {
    /*
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("utm_source", utmParams.utm_source);
    formData.append("utm_medium", utmParams.utm_medium);
    formData.append("utm_campaign", utmParams.utm_campaign);
    formData.append("utm_term", utmParams.utm_term);
    formData.append("utm_content", utmParams.utm_content);
    formData.append("utm_placement", utmParams.utm_placement);
    formData.append("utm_region_name", utmParams.utm_region_name);
*/ const formData = new FormData(event.currentTarget);
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
