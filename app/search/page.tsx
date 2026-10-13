"use client"

import React, { useState, useEffect, useMemo, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams, useRouter } from "next/navigation"
import {
  Search,
  X,
  ArrowUpRight,
  BookOpen,
  Sparkles,
  FileText,
  Tag,
  Compass,
} from "lucide-react"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"
import {
  searchEngine,
  popularSearchTags,
  SearchCategory,
  normalizeText,
} from "@/lib/search-engine"

function HighlightText({ text, query }: { text: string; query: string }) {
  if (!query.trim() || !text) return <>{text}</>

  const queryTokens = normalizeText(query)
    .split(/\s+/)
    .filter((t) => t.length > 1)

  if (queryTokens.length === 0) return <>{text}</>

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

function SearchPageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialQuery = searchParams.get("q") || ""

  const [query, setQuery] = useState(initialQuery)
  const [category, setCategory] = useState<SearchCategory>("all")

  // Sync state if URL query param changes
  useEffect(() => {
    const q = searchParams.get("q")
    if (q !== null) {
      setQuery(q)
    }
  }, [searchParams])

  // Update URL on query change (debounced or on submit)
  const handleQueryChange = (val: string) => {
    setQuery(val)
    if (val.trim()) {
      router.replace(`/search?q=${encodeURIComponent(val.trim())}`, { scroll: false })
    } else {
      router.replace("/search", { scroll: false })
    }
  }

  const results = useMemo(() => {
    return searchEngine(query, category)
  }, [query, category])

  const counts = useMemo(() => {
    if (!query.trim()) return { all: 0, articles: 0, products: 0, pages: 0 }
    return {
      all: searchEngine(query, "all").length,
      articles: searchEngine(query, "articles").length,
      products: searchEngine(query, "products").length,
      pages: searchEngine(query, "pages").length,
    }
  }, [query])

  return (
    <div className="mx-auto max-w-7xl px-6 pt-36 pb-24 lg:px-8 lg:pt-40 lg:pb-32">
      {/* Header section */}
      <div className="max-w-3xl">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary font-medium flex items-center gap-2">
          <Search className="w-3.5 h-3.5" /> Lokálne vyhľadávanie
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground leading-[1.1]">
          Objavuj svet premeny
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Prehľadávaj somatické rituály, online kurzy, transformačné pobyty, e-booky a úvahy Zuzany Metamorphosis.
        </p>
      </div>

      {/* Main search input box */}
      <div className="mt-10 max-w-3xl">
        <div className="relative flex items-center rounded-2xl bg-card border border-border/80 shadow-sm focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/20 transition-all p-2 sm:p-2.5">
          <Search className="w-5 h-5 text-primary ml-3 mr-2 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder="Zadaj hľadaný výraz (napr. vagus, dych, pobyt, lifting...)"
            className="w-full bg-transparent text-base sm:text-lg text-foreground placeholder:text-muted-foreground/60 outline-none font-sans px-2"
          />
          {query ? (
            <button
              type="button"
              onClick={() => handleQueryChange("")}
              className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 transition mr-2"
              aria-label="Vymazať text"
            >
              <X className="w-4 h-4" />
            </button>
          ) : null}
        </div>

        {/* Filter categories pills */}
        <div className="mt-4 flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 text-xs sm:text-sm">
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
                className={`px-4 py-2 rounded-full transition whitespace-nowrap flex items-center gap-2 ${
                  isActive
                    ? "bg-primary text-primary-foreground font-medium shadow-sm"
                    : "bg-card border border-border/60 text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                <span>{tab.label}</span>
                {count !== null ? (
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full ${
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

        {/* Popular tags row */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="text-xs text-muted-foreground flex items-center gap-1 mr-1">
            <Tag className="w-3 h-3 text-primary" /> Rýchle tipy:
          </span>
          {popularSearchTags.slice(0, 7).map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleQueryChange(tag)}
              className="text-xs px-3 py-1 rounded-full bg-card hover:bg-primary/10 hover:text-primary transition text-foreground/75 border border-border/60"
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Results grid / states */}
      <div className="mt-12">
        {/* Results stats */}
        {query.trim() && (
          <div className="mb-6 flex items-center justify-between text-sm text-muted-foreground border-b border-border/60 pb-3">
            <span>
              Nájdených <strong className="text-foreground">{results.length}</strong> výsledkov pre výraz „
              <span className="text-foreground">{query}</span>“
            </span>
            {category !== "all" && (
              <button
                type="button"
                onClick={() => setCategory("all")}
                className="text-primary hover:underline text-xs"
              >
                Zrušiť filter kategórie
              </button>
            )}
          </div>
        )}

        {/* RESULTS GRID */}
        {query.trim() && results.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {results.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className="group flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div>
                  {/* Thumbnail / Header */}
                  {item.image ? (
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-muted mb-5">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm border border-black/5 shadow-xs">
                          {item.categoryLabel}
                        </span>
                        {item.badge ? (
                          <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground shadow-xs">
                            {item.badge}
                          </span>
                        ) : null}
                      </div>
                      {item.price ? (
                        <div className="absolute bottom-3 right-3 rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-primary backdrop-blur-sm shadow-xs">
                          {item.price}
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <div className="flex items-center justify-between mb-4">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {item.categoryLabel}
                      </span>
                      {item.type === "article" ? (
                        <BookOpen className="w-4 h-4 text-muted-foreground" />
                      ) : (
                        <Compass className="w-4 h-4 text-muted-foreground" />
                      )}
                    </div>
                  )}

                  {/* Title & snippet */}
                  <h2 className="font-serif text-xl md:text-2xl font-medium text-foreground transition group-hover:text-primary leading-snug">
                    <HighlightText text={item.title} query={query} />
                  </h2>

                  {item.subtitle ? (
                    <p className="mt-2 text-xs text-primary/80 font-medium line-clamp-1">
                      <HighlightText text={item.subtitle} query={query} />
                    </p>
                  ) : null}

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    <HighlightText
                      text={item.matchedSnippet || item.excerpt}
                      query={query}
                    />
                  </p>
                </div>

                {/* Footer link */}
                <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-sm font-medium text-foreground group-hover:text-primary transition">
                  <span>
                    {item.type === "product"
                      ? "Zobraziť detail programu"
                      : item.type === "article"
                      ? "Čítať celý článok"
                      : "Prejsť na stránku"}
                  </span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* NO RESULTS FOUND */}
        {query.trim() && results.length === 0 && (
          <div className="rounded-3xl border border-dashed border-border/80 bg-card/50 p-12 text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 stroke-1" />
            </div>
            <h2 className="font-serif text-2xl text-foreground">
              Nenašli sa žiadne výsledky
            </h2>
            <p className="mt-2 text-muted-foreground">
              Pre výraz <strong className="text-foreground">„{query}“</strong> neexistujú v databáze žiadne zodpovedajúce položky.
            </p>
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                Skús hľadať:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {["vagus", "dych", "e-book", "pobyt", "lifting", "panva", "kolagen", "grecko"].map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => handleQueryChange(term)}
                    className="text-xs px-3 py-1.5 rounded-full bg-card hover:bg-primary/10 hover:text-primary transition border border-border"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* EMPTY QUERY STATE (DISCOVERY VIEW) */}
        {!query.trim() && (
          <div className="space-y-12">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium">
                    Odporúčané
                  </p>
                  <h2 className="font-serif text-3xl text-foreground mt-1">
                    Populárne programy a články
                  </h2>
                </div>
                <Link href="/shop" className="text-xs text-primary hover:underline flex items-center gap-1 font-medium">
                  Všetky programy <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Showcase 3 popular items */}
              <div className="grid gap-6 md:grid-cols-3">
                <Link
                  href="/shop/ebook-bezpecie-je-nova-krasa"
                  className="group rounded-2xl border border-border/70 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-muted mb-4">
                      <Image
                        src="/Fotky/ebook.jpg"
                        alt="E-book"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <span className="absolute top-3 left-3 rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                        Bestseller
                      </span>
                    </div>
                    <span className="text-xs uppercase tracking-wider text-primary font-semibold">E-book (PDF)</span>
                    <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition mt-1">
                      Bezpečie je nová krása
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                      Sprievodca somatickým omladením, fasciálnym uvoľnením a aktiváciou vagusového nervu.
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-primary">
                    <span>29 € · Okamžité stiahnutie</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </Link>

                <Link
                  href="/shop/metamorphosis-pobyt-grecko"
                  className="group rounded-2xl border border-border/70 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-muted mb-4">
                      <Image
                        src="/Fotky/grecko.jpg"
                        alt="Pobyt v Grécku"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <span className="absolute top-3 left-3 rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                        Exkluzívny pobyt
                      </span>
                    </div>
                    <span className="text-xs uppercase tracking-wider text-primary font-semibold">Transformačný pobyt</span>
                    <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition mt-1">
                      7-dňová Metamorfóza v Grécku
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                      7 dní, 7 čakier, 7 nových návykov v 4* boutique hoteli White Donkey na Peloponéze.
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-primary">
                    <span>Peloponéz, Grécko</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </Link>

                <Link
                  href="/journal/ritual-pomaly"
                  className="group rounded-2xl border border-border/70 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-muted mb-4">
                      <Image
                        src="/Fotky/480785660_624497300225070_1171894858753554870_n.jpg"
                        alt="Ranný rituál"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <span className="absolute top-3 left-3 rounded-full bg-background/90 text-foreground px-3 py-1 text-xs font-medium">
                        Rituál
                      </span>
                    </div>
                    <span className="text-xs uppercase tracking-wider text-primary font-semibold">Zápisky o premene</span>
                    <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition mt-1">
                      Ako začať deň v sile Tvorcu
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                      Prehľad 7 krokov od superfoodu cez Zlatý piest až po Oil Pulling a vedomý úsmev.
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-primary">
                    <span>Čítať rituál (7 krokov)</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Suspense
        fallback={
          <div className="mx-auto max-w-7xl px-6 pt-40 pb-32 text-center text-muted-foreground">
            Načítavam vyhľadávanie...
          </div>
        }
      >
        <SearchPageContent />
      </Suspense>
      <Footer />
    </main>
  )
}
