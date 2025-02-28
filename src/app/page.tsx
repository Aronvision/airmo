import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { GuideSection } from "@/components/home/guide-section"

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      <HeroSection />
      <FeaturesSection />
      <GuideSection />
    </div>
  )
} 