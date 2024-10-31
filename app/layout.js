//import localFont from "next/font/local";
import "./globals.css";
import TheHeader from "@/components/TheHeader/TheHeader";
import TheFooter from "@/components/TheFooter";

/*
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
*/
export const metadata = {
  title: "Инвест",
  description: "Инвест",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      ></link>
      <body>
        <section id="main" className="main">
          <TheHeader />
          <main>{children}</main>

          <TheFooter />
        </section>
      </body>
    </html>
  );
}
