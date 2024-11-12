import TheFooter from "@/components/TheFooter/TheFooter";
import styles from "./page.module.css";

export default function NotFound() {
  return (
    <>
      <div className={styles.notFound}>
        <h1>Страница не найдена</h1>
      </div>

      <TheFooter />
    </>
  );
}
