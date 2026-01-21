export function Vision() {
  return (
    <section id="vision" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left Column - Content (50%) */}
        <div className="flex flex-col justify-center px-8 lg:px-12 py-30 lg:py-0 lg:min-h-screen">
          <div className="max-w-lg text-center lg:text-left mx-auto lg:mx-0">
            <h3 className="text-mega text-foreground mb-6">
  Path to prosperity goes through energy abundance.
</h3>


            <p className="text-lg text-muted-foreground leading-relaxed">
              Use K1 as your currency to make this a reality
            </p>
          </div>
        </div>

        {/* Right Column - Image Placeholder (50%) */}
        <div className="hidden lg:flex items-center justify-center bg-gray-100 min-h-screen">
          <img
  src="https://i.ibb.co/DyHT8H1/Chat-GPT-Image-Jan-19-2026-04-13-23-PM-1.webp"
  alt="Vision"
  className="w-full h-full object-cover"
/>

        </div>

              {/* Mobile Image Placeholder */}
        <div className="lg:hidden h-96">
          <img
            src="https://i.ibb.co/DyHT8H1/Chat-GPT-Image-Jan-19-2026-04-13-23-PM-1.webp"
            alt="Vision"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

