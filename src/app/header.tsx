"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

 function SiteHeader() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, [lastScrollY]);
  return (
    

    <main>
      <header className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-border card-glass transition-all duration-300 ${isVisible ? 'translate-y-0': '-translate-y-full'}`}>
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">river</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              asdsd
            </Link>
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              asdasd
            </Link>
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              asdasd
            </Link>
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              asddas
            </Link>

            <Link href="/PaletteColors" className=" font-poppins hover:bg-[hsl(267,31%,44%)] bg-primary text-primary-foreground hover:text-primary transition-colors">
              PaletteColors
            </Link>
          </nav>
        </div>
      </header>
    </main>
  )
}

export default SiteHeader;

