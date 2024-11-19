import Head from "next/head";
import InvestContent from "./InvestContent";
import Placement from "@/components/landing-components/Placement/Placement";
import Attraction from "@/components/landing-components/Attraction/Attraction";
import AboutUs from "@/components/landing-components/AboutUs/AboutUs";
import ForWhom from "@/components/landing-components/ForWhom/ForWhom";
import Industries from "@/components/landing-components/Industries/Industries";
import Why from "@/components/landing-components/Why/Why";
import Banner from "@/components/landing-components/Banner/Banner";

export const metadata = {
  title: "Каталог инвестиционных проектов",
  description: "Каталог инвестиционных проектов",
  keywords: "Каталог инвестиционных проектов",
};

export default function Invest() {
  return (
    <>
      <Head />
      <InvestContent />
      <Placement />
      <Attraction />
      <AboutUs />
      <ForWhom />
      <Industries />
      <Why />
      <Banner />
    </>
  );
}
