export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-12">
      <div className="mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          

          <div className="flex items-center gap-4">
            {/* Twitter Icon */}
            <a
  href="https://x.com/solarpunkdao"
  target="_blank"
  rel="noopener noreferrer"
  className="..."
>
  <img src="/x.svg" alt="X" className="h-5 w-5" />
</a>

            <a
  href="https://t.me/+MWUrdlbcUbE4MzA1"
  target="_blank"
  rel="noopener noreferrer"
  className="..."
>
  <img src="/telegram.svg" alt="Telegram" className="h-5 w-5" />
</a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-xs text-muted-foreground">
          © 2026 K1 Protocol. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
