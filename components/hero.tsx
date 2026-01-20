import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-white pt-0 lg:min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left Column - Content (50%) */}
        <div className="flex flex-col justify-center px-6 lg:px-12 pt-24 pb-8 lg:py-0 lg:min-h-screen">
          <div className="max-w-lg">
            <h3 className="text-mega text-foreground mb-6">
              Stablecoin that funds energy
            </h3>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-medium">
              Energy that provides yield
            </p>

            {/* APY + TVL in one line */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-muted-foreground font-medium">Expected APY:</span>
                <span className="text-lg text-foreground font-medium">9.5%</span>
              </div>

              <div className="h-4 w-px bg-border hidden sm:block" />

              <div className="flex items-baseline gap-2">
                <span className="text-sm text-muted-foreground font-medium">TVL:</span>
                <span className="text-lg text-foreground font-medium">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Hero Image (50%) */}
        <div className="hidden lg:flex items-stretch justify-center lg:min-h-screen">
          <img
            src="https://i.ibb.co/ZR99W4H2/Gemini-Generated-Image-om6iymom6iymom6i.webp"
            alt="K1 hero visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mobile Image */}
        <div className="lg:hidden h-56 sm:h-72">
          <img
            src="https://i.ibb.co/ZR99W4H2/Gemini-Generated-Image-om6iymom6iymom6i.webp"
            alt="K1 hero visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
