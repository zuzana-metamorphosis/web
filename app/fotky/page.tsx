import Image from "next/image"
import { Footer } from "@/components/boty/footer"
import { Header } from "@/components/boty/header"

const photos = [
  { src: "/images/hero-model.jpg", alt: "Portrét autorky", className: "md:col-span-2 md:row-span-2" },
  { src: "/images/skincare-ritual.jpg", alt: "Ranný rituál" },
  { src: "/images/natural-leaf.jpg", alt: "Detail listu" },
  { src: "/images/bento-skin-model.jpg", alt: "Tichý okamih" },
  { src: "/images/036a9eb7-4aa9-44aa-ba0a-c3a03061efca.png", alt: "Svetlo a textúra" },
]

export default function PhotosPage() {
  return (
    <main>
      <Header />
      <section className="px-6 pb-24 pt-40 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">Fotky</p>
          <h1 className="max-w-3xl font-serif text-5xl leading-tight text-foreground md:text-7xl">Obrazy z každodennosti</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">Svetlo, pokožka, príroda a malé detaily, ktoré si zaslúžia zostať v pamäti.</p>

          <div className="mt-16 grid auto-rows-[220px] gap-5 md:grid-cols-3">
            {photos.map((photo) => (
              <div key={photo.src} className={`relative overflow-hidden rounded-2xl bg-muted ${photo.className ?? ""}`}>
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
