export function Navigation() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Left: K1 Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src="/k1-logo.png" alt="K1" className="h-10 w-auto" />
        </a>

        {/* Right: Docs and Socials */}
        <div className="flex items-center gap-6">
          <a
            href="https://solarpunkdao.gitbook.io/k1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Docs
          </a>

          <div className="flex items-center gap-3">
            <a
              href="https://x.com/solarpunkdao"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <img src="/x.svg" alt="X" className="h-5 w-5" />
            </a>

            <a
              href="https://t.me/+MWUrdlbcUbE4MzA1"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <img src="/telegram.svg" alt="Telegram" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
