export function Ecosystem() {
  return (
    <section id="ecosystem" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left Column - Content (50%) */}
        <div className="px-6 lg:px-12 py-12 lg:py-24">
          <div className="max-w-lg">
            <h3 className="text-mega text-foreground mb-8">
              Energy financing protocol
            </h3>

            <div className="space-y-2">
              <div>
                <h4 className="numbered-item mb-2">① Providers</h4>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  Mint K1 with USDC / cash and stake for yield via yK1
                </p>
              </div>

              <div>
                <h4 className="numbered-item mb-2">② Executors</h4>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  Build and operate energy generation, storage, and distribution
                </p>
              </div>

              <div>
                <h4 className="numbered-item mb-2">③ Enablers</h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Vet projects and bridge on-chain and off-chain execution
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Image (50%) */}
        <div className="hidden lg:flex items-stretch justify-center min-h-screen">
          <img
            src="https://i.ibb.co/W4pLm0V9/Gemini-Generated-Image-ssw46pssw46pssw4.webp"
            alt="Ecosystem visual"
            className="w-full h-full object-cover"
          />
        </div>

              {/* Mobile Image Placeholder */}
        <div className="lg:hidden h-96">
          <img
            src="https://i.ibb.co/W4pLm0V9/Gemini-Generated-Image-ssw46pssw46pssw4.webp"
            alt="Ecosystem Visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

