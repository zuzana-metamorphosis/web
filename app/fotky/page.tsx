import fs from "node:fs"
import path from "node:path"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Footer } from "@/components/boty/footer"
import { Header } from "@/components/boty/header"

const photoMetadata: Record<string, { title: string; href: string; category?: string }> = {
  "ebook.jpg": {
    title: "E-book: Bezpečie je nová krása",
    href: "/shop/ebook-bezpecie-je-nova-krasa",
    category: "E-book",
  },
  "grecko.jpg": {
    title: "Metamorphosis v Grécku (Peloponéz)",
    href: "/shop/metamorphosis-pobyt-grecko",
    category: "Pobyt",
  },
  "kostcove panvove dychanie.jpg": {
    title: "Kostrčovo-panvové dýchanie",
    href: "/shop/online-kurz-kostrcovo-panvove-dychanie",
    category: "Online kurz",
  },
  "lifting a konzultacia.jpg": {
    title: "EL-Metóda & Osobná konzultácia",
    href: "/shop/online-kurz-el-metoda",
    category: "Kurz & 1:1",
  },
  "yoga.jpg": {
    title: "Smile Yoga vo Viedni",
    href: "/shop/smile-yoga-vieden",
    category: "Živá prax",
  },
  "IMG_7721.JPG": {
    title: "Mini Metamorphosis Slovensko",
    href: "/shop/mini-metamorphosis-slovensko",
    category: "Víkendový pobyt",
  },
  "480785660_624497300225070_1171894858753554870_n.jpg": {
    title: "Zuzana – Somatická premena",
    href: "/o-mne",
    category: "O mne",
  },
}

const photosDirectory = path.join(process.cwd(), "public", "Fotky")
const photos = fs
  .readdirSync(photosDirectory, { withFileTypes: true })
  .filter((entry) => entry.isFile() && /\.(jpe?g|png|webp)$/i.test(entry.name))
  .map((entry) => {
    const meta = photoMetadata[entry.name] || {
      title: entry.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " "),
      href: "/shop",
      category: "Program",
    }
    return {
      src: `/Fotky/${encodeURIComponent(entry.name)}`,
      title: meta.title,
      alt: meta.title,
      href: meta.href,
      category: meta.category,
    }
  })

export const metadata = {
  title: "Fotky a videá | ZUZANA Metamorphosis",
  description: "Galéria obrazov, momentov a programov z transformačných pobytov, Smile Yogy a somatickej praxe.",
}

export default function PhotosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="px-6 pb-24 pt-36 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Fotky a videá</p>
          <h1 className="max-w-3xl font-serif text-4xl sm:text-6xl lg:text-7xl leading-tight text-foreground">
            Obrazy z každodennosti & praxe
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            Svetlo, pokožka, liečivá príroda Peloponézu a okamihy somatického uvoľnenia. Kliknutím na fotografiu prejdete priamo k detailu daného programu v ponuke.
          </p>

          {/* Photos Grid */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo) => (
              <Link
                key={photo.src}
                href={photo.href}
                className="group relative aspect-4/3 overflow-hidden rounded-3xl bg-muted border border-border/70 shadow-xs hover:border-primary/50 hover:shadow-lg transition-all duration-500 block"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle top category tag */}
                {photo.category && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/85 text-xs font-semibold tracking-wide text-foreground shadow-xs backdrop-blur-xs">
                    {photo.category}
                  </span>
                )}

                {/* Bottom Overlay with title and view CTA */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-white font-serif text-xl tracking-wide leading-snug">
                    {photo.title}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-white/80 group-hover:text-white transition-colors">
                    <span>Zobraziť v ponuke</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
