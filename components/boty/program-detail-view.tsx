"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, Globe, Sparkles, Send, MapPin, Calendar, BookOpen, Mail, Facebook, Instagram, Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"
import { ProductItem } from "@/lib/products-data"

export function ProgramDetailView({ product }: { product: ProductItem }) {
  const [lang, setLang] = useState<"sk" | "de">("sk")
  const [selectedVariant, setSelectedVariant] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [isMuted, setIsMuted] = useState<boolean>(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const content = lang === "de" ? product.de : product.sk

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

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
                {product.contact?.email ? (
                  <a
                    href={`mailto:${product.contact.email}?subject=${encodeURIComponent(`Rezervácia: ${content.title}`)}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-card border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors"
                  >
                    <Mail className="w-4 h-4 text-primary" />
                    <span>{product.contact.email}</span>
                  </a>
                ) : (
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-card border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors"
                  >
                    {lang === "sk" ? "Mám otázku / Konzultácia" : "Frage stellen"}
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Video Section if available */}
          {product.video && (
            <div className="mt-20 rounded-3xl bg-card border border-border/70 p-6 sm:p-10 overflow-hidden shadow-xs">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
                    {lang === "sk" ? "Video Atmosféra" : "Video Atmosphäre"}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-foreground mt-1">
                    {product.video.title || (lang === "sk" ? "Nahliadnite do atmosféry pobytu" : "Einblick in die Atmosphäre")}
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted hover:bg-muted/80 text-foreground text-xs font-medium transition"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isPlaying ? (lang === "sk" ? "Pozastaviť" : "Pause") : (lang === "sk" ? "Prehrať" : "Abspielen")}</span>
                  </button>
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted hover:bg-muted/80 text-foreground text-xs font-medium transition"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    <span>{isMuted ? (lang === "sk" ? "Zapnúť zvuk" : "Ton an") : (lang === "sk" ? "Stlmiť" : "Stumm")}</span>
                  </button>
                </div>
              </div>

              <div className="relative aspect-16/9 sm:aspect-21/9 w-full rounded-2xl overflow-hidden bg-black/90 border border-black/10">
                <video
                  ref={videoRef}
                  src={product.video.url}
                  poster={product.video.poster}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90 text-xs sm:text-sm font-sans drop-shadow-md pointer-events-none">
                  <span>{lang === "sk" ? "Uvoľnenie tela · Bezpečie je nová krása" : "Körperentspannung · Sicherheit ist Schönheit"}</span>
                  <span className="font-mono text-xs opacity-75">HD · 1080p</span>
                </div>
              </div>
            </div>
          )}

          {/* Schedule / Harmonogram if available */}
          {product.schedule && product.schedule.length > 0 && (
            <div className="mt-20">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
                  {lang === "sk" ? "Harmonogram víkendu" : "Wochenend-Ablauf"}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-2">
                  {lang === "sk" ? "Program plný hĺbky, znalostí a uvoľnenia" : "Programm voller Tiefe & Entspannung"}
                </h2>
              </div>

              <div className="grid gap-8 lg:grid-cols-3">
                {product.schedule.map((dayPlan, dayIdx) => (
                  <div
                    key={dayIdx}
                    className="flex flex-col rounded-3xl bg-card border border-border/70 p-6 sm:p-7 shadow-xs hover:border-primary/40 transition-all"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                        {dayPlan.day}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-6">
                      {dayPlan.title}
                    </h3>

                    <div className="space-y-4 flex-1">
                      {dayPlan.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="p-4 rounded-2xl bg-muted/40 border border-border/40">
                          <div className="flex items-center gap-2 mb-1">
                            {item.timeOrIcon && <span className="text-base">{item.timeOrIcon}</span>}
                            <h4 className="font-semibold text-xs sm:text-sm text-foreground">{item.title}</h4>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bonus Highlight Card if available */}
          {product.bonus && (
            <div className="mt-12 rounded-3xl bg-gradient-to-br from-primary/15 via-card to-primary/5 border border-primary/30 p-8 sm:p-10 shadow-sm relative overflow-hidden">
              <div className="relative z-10 max-w-3xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  {lang === "sk" ? "Exkluzívny zážitok" : "Exklusives Erlebnis"}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-foreground mb-3">
                  {product.bonus.title}
                </h3>
                <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
                  {product.bonus.description}
                </p>
              </div>
            </div>
          )}

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

          {/* Direct Contact & Social Section */}
          {product.contact && (
            <div className="mt-16 rounded-3xl bg-card border border-border/70 p-8 sm:p-12">
              <div className="max-w-2xl">
                <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
                  {lang === "sk" ? "Osobné spojenie & Otázky" : "Persönlicher Kontakt"}
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl text-foreground mt-2 mb-4">
                  {lang === "sk" ? "Máš otázku alebo si chceš rezervovať miesto?" : "Fragen oder Platz reservieren?"}
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
                  {lang === "sk"
                    ? "Napíš mi priamo e-mailom alebo ma kontaktuj cez sociálne siete. Rada ti zodpoviem akékoľvek otázky ohľadom programu, ubytovania alebo individuálnych potrieb."
                    : "Schreib mir direkt per E-Mail oder über soziale Medien. Ich beantworte gerne all deine Fragen."}
                </p>

                <div className="grid sm:grid-cols-3 gap-4">
                  {product.contact.email && (
                    <a
                      href={`mailto:${product.contact.email}?subject=${encodeURIComponent(`Dopyt: ${content.title}`)}`}
                      className="flex items-center gap-3 p-4 rounded-2xl bg-muted/50 hover:bg-primary/10 border border-border hover:border-primary/40 transition group"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">E-mail</p>
                        <p className="text-xs sm:text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                          {product.contact.email}
                        </p>
                      </div>
                    </a>
                  )}

                  {product.contact.facebook && (
                    <a
                      href={product.contact.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-2xl bg-muted/50 hover:bg-primary/10 border border-border hover:border-primary/40 transition group"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                        <Facebook className="w-5 h-5 text-primary" />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">Facebook</p>
                        <p className="text-xs sm:text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                          {product.contact.facebookName || "Zuzana Harvalik"}
                        </p>
                      </div>
                    </a>
                  )}

                  {product.contact.instagram && (
                    <a
                      href={product.contact.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-2xl bg-muted/50 hover:bg-primary/10 border border-border hover:border-primary/40 transition group"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                        <Instagram className="w-5 h-5 text-primary" />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">Instagram</p>
                        <p className="text-xs sm:text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                          {product.contact.instagramName || "@meta_morphos_is"}
                        </p>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}

