"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, Globe, Sparkles, Send, MapPin, Calendar, BookOpen } from "lucide-react"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"
import { ProductItem } from "@/lib/products-data"

export function ProgramDetailView({ product }: { product: ProductItem }) {
  const [lang, setLang] = useState<"sk" | "de">("sk")
  const [selectedVariant, setSelectedVariant] = useState<number>(0)

  const content = lang === "de" ? product.de : product.sk

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="pt-32 pb-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {/* Back button & Language Switcher */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {lang === "sk" ? "Späť do ponuky programov" : "Zurück zur Übersicht"}
            </Link>

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

          {/* Top Hero Grid */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Left: Image Card */}
            <div className="relative aspect-4/3 sm:aspect-square w-full rounded-3xl overflow-hidden bg-muted border border-border/80 shadow-md">
              <Image
                src={product.image}
                alt={content.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />

              {product.badge && (
                <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-background/90 text-xs font-semibold tracking-wide text-foreground shadow-xs backdrop-blur-xs">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  {product.badge}
                </span>
              )}
            </div>

            {/* Right: Info & Actions */}
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-2">
                  {content.categoryLabel}
                </p>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground leading-[1.15]">
                  {content.title}
                </h1>
                <p className="mt-3 text-lg sm:text-xl font-medium text-foreground/80 leading-snug">
                  {content.subtitle}
                </p>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {content.intro}
              </p>

              {/* Meta details badges */}
              <div className="flex flex-wrap gap-3 pt-2">
                {content.formatOrDates && (
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-primary/10 text-primary text-xs font-medium">
                    <Calendar className="w-4 h-4" />
                    <span>{content.formatOrDates}</span>
                  </div>
                )}
                {content.location && (
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-muted text-foreground text-xs font-medium">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{content.location}</span>
                  </div>
                )}
                {content.duration && (
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-muted text-foreground text-xs font-medium">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span>{content.duration}</span>
                  </div>
                )}
              </div>

              {/* Variants Selector if available */}
              {content.variants && content.variants.length > 0 && (
                <div className="space-y-3 pt-4 border-t border-border/60">
                  <p className="text-sm font-semibold text-foreground">
                    {lang === "sk" ? "Vyberte variant kurzu:" : "Variante wählen:"}
                  </p>
                  <div className="grid gap-3">
                    {content.variants.map((v, vIdx) => (
                      <button
                        key={vIdx}
                        type="button"
                        onClick={() => setSelectedVariant(vIdx)}
                        className={`text-left p-4 rounded-2xl border transition-all ${
                          selectedVariant === vIdx
                            ? "bg-primary/5 border-primary shadow-xs ring-1 ring-primary"
                            : "bg-card border-border/70 hover:border-primary/40"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-semibold text-sm text-foreground">{v.name}</span>
                          {v.badge && (
                            <span className="px-2.5 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-medium">
                              {v.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{v.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Action buttons */}
              <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/kontakt?program=${encodeURIComponent(content.title)}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 shadow-xs transition-opacity"
                >
                  <Send className="w-4 h-4" />
                  <span>{content.actionLabel}</span>
                </Link>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-card border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors"
                >
                  {lang === "sk" ? "Mám otázku / Konzultácia" : "Frage stellen"}
                </Link>
              </div>
            </div>
          </div>

          {/* Detailed Features & Program Curriculum */}
          {content.features && content.features.length > 0 && (
            <div className="mt-20 rounded-3xl bg-card border border-border/70 p-8 sm:p-12">
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-6">
                {lang === "sk" ? "Čo program obsahuje a čo sa naučíte" : "Inhalte & Was du lernst"}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {content.features.map((f, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-muted/40 border border-border/40"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-foreground/85 leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
