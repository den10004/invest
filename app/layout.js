import "./globals.css";
import TheHeader from "@/components/TheHeader/TheHeader";
import TheFooter from "@/components/TheFooter/TheFooter";
import Head from "next/head";

export const metadata = {
  title: "Инвест",
  description: "Инвест",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <Head></Head>

      <body>
        <section id="main" className="main">
          <TheHeader /> <main>{children}</main>
        </section>
        <TheFooter />
      </body>
    </html>
  );
}
