import "./style.css";
import "./../style.css";
import { industriesArr } from "@/lib/industriesArr";
import Image from "next/image";

export default function Industries() {
  return (
    <section className="industries paddingblock">
      <div className="wrap">
        <h3 className="headline-h3">
          Привлекаем инвесторов для различных отраслей
        </h3>

        <ul className="industries__list">
          {industriesArr.map((item, index) => (
            <li key={index}>
              <div className={item.style}>
                <Image
                  src={item.imageUrl}
                  width={24}
                  height={24}
                  alt="иконки"
                />
                {item.description}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
