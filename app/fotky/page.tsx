import fs from "node:fs"
import path from "node:path"
import Image from "next/image"
import { Footer } from "@/components/boty/footer"
import { Header } from "@/components/boty/header"

const photosDirectory = path.join(process.cwd(), "public", "Fotky")
const photos = fs
  .readdirSync(photosDirectory, { withFileTypes: true })
  .filter((entry) => entry.isFile() && /\.(jpe?g|png|webp)$/i.test(entry.name))
  .map((entry) => ({
    src: `/Fotky/${encodeURIComponent(entry.name)}`,
    alt: entry.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " "),
  }))

export default function PhotosPage() {
  return (
    <main>
      <Header />
      <section className="px-6 pb-24 pt-40 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">Fotky</p>
          <h1 className="max-w-3xl font-serif text-5xl leading-tight text-foreground md:text-7xl">Obrazy z každodennosti</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">Svetlo, pokožka, príroda a malé detaily, ktoré si zaslúžia zostať v pamäti.</p>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo) => (
              <div key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover transition duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
