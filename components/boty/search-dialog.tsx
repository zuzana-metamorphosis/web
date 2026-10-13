"use client"

import React, { useState, useEffect, useRef, useMemo } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {
  Search,
  X,
  ArrowUpRight,
  BookOpen,
  Sparkles,
  FileText,
  CornerDownLeft,
  Compass,
  Tag,
} from "lucide-react"
import { useSearch } from "./search-context"
import {
  searchEngine,
  popularSearchTags,
  SearchCategory,
  SearchResultItem,
  normalizeText,
} from "@/lib/search-engine"

/**
 * Helper component that renders text with matched query tokens highlighted
 */
function HighlightText({ text, query }: { text: string; query: string }) {
  if (!query.trim() || !text) return <>{text}</>

  const queryTokens = normalizeText(query)
    .split(/\s+/)
    .filter((t) => t.length > 1)

  if (queryTokens.length === 0) return <>{text}</>

  // Create regex pattern matching any of the tokens (case-insensitive & diacritics handled)
  const escapedTokens = queryTokens.map((t) =>
    t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  )
  const regex = new RegExp(`(${escapedTokens.join("|")})`, "gi")

  const parts = text.split(regex)

  return (
    <>
      {parts.map((part, i) => {
        const isMatch = queryTokens.some(
          (token) => normalizeText(part) === token
        )
        return isMatch ? (
          <mark
            key={i}
            className="bg-primary/25 text-primary font-semibold px-0.5 rounded-sm"
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      })}
    </>
  )
}

export function SearchDialog() {
  const { isOpen, closeSearch, query, setQuery, category, setCategory } = useSearch()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Get search results
  const results = useMemo(() => {
    return searchEngine(query, category)
  }, [query, category])

  // Count results per category for the filter pills
  const counts = useMemo(() => {
    if (!query.trim()) return { all: 0, articles: 0, products: 0, pages: 0 }
    return {
      all: searchEngine(query, "all").length,
      articles: searchEngine(query, "articles").length,
      products: searchEngine(query, "products").length,
      pages: searchEngine(query, "pages").length,
    }
  }, [query])

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus()
        inputRef.current?.select()
      }, 50)
      setSelectedIndex(0)
    }
  }, [isOpen])

  // Reset selected index when query or category changes
  useEffect(() => {
    setSelectedIndex(0)
  }, [query, category])

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.querySelector('[data-active="true"]')
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest" })
      }
    }
  }, [selectedIndex])

  // Keyboard navigation inside dialog
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      if (results.length > 0) {
        setSelectedIndex((prev) => (prev + 1) % results.length)
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (results.length > 0) {
        setSelectedIndex((prev) => (prev - 1 + results.length) % results.length)
      }
    } else if (e.key === "Enter") {
      e.preventDefault()
      if (results.length > 0 && results[selectedIndex]) {
        handleSelect(results[selectedIndex].url)
      } else if (query.trim()) {
        // Go to full search page
        handleGoToFullSearch()
      }
    }
  }

  const handleSelect = (url: string) => {
    closeSearch()
    router.push(url)
  }

  const handleGoToFullSearch = () => {
    closeSearch()
    router.push(`/search?q=${encodeURIComponent(query.trim())}`)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-12 animate-in fade-in-0 duration-200"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/55 backdrop-blur-md transition-opacity"
        onClick={closeSearch}
      />

      {/* Dialog Card */}
      <div
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl bg-[#FAF8F5] dark:bg-[#1E1E1E] text-foreground border border-black/10 dark:border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200"
        onKeyDown={handleKeyDown}
      >
        {/* Search Header / Input Bar */}
        <div className="relative flex items-center border-b border-border/60 px-4 py-3.5 sm:px-6">
          <Search className="w-5 h-5 text-primary shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Hľadaj rituály, kurzy, pobyty, články..."
            className="w-full bg-transparent text-base sm:text-lg text-foreground placeholder:text-muted-foreground/60 outline-none font-sans"
            aria-label="Vyhľadávacie pole"
          />
          {query ? (
            <button
              type="button"
              onClick={() => {
                setQuery("")
                inputRef.current?.focus()
              }}
              className="p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 transition mr-2"
              aria-label="Vymazať hľadanie"
            >
              <X className="w-4 h-4" />
            </button>
          ) : null}
          <button
            type="button"
            onClick={closeSearch}
            className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono uppercase px-2 py-1 rounded bg-black/5 dark:bg-white/10 text-muted-foreground hover:text-foreground transition"
            aria-label="Zavrieť (Esc)"
          >
            ESC
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 px-4 py-2.5 sm:px-6 border-b border-border/40 overflow-x-auto no-scrollbar bg-background/50 text-xs">
          {(
            [
              { key: "all", label: "Všetko" },
              { key: "articles", label: "Články & Blog" },
              { key: "products", label: "Programy & E-shop" },
              { key: "pages", label: "Stránky" },
            ] as const
          ).map((tab) => {
            const isActive = category === tab.key
            const count = query.trim() ? counts[tab.key] : null

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setCategory(tab.key)}
                className={`px-3 py-1.5 rounded-full transition whitespace-nowrap flex items-center gap-1.5 ${
                  isActive
                    ? "bg-primary text-primary-foreground font-medium shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10"
                }`}
              >
                <span>{tab.label}</span>
                {count !== null ? (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-black/5 dark:bg-white/10 text-muted-foreground"
                    }`}
                  >
                    {count}
                  </span>
                ) : null}
              </button>
            )
          })}
        </div>

        {/* Content Body */}
        <div ref={listRef} className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-2">
          {/* STATE A: Query is empty -> show popular searches & quick links */}
          {!query.trim() && (
            <div className="space-y-6 py-2">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-3 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" /> Populárne témy
                </p>
                <div className="flex flex-wrap gap-2">
                  {popularSearchTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setQuery(tag)}
                      className="text-xs px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 hover:bg-primary/10 hover:text-primary transition text-foreground/80 border border-black/5 dark:border-white/5"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-3 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" /> Rýchle odkazy
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleSelect("/shop")}
                    className="p-3 rounded-xl border border-border/60 hover:border-primary/50 hover:bg-primary/5 transition text-left flex items-start gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground group-hover:text-primary flex items-center gap-1">
                        Programy & E-shop <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Katalóg kurzov, pobytov a e-bookov
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelect("/blog")}
                    className="p-3 rounded-xl border border-border/60 hover:border-primary/50 hover:bg-primary/5 transition text-left flex items-start gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground group-hover:text-primary flex items-center gap-1">
                        Zápisky o premene <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Články, ranné rituály a inšpirácie
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelect("/o-mne")}
                    className="p-3 rounded-xl border border-border/60 hover:border-primary/50 hover:bg-primary/5 transition text-left flex items-start gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground group-hover:text-primary flex items-center gap-1">
                        O mne — Zuzana <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Príbeh, 30 rokov skúseností a vznik EL metódy
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelect("/kontakt")}
                    className="p-3 rounded-xl border border-border/60 hover:border-primary/50 hover:bg-primary/5 transition text-left flex items-start gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground group-hover:text-primary flex items-center gap-1">
                        Kontakt & Spojenie <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        E-mail, sociálne siete a otázky
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STATE B: Query is present and results found */}
          {query.trim() && results.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground px-1 pb-1">
                <span>Nájdených {results.length} výsledkov</span>
                <span className="hidden sm:inline">Stlačte Enter pre otvorenie</span>
              </div>

              {results.map((item, index) => {
                const isSelected = selectedIndex === index

                return (
                  <div
                    key={item.id}
                    data-active={isSelected}
                    onClick={() => handleSelect(item.url)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`group relative p-3.5 rounded-xl cursor-pointer transition border ${
                      isSelected
                        ? "bg-primary/10 border-primary/40 shadow-sm"
                        : "border-border/50 hover:bg-black/5 dark:hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      {/* Visual Thumbnail / Icon */}
                      {item.image ? (
                        <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-muted border border-black/5">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover object-center"
                            sizes="60px"
                          />
                        </div>
                      ) : (
                        <div className="w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          {item.type === "article" ? (
                            <BookOpen className="w-6 h-6" />
                          ) : (
                            <FileText className="w-6 h-6" />
                          )}
                        </div>
                      )}

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-primary/15 text-primary">
                            {item.categoryLabel}
                          </span>
                          {item.badge ? (
                            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-accent/80 text-foreground">
                              {item.badge}
                            </span>
                          ) : null}
                          {item.price ? (
                            <span className="text-[11px] font-semibold text-primary ml-auto">
                              {item.price}
                            </span>
                          ) : item.location ? (
                            <span className="text-[11px] text-muted-foreground ml-auto hidden sm:inline">
                              {item.location}
                            </span>
                          ) : null}
                        </div>

                        <h3 className="font-serif text-base sm:text-lg font-medium leading-snug text-foreground group-hover:text-primary transition">
                          <HighlightText text={item.title} query={query} />
                        </h3>

                        <p className="text-xs text-muted-foreground line-clamp-2 mt-1 leading-relaxed">
                          <HighlightText
                            text={item.matchedSnippet || item.excerpt}
                            query={query}
                          />
                        </p>
                      </div>

                      {/* Arrow indication */}
                      <div className="shrink-0 pt-1 text-muted-foreground group-hover:text-primary transition">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* STATE C: Query is present but NO results found */}
          {query.trim() && results.length === 0 && (
            <div className="text-center py-12 px-4 space-y-4">
              <div className="w-14 h-14 rounded-full bg-black/5 dark:bg-white/5 text-muted-foreground flex items-center justify-center mx-auto">
                <Search className="w-7 h-7 stroke-1" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground">
                  Nenašli sa žiadne výsledky
                </h3>
                <p className="text-sm text-muted-foreground mt-1 max-w-sm mx-auto">
                  Pre výraz <strong className="text-foreground">„{query}“</strong> sme nič nenašli.
                </p>
              </div>

              <div className="pt-2">
                <p className="text-xs text-muted-foreground mb-2">
                  Skúste hľadať napríklad:
                </p>
                <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
                  {["vagus", "dych", "e-book", "pobyt", "lifting", "panva", "grecko"].map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setQuery(term)}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-4"
                >
                  Vymazať hľadanie
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-border/50 px-4 py-3 sm:px-6 bg-background/80 flex items-center justify-between text-xs text-muted-foreground">
          <div className="hidden sm:flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 font-mono text-[10px]">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 font-mono text-[10px]">↓</kbd>
              navigovať
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 font-mono text-[10px] flex items-center gap-0.5">
                <CornerDownLeft className="w-2.5 h-2.5" />
              </kbd>
              otvoriť
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 font-mono text-[10px]">esc</kbd>
              zavrieť
            </span>
          </div>

          {query.trim() ? (
            <button
              type="button"
              onClick={handleGoToFullSearch}
              className="text-primary hover:underline flex items-center gap-1 font-medium ml-auto"
            >
              Zobraziť všetky výsledky na stránke hľadania →
            </button>
          ) : (
            <span className="text-[11px] text-muted-foreground ml-auto">
              Tip: Stlačte ⌘K kdekoľvek na webe
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
