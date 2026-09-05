import Image from "next/image"
import { Footer } from "@/components/boty/footer"
import { Header } from "@/components/boty/header"

export default function AboutPage() {
  return (
    <main>
      <Header />
      <section className="px-6 pb-24 pt-40 lg:px-8 lg:pb-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
            <Image src="/images/hero-model.jpg" alt="Portrét Zuzany" fill className="object-cover" priority />
          </div>
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">O mne</p>
            <h1 className="font-serif text-5xl leading-tight text-foreground md:text-7xl">Priestor pre zmenu, ktorá začína vnútri.</h1>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>Som Zuzana. Verím v krásu, ktorá nevzniká pod tlakom, ale z pozornosti k sebe a svojmu vlastnému tempu.</p>
              <p>Metamorphosis je môj osobný priestor pre vedomú starostlivosť, malé rituály a príbehy o tom, čo sa mení potichu.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
