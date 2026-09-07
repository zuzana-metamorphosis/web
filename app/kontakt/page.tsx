import { Footer } from "@/components/boty/footer"
import { Header } from "@/components/boty/header"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="px-6 pb-24 pt-40 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">Kontakt</p>
          <h1 className="max-w-3xl font-serif text-5xl leading-tight text-foreground md:text-7xl">
            Ozvi sa mi
          </h1>
          <div className="mt-10 max-w-2xl">
            <p className="font-serif text-3xl text-foreground md:text-5xl">Zuzana Harvalik</p>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Ak máš otázku alebo sa chceš dozvedieť viac, napíš mi.
            </p>
            <a
              href="mailto:zuzanab@gmx.at"
              className="mt-8 inline-block font-serif text-3xl text-foreground transition hover:text-primary md:text-5xl"
            >
              zuzanab@gmx.at
            </a>
            <a
              href="https://www.facebook.com/people/Zuzana-Harvalik-Bujdakova/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block text-lg text-muted-foreground transition hover:text-primary"
            >
              Facebook: Zuzana Harvalik Bujdakova
            </a>
            <a
              href="https://www.instagram.com/meta_morphos_is/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-lg text-muted-foreground transition hover:text-primary"
            >
              Instagram: @meta_morphos_is
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}