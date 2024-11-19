import "./globals.css";
import TheFooter from "@/components/TheFooter/TheFooter";
import Head from "next/head";
/*
export const metadata = {
  title: "Каталог инвестпроектов",
  description: "Размещение проектов  каталоге",
};
*/
/*Размещение проектов  каталоге*/

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <Head>
        <title>Каталог инвестпроектов</title>
        <meta name="description" content="Размещение проектов  каталоге"></meta>
      </Head>

      <body>
        <main>{children}</main>
        <TheFooter />
      </body>
    </html>
  );
}
