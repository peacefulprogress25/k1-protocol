import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { IntroYield } from "@/components/intro-yield"
import { HowItWorks } from "@/components/how-it-works"
import { Ecosystem } from "@/components/ecosystem"
import { Vision } from "@/components/vision"
import { MemeConcept } from "@/components/meme-concept"
import { Footer } from "@/components/footer"
import { EnergyFinance } from "@/components/energy-finance"


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <IntroYield />
        <HowItWorks />
        <MemeConcept />
        <Ecosystem />
        <EnergyFinance />
        <Vision />
      </main>
      <Footer />
    </div>
  )
}
