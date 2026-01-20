export function MemeConcept() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left Column - Content (50%) */}
        <div className="flex flex-col justify-center px-6 lg:px-12 py-12 lg:py-0 min-h-screen lg:min-h-auto">
          <div className="max-w-lg">
            <h3 className="text-mega text-foreground mb-6">
  Modern civilization moves on energy.
</h3>

            <p className="text-lg text-muted-foreground leading-relaxed">
             K1 will be its fulcrum
            </p>
          </div>
        </div>

        {/* Right Column - Image Placeholder (50%) */}
        <div className="hidden lg:flex items-center justify-center bg-gray-100 min-h-screen">
          <img
  src="https://i.ibb.co/k655TTXy/Gemini-Generated-Image-7tbw4w7tbw4w7tbw.webp"
  alt="How it works"
  className="w-full h-full object-cover"
/>

        </div>

        {/* Mobile Image Placeholder */}
        <div className="lg:hidden bg-gray-100 h-96 flex items-center justify-center">
          <div className="text-center">
            <div className="text-gray-400 text-lg font-medium">Image Placeholder</div>
          </div>
        </div>
      </div>
    </section>
  )
}
