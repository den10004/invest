import "./style.css";
import "../style.css";
import Image from "next/image";
import graph from "../../../public/graph1.webp";
import eye from "../../../public/eye.png";
import mail from "../../../public/mail.png";

export default function AboutUs() {
  return (
    <section className="aboutUs paddingblock">
      <div className="wrap">
        <h3 className="headline-h3">В цифрах о нас. Масштаб каталога </h3>

        <div className="aboutUs__descr">
          <div className="block-style">
            <span>113 000</span> заявок от <br /> потенциальных инвесторов
          </div>
          <div className="block-style block-w">
            <div>Стоит понимать, каталог — молодой, мы только разгоняемся.</div>
            <br />
            <div className="block-style">
              <span>3 890 753</span> просмотров в месяц - плановые показатели к
              концу 2024 года. Это не менее 10 000 заявок на все проекты в
              месяц.
            </div>
          </div>
        </div>
      </div>
      <div className="aboutUs__graph">
        <div className="point"></div>

        <div className="aboutUs__count count1">
          <div className="count__second">
            <div>
              <Image src={eye} alt="иконка" />
              <p className="block-style">
                <span>3 295 341 </span>
                <br />
                просмотр
              </p>
            </div>
            <div>
              <Image src={mail} alt="иконка" />
              <p className="block-style">
                <span>7 720 </span>
                <br />
                заявок
              </p>
            </div>
          </div>
        </div>

        <div className="aboutUs__count count2">
          <div className="count__second">
            <div>
              <Image src={eye} alt="иконка" />
              <p className="block-style">
                <span>3 890 753 </span>
                <br />
                просмотра
              </p>
            </div>
            <div>
              <Image src={mail} alt="иконка" />
              <p className="block-style">
                <span>78 214 </span>
                <br />
                заявок
              </p>
            </div>
          </div>
        </div>

        <div className="aboutUs__count count3">
          <div className="count__second">
            <div>
              <Image src={eye} alt="иконка" />
              <p className="block-style">
                <span>3 456 026 </span>
                <br />
                просмотров
              </p>
            </div>
            <div>
              <Image src={mail} alt="иконка" />
              <p className="block-style">
                <span>10 122 </span>
                <br />
                заявки
              </p>
            </div>
          </div>
        </div>

        <Image priority src={graph} alt="фон" />
      </div>
    </section>
  );
}
