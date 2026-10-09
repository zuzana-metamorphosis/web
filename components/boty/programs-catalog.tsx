"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, CheckCircle2, Globe, Sparkles } from "lucide-react"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"
import { productsData, ProductItem, ProductCategory } from "@/lib/products-data"

export function ProgramsCatalog() {
  const [lang, setLang] = useState<"sk" | "de">("sk")
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("all")

  const categories: { id: ProductCategory; labelSk: string; labelDe: string }[] = [
    { id: "all", labelSk: "Všetko", labelDe: "Alle" },
    { id: "ebook", labelSk: "E-booky", labelDe: "E-Books" },
    { id: "retreat", labelSk: "Transformačné pobyty", labelDe: "Retreats" },
    { id: "course", labelSk: "Online kurzy", labelDe: "Online-Kurse" },
    { id: "live", labelSk: "Živá prax & 1:1", labelDe: "Live-Praxis & 1:1" },
  ]

  const filteredProducts =
    activeCategory === "all"
      ? productsData
      : productsData.filter((p) => p.category === activeCategory)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="px-6 pb-24 pt-36 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          {/* Top Bar: Subtitle & Language Toggle */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              {lang === "sk" ? "Produkty & Programy" : "Produkte & Programme"}
            </p>

            <div className="flex items-center gap-1.5 p-1 rounded-full bg-card/80 border border-border shadow-xs backdrop-blur-xs">
              <Globe className="w-3.5 h-3.5 ml-2 text-muted-foreground" />
              <button
                type="button"
                onClick={() => setLang("sk")}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                  lang === "sk"
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Slovenčina
              </button>
              <button
                type="button"
                onClick={() => setLang("de")}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                  lang === "de"
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Deutsch
              </button>
            </div>
          </div>

          {/* Heading & Introduction */}
          <h1 className="max-w-4xl font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.1] text-foreground tracking-tight">
            {lang === "sk"
              ? "Tvoja cesta k prirodzenej premene"
              : "Dein Weg zu natürlicher Transformation"}
          </h1>

          <div className="mt-8 max-w-3xl space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              {lang === "sk"
                ? "Pocíť na moment ten rozdiel: Skutočná, hlboká a trvalá zmena sa nikdy nezačína v presilenej mysli. Začína sa hlboko v tvojom nervovom a fasciálnom systéme."
                : "Spüre für einen Moment den Unterschied: Echte, tiefgreifende und nachhaltige Veränderung beginnt niemals in einem überforderten Verstand. Sie beginnt tief in deinem Nerven- und Fasziensystem."}
            </p>
            <p>
              {lang === "sk"
                ? "Každý z nasledujúcich programov je navrhnutý ako jemný, no nesmierne účinný kľúč – pomáha tvojmu systému odložiť roky nosenú záťaž, aktivovať piezoelektrický prúd v tkanivách a navrátiť ťa do tvojho prirodzeného stavu mladistvosti, pokoja, liečenia a živej energie."
                : "Jedes der folgenden Programme ist als sanfter, aber hochwirksamer Schlüssel konzipiert – es hilft deinem System, jahrelang getragene Lasten abzulegen, den piezoelektrischen Strom im Gewebe zu aktivieren und dich in deinen natürlichen Zustand von Jugendlichkeit, Ruhe, Heilung und lebendiger Energie zurückzubringen."}
            </p>
          </div>

          {/* Category Filters */}
          <div className="mt-12 flex flex-wrap gap-2.5 border-b border-border/50 pb-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-foreground text-background shadow-xs"
                    : "bg-card/70 text-muted-foreground hover:text-foreground border border-border/70"
                }`}
              >
                {lang === "sk" ? cat.labelSk : cat.labelDe}
              </button>
            ))}
          </div>

          {/* Products & Programs Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => {
              const content = lang === "de" ? product.de : product.sk

              return (
                <div
                  key={product.id}
                  className="group flex flex-col justify-between rounded-3xl bg-card border border-border/70 overflow-hidden shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-300"
                >
                  {/* Image & Badge */}
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-muted">
                    <Image
                      src={product.image}
                      alt={content.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />

                    {product.badge && (
                      <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/90 text-xs font-semibold tracking-wide text-foreground shadow-xs backdrop-blur-xs">
                        <Sparkles className="w-3 h-3 text-primary" />
                        {product.badge}
                      </span>
                    )}

                    <span className="absolute bottom-4 left-4 px-2.5 py-0.5 rounded-md bg-background/80 text-[11px] font-medium tracking-wider uppercase text-primary backdrop-blur-xs">
                      {content.categoryLabel}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-6">
                    <div className="space-y-3">
                      <h2 className="font-serif text-2xl font-normal text-foreground leading-tight group-hover:text-primary transition-colors">
                        {content.title}
                      </h2>
                      <p className="text-sm font-medium text-foreground/80 leading-snug">
                        {content.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {content.intro}
                      </p>

                      {content.formatOrDates && (
                        <div className="pt-2">
                          <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-lg bg-primary/10 text-primary">
                            {content.formatOrDates}
                          </span>
                        </div>
                      )}

                      {/* Highlighted features */}
                      {content.features && content.features.length > 0 && (
                        <ul className="pt-3 space-y-1.5 text-xs text-foreground/75">
                          {content.features.slice(0, 3).map((f, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{f}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Action Button & Link to Detail */}
                    <div className="pt-4 border-t border-border/50 flex items-center justify-between gap-4">
                      <Link
                        href={`/shop/${product.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                      >
                        <span>{lang === "sk" ? "Zistiť viac & detaily" : "Mehr erfahren"}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>

                      <Link
                        href={`/kontakt?program=${encodeURIComponent(content.title)}`}
                        className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity"
                      >
                        {content.actionLabel}
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
