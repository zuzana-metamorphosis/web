import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Footer } from "@/components/boty/footer"
import { Header } from "@/components/boty/header"

const articles = [
  { slug: "ritual-pomaly", category: "Rituál", title: "Prečo má pomalé ráno väčšiu silu než dokonalá rutina", excerpt: "Malé gestá, ktoré vracajú pozornosť späť k telu a vlastnému tempu." },
  { slug: "sila-jednoduchosti", category: "Úvaha", title: "Sila jednoduchosti v každodennej starostlivosti", excerpt: "O tom, čo môžeme z rutiny odobrať, aby v nej zostalo to podstatné." },
  { slug: "metamorfoza", category: "Metamorphosis", title: "Zmena nezačína navonok", excerpt: "Poznámky o vnútornom pohybe, nových začiatkoch a priestore pre seba." },
  { slug: "co-je-metamorphosis", category: "Metamorphosis", title: "Čo je Metamorphosis?", excerpt: "Proces prirodzenej premeny, v ktorom staré panciere odpadávajú a rodí sa slobodný motýľ." },
]

export default function BlogPage() {
  return (
    <main>
      <Header />
      <section className="px-6 pb-24 pt-40 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">Blog</p>
          <h1 className="max-w-3xl font-serif text-5xl leading-tight text-foreground md:text-7xl">Zápisky o premene</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">Myšlienky, rituály a príbehy pre pomalší, pravdivejší spôsob života.</p>

          <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-3">
            {articles.map((article) => (
              <Link key={article.slug} href={`/journal/${article.slug}`} className="group">
                <article>
                  <p className="mb-3 text-xs uppercase tracking-[0.25em] text-primary">{article.category}</p>
                  <h2 className="font-serif text-2xl leading-tight text-foreground transition group-hover:text-primary">{article.title}</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{article.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-foreground">Čítať článok <ArrowUpRight className="h-4 w-4" /></span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
