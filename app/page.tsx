import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Footer } from "@/components/boty/footer"
import { Header } from "@/components/boty/header"

const articles = [
  { slug: "ritual-pomaly", category: "Rituál", title: "Prečo má pomalé ráno väčšiu silu než dokonalá rutina", excerpt: "Malé gestá, ktoré vracajú pozornosť späť k telu a vlastnému tempu.", image: "/images/skincare-ritual.jpg" },
  { slug: "sila-jednoduchosti", category: "Úvaha", title: "Sila jednoduchosti v každodennej starostlivosti", excerpt: "O tom, čo môžeme z rutiny odobrať, aby v nej zostalo to podstatné.", image: "/images/natural-leaf.jpg" },
  { slug: "metamorfoza", category: "Metamorfóza", title: "Zmena nezačína navonok", excerpt: "Poznámky o vnútornom pohybe, nových začiatkoch a priestore pre seba.", image: "/images/bento-skin-model.jpg" },
]

export default function HomePage() {

  return (
    <main>
      <Header />
      <section className="relative min-h-screen overflow-hidden bg-[#e3e1e2] pt-32">
        <Image src="/images/hero-model.jpg" alt="Portrét autorky" fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-end px-6 pb-16 lg:px-8 lg:pb-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-black/70">Zuzana · Metamorfóza</p>
            <h1 className="font-serif text-5xl leading-[1.05] text-black md:text-7xl">Miesto pre zmenu, ktorá začína vnútri.</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-black/75">Osobný blog o vedomej starostlivosti, kráse bez tlaku a malých rozhodnutiach, ktoré menia každodennosť.</p>
          </div>
        </div>
      </section>

      <section id="journal" className="bg-card px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">Journal</p>
              <h2 className="font-serif text-5xl text-foreground md:text-6xl">Zápisky o premene</h2>
            </div>
            <p className="max-w-sm text-muted-foreground">Myšlienky, rituály a príbehy pre pomalší, pravdivejší spôsob života.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {articles.map((article) => (
              <Link key={article.slug} href={`/journal/${article.slug}`} className="group">
                <article>
                  <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                    <Image src={article.image} alt="" fill className="object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <p className="mb-3 text-xs uppercase tracking-[0.25em] text-primary">{article.category}</p>
                  <h3 className="font-serif text-2xl leading-tight text-foreground transition group-hover:text-primary">{article.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{article.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-foreground">Čítať článok <ArrowUpRight className="h-4 w-4" /></span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">O blogu</p>
          <p className="font-serif text-4xl leading-tight text-foreground md:text-5xl">Metamorfóza nie je cieľ. Je to spôsob, akým sa učíme byť bližšie sami sebe.</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
