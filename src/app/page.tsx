import Header from "@/components/sections/header";
import NewsLetter from "@/components/sections/newsletter";
import Products from "@/components/sections/products";
import Promotion from "@/components/sections/promotions";
import Unique from "@/components/sections/unique";

export default function Home() {
  return (
    <>
      <Header />
      <Promotion />
      <Products />
      <Unique />
      <NewsLetter />
    </>
  );
}
