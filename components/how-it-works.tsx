export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left Column - Content (50%) */}
        <div className="px-6 lg:px-12 py-12 lg:py-24">
          <div className="max-w-lg text-center lg:text-left mx-auto lg:mx-0">
            <h2 className="text-section-heading text-muted-foreground mb-8">How It Works</h2>

            <div className="space-y-2">
              <div>
                <h3 className="numbered-item mb-2">① Get K1</h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  Swap USD for K1 — a deeply liquid, redeemable stablecoin.
                </p>
              </div>

              <div>
                <h3 className="numbered-item mb-2">② Earn with yK1</h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  Stake K1 to mint yK1 and earn powerful yields from energy production.
                </p>
              </div>

              <div>
                <h3 className="numbered-item mb-2">③ Use for Payments, DeFi</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Use K1 as a stable for payments or yK1 as collateral to boost APYs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Image Placeholder (50%) */}
        <div className="hidden lg:flex items-center justify-center bg-gray-100">
          <img
  src="https://i.ibb.co/0RGCVpqM/Gemini-Generated-Image-i9gbuei9gbuei9gb-1.webp"
  alt="How it works"
  className="w-full h-full object-cover"
/>

        </div>

        {/* Mobile Image */}
        <div className="lg:hidden h-96">
          <img
            src="https://i.ibb.co/0RGCVpqM/Gemini-Generated-Image-i9gbuei9gbuei9gb-1.webp"
            alt="How it works"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
