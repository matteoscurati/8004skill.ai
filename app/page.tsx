import Hero from "@/components/Hero";
import BetaBanner from "@/components/BetaBanner";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Chains from "@/components/Chains";
import Security from "@/components/Security";
import QuickStart from "@/components/QuickStart";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <BetaBanner />
      <div className="relative bg-vw-deep">
        <HowItWorks />
        <Features />
        <Chains />
        <Security />
        <QuickStart />
        <Footer />
      </div>
    </main>
  );
}
