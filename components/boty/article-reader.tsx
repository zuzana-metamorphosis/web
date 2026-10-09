"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Globe, Sparkles } from "lucide-react"

export interface ArticleContent {
  category: string
  title: string
  intro: string
  sections?: {
    heading?: string
    subheading?: string
    paragraphs?: string[]
    list?: { title?: string; text: string }[]
    quote?: { text: string; author?: string }
    callout?: string
  }[]
  body?: string | string[]
}

export interface ArticleData {
  sk: ArticleContent
  de?: ArticleContent
}

export function ArticleReader({ articleData }: { articleData: ArticleData }) {
  const [lang, setLang] = useState<"sk" | "de">("sk")

  const current: ArticleContent = (lang === "de" && articleData.de) ? articleData.de : articleData.sk
  const hasDe = Boolean(articleData.de)

  return (
    <article className="pt-32 pb-24">
      {/* Back button & Language Switcher */}
      <div className="mx-auto max-w-4xl px-6 mb-8 flex items-center justify-between">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {lang === "sk" ? "Späť na články" : "Zurück zu Artikeln"}
        </Link>

        {hasDe && (
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
        )}
      </div>

      {/* Header */}
      <div className="mx-auto max-w-4xl px-6 pb-12 text-center lg:px-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          {current.category}
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.15] text-foreground tracking-tight max-w-3xl mx-auto">
          {current.title}
        </h1>
        {current.intro && (
          <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-muted-foreground/90 font-light italic">
            „{current.intro}“
          </p>
        )}
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {current.sections && current.sections.length > 0 ? (
          <div className="space-y-12 text-foreground">
            {current.sections.map((sec, idx) => (
              <section key={idx} className="space-y-6">
                {sec.heading && (
                  <div className="pt-6 border-t border-border/40">
                    <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-normal tracking-tight">
                      {sec.heading}
                    </h2>
                  </div>
                )}

                {sec.subheading && (
                  <h3 className="text-lg sm:text-xl font-medium text-foreground/90 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary shrink-0" />
                    <span>{sec.subheading}</span>
                  </h3>
                )}

                {sec.paragraphs?.map((p, pIdx) => (
                  <p key={pIdx} className="text-base sm:text-lg leading-relaxed text-foreground/85">
                    {p}
                  </p>
                ))}

                {sec.list && sec.list.length > 0 && (
                  <div className="grid gap-3.5 my-6">
                    {sec.list.map((item, lIdx) => (
                      <div
                        key={lIdx}
                        className="flex gap-4 p-4 sm:p-5 rounded-2xl bg-card/60 border border-border/60 backdrop-blur-xs hover:border-primary/30 transition-colors"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                          {lIdx + 1}
                        </span>
                        <div className="space-y-1 text-sm sm:text-base leading-relaxed">
                          {item.title && (
                            <span className="font-semibold text-foreground block">
                              {item.title}
                            </span>
                          )}
                          <span className="text-foreground/80">{item.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {sec.quote && (
                  <blockquote className="my-8 border-l-2 border-primary pl-6 py-2 italic text-base sm:text-lg text-foreground/90 bg-muted/20 rounded-r-xl">
                    <p className="leading-relaxed">„{sec.quote.text}“</p>
                    {sec.quote.author && (
                      <cite className="block mt-2 text-xs uppercase tracking-wider text-muted-foreground not-italic">
                        — {sec.quote.author}
                      </cite>
                    )}
                  </blockquote>
                )}

                {sec.callout && (
                  <div className="my-6 p-5 sm:p-6 rounded-2xl bg-primary/5 border border-primary/20 text-foreground/90 text-base sm:text-lg leading-relaxed font-serif italic text-center">
                    {sec.callout}
                  </div>
                )}
              </section>
            ))}
          </div>
        ) : (
          <div className="space-y-6 text-lg sm:text-xl leading-relaxed text-foreground/90">
            {Array.isArray(current.body) ? (
              current.body.map((p, i) => <p key={i}>{p}</p>)
            ) : (
              <p>{current.body}</p>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
