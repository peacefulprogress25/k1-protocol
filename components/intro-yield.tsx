export function IntroYield() {
  return (
    <section className="bg-white lg:min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left Column - Content (50%) */}
        <div className="flex flex-col justify-center px-8 lg:px-12 py-9 lg:py-0 lg:min-h-screen">
          <div className="max-w-lg text-center lg:text-left mx-auto lg:mx-0">
            <h3 className="text-mega text-foreground">
              K1 earns yield by financing energy production, distribution, and storage.
            </h3>
          </div>
        </div>

        {/* Right Column - Image (50%) */}
        <div className="hidden lg:flex items-center justify-center bg-gray-100 lg:min-h-screen">
          <img
            src="https://i.ibb.co/jPcpzp4P/Gemini-Generated-Image-nx7c29nx7c29nx7c.webp"
            alt="Intro yield visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mobile Image */}
        <div className="lg:hidden h-96">
          <img
            src="https://i.ibb.co/jPcpzp4P/Gemini-Generated-Image-nx7c29nx7c29nx7c.webp"
            alt="Intro Yield"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
