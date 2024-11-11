import TheFooter from "@/components/TheFooter/TheFooter";
import Link from "next/link";
import "./style.css";

export default function Thanks() {
  return (
    <>
      <div style={{ margin: "20px 0 160px 0" }}>
        <div className="wrap wrap-thanks">
          <div className="page-title">Спасибо за заявку!</div>

          <h2 className="page-headline">
            Мы свяжемся с Вами в ближайшее время.
          </h2>
          <p className="timeline">
            График работы: Пн-Пт с 9.00 до 18.00 по МСК <br />
            Если Вы оставили заявку в нерабочее время, мы перезвоним Вам на
            следующий рабочий день
          </p>
          <Link href="/" class="btn-yellow btn-yellow big-btn">
            Вернуться на сайт
          </Link>
        </div>
      </div>
      <TheFooter />
    </>
  );
}
