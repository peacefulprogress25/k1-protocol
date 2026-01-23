export function EnergyFinance() {
  return (
    <section id="energy-finance" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left Column - Content (50%) */}
        <div className="flex flex-col justify-center px-8 lg:px-12 py-30 lg:py-0 lg:min-h-screen">
          <div className="max-w-lg text-center lg:text-left mx-auto lg:mx-0">
            <h3 className="text-mega text-foreground mb-6">
              $3.5 Trillion invested annually across energy industries
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed">
              0% of that happens onchain. K1 fixes this
            </p>
          </div>
        </div>

   
        {/* Right Column - Image (50%) */}
        <div className="hidden lg:flex items-center justify-center bg-gray-100 lg:min-h-screen">
          <img
            src="https://i.ibb.co/prNLNtG6/Gemini-Generated-Image-5a2bld5a2bld5a2b.webp"
            alt="Energy Finance"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mobile Image */}
        <div className="lg:hidden h-96">
          <img
            src="https://i.ibb.co/prNLNtG6/Gemini-Generated-Image-5a2bld5a2bld5a2b.webp"
            alt="ENergy Finance"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
