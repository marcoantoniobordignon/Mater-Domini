import { Footer } from "@/components/mainPagesElements/footer";
import { Header } from "@/components/mainPagesElements/header";
import { HeroArea } from "@/components/mainPagesElements/heroArea";
import { InfoArea } from "@/components/mainPagesElements/infoArea";
import { PromotionSection } from "@/components/mainPagesElements/promotionSection";
import { VitrineHome } from "@/components/mainPagesElements/vitrineHome";

export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroArea />
      <InfoArea />
      <PromotionSection />
      <VitrineHome />
      <Footer />
    </div>
  );
}
