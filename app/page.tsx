import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Chains from "@/components/Chains";
import Security from "@/components/Security";
import QuickStart from "@/components/QuickStart";
import Footer from "@/components/Footer";

function SectionDivider() {
  return (
    <div className="max-w-4xl mx-auto px-8">
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(185,103,255,0.3) 30%, rgba(255,113,206,0.4) 50%, rgba(185,103,255,0.3) 70%, transparent 100%)",
        }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="relative bg-vw-deep">
        <HowItWorks />
        <SectionDivider />
        <Features />
        <SectionDivider />
        <Chains />
        <SectionDivider />
        <Security />
        <SectionDivider />
        <QuickStart />
        <Footer />
      </div>
    </main>
  );
}
