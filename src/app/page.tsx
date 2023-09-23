import AboutSection from "@/containers/AboutSection";
import FaqSection from "@/containers/FaqSection";
import FooterSection from "@/containers/FooterSection";
import HomeSection from "@/containers/HomeSection";
import InfoSection from "@/containers/InfoSection";
import PaSSection from "@/containers/PaSSection";
import PrivacySection from "@/containers/PrivacySection";
import PrizeSection from "@/containers/PrizeSection";
import RulesSection from "@/containers/RulesSection";
import TimelineSection from "@/containers/TimelineSection";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HomeSection />
      <AboutSection />
      <RulesSection />
      <InfoSection />
      <FaqSection />
      <TimelineSection />
      <PrizeSection />
      <PaSSection />
      <PrivacySection />
      <FooterSection />
    </main>
  );
}
