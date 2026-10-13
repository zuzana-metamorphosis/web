"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search } from "lucide-react"
import { useSearch } from "./search-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { openSearch } = useSearch()

  return (
    <header className="fixed top-0 left-0 z-50 px-4 pt-4">
      <nav
        className="w-fit px-6 lg:px-8 backdrop-blur-md rounded-lg py-0 my-0 animate-scale-fade-in bg-[rgba(255,255,255,0.4)] border border-[rgba(255,255,255,0.32)]"
        style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px' }}
      >
        <div className="flex items-center gap-6 lg:gap-8 h-[68px]">
          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground/80 hover:text-foreground boty-transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link href="/">
            <h1 className="font-serif text-3xl tracking-wider text-foreground">ZUZANA</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            <Link href="/shop" className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition">
              Programy & E-shop
            </Link>
            <Link href="/blog" className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition">
              Blog
            </Link>
            <Link href="/fotky" className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition">
              Fotky a videá
            </Link>
            <Link href="/o-mne" className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition">
              O mne
            </Link>
            <Link href="/kontakt" className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition">
              Kontakt
            </Link>

            {/* Desktop Search Button */}
            <button
              type="button"
              onClick={() => openSearch()}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-sans text-foreground/80 hover:text-foreground bg-white/40 dark:bg-white/10 hover:bg-white/70 dark:hover:bg-white/20 transition border border-black/10 dark:border-white/15 cursor-pointer shadow-xs group"
              aria-label="Vyhľadávanie na stránke"
              title="Vyhľadávanie (⌘K)"
            >
              <Search className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform" />
              <span className="hidden xl:inline">Hľadať</span>
              <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono rounded bg-black/5 dark:bg-white/10 text-muted-foreground border border-black/5 dark:border-white/10">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Mobile search quick icon */}
          <button
            type="button"
            onClick={() => openSearch()}
            className="lg:hidden p-2 text-foreground/80 hover:text-foreground boty-transition cursor-pointer ml-auto"
            aria-label="Hľadať na webe"
            title="Hľadať"
          >
            <Search className="w-5 h-5 text-primary" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden boty-transition ${
            isMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-3 pt-4 border-t border-border/50">
            {/* Quick search button in mobile menu */}
            <button
              type="button"
              onClick={() => {
                setIsMenuOpen(false)
                openSearch()
              }}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 text-sm text-foreground/80 hover:text-foreground transition text-left cursor-pointer border border-black/5 dark:border-white/5"
            >
              <div className="flex items-center gap-2.5">
                <Search className="w-4 h-4 text-primary" />
                <span>Hľadať články a programy...</span>
              </div>
              <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 text-muted-foreground">
                ⌘K
              </kbd>
            </button>

            <Link href="/shop" className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition py-1" onClick={() => setIsMenuOpen(false)}>
              Programy & E-shop
            </Link>
            <Link href="/blog" className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition py-1" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/fotky" className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition py-1" onClick={() => setIsMenuOpen(false)}>
              Fotky a videá
            </Link>
            <Link href="/o-mne" className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition py-1" onClick={() => setIsMenuOpen(false)}>
              O mne
            </Link>
            <Link href="/kontakt" className="text-sm tracking-wide text-foreground/70 hover:text-foreground boty-transition py-1" onClick={() => setIsMenuOpen(false)}>
              Kontakt
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
