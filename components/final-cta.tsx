import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="border-y border-white/10 bg-gradient-to-b from-orange-950/20 to-transparent py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-balance text-3xl font-bold md:text-4xl">Join the network backed by the future.</h2>

          <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 sm:w-auto"
            >
              Get K1
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-white/20 text-white hover:bg-white/10 sm:w-auto bg-transparent"
            >
              Stake → yK1
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <a href="#docs" className="transition-colors hover:text-white">
              Docs
            </a>
            <span className="text-gray-700">•</span>
            <a href="#gitbook" className="transition-colors hover:text-white">
              Gitbook
            </a>
            <span className="text-gray-700">•</span>
            <a href="#x" className="transition-colors hover:text-white">
              X
            </a>
            <span className="text-gray-700">•</span>
            <a href="#telegram" className="transition-colors hover:text-white">
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
