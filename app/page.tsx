import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Footer } from "@/components/boty/footer"
import { Header } from "@/components/boty/header"

const articles = [
  { slug: "ritual-pomaly", category: "Rituál", title: "Prečo má pomalé ráno väčšiu silu než dokonalá rutina", excerpt: "Malé gestá, ktoré vracajú pozornosť späť k telu a vlastnému tempu." },
  { slug: "sila-jednoduchosti", category: "Úvaha", title: "Sila jednoduchosti v každodennej starostlivosti", excerpt: "O tom, čo môžeme z rutiny odobrať, aby v nej zostalo to podstatné." },
  { slug: "metamorfoza", category: "Metamorphosis", title: "Zmena nezačína navonok", excerpt: "Poznámky o vnútornom pohybe, nových začiatkoch a priestore pre seba." },
  { slug: "co-je-metamorphosis", category: "Metamorphosis", title: "Čo je Metamorphosis?", excerpt: "Proces prirodzenej premeny, v ktorom staré panciere odpadávajú a rodí sa slobodný motýľ." },
  { slug: "zazrak-v-luxemburskych-zahradach", category: "Príbeh", title: "Zázrak v Luxemburských záhradách: Keď ťa chráni tvoja vlastná frekvencia", excerpt: "O zabudnutej luxusnej taške v srdci Paríža, trojhodinovom odstupe, hmatateľnom dôkaze vnútornej ochrany a srdci na oblohe." },
  { slug: "zazrak-na-mori", category: "Príbeh", title: "Zázrak na mori: Keď sa modlitba stáva frekvenciou a spevom", excerpt: "O trvalom rešpekte k prírode, speve Hallelujah na jednom paddleboarde so Simi a kŕdli divokých delfínov, ktorí nás v bezpečí odprevádzali k brehu." },
  { slug: "ranne-prebudenie-nastrojov", category: "Rituál", title: "Ranné prebudenie nástrojov: Spomeň si, kým naozaj si", excerpt: "O tom, ako hneď po prebudení usmerniť svoju pozornosť, uzavrieť zlatý stĺp, zastaviť príbehy mysle a vstať s vedomým úsmevom." },
  { slug: "navrat-k-sebe", category: "Úvaha", title: "Návrat k sebe: Otázky, ktoré menia vnímanie života", excerpt: "Zamyslenie nad tým, prečo sme sa odpojili od prirodzených zákonitostí tela, prečo hľadáme odpovede vonku a aký pokoj nastane, keď znova preberieme zodpovednosť za svoj vnútorný svet." },
]

export default function HomePage() {

  return (
    <main>
      <Header />
      <section className="relative min-h-screen overflow-hidden bg-[#e3e1e2] pt-32">
        <Image src="/Fotky/480785660_624497300225070_1171894858753554870_n.jpg" alt="Portrét autorky" fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-end px-6 pb-16 lg:px-8 lg:pb-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-black/70">Zuzana · Metamorphosis</p>
            <h1 className="font-serif text-5xl leading-[1.05] text-black md:text-7xl">Miesto pre zmenu, ktorá začína vnútri.</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-black/75">Nestarneš. Len na sebe nosíš nánosy minulosti, potlačených emócií a kŕč v tkanivách.</p>
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
          <p className="font-serif text-4xl leading-tight text-foreground md:text-5xl">Metamorphosis nie je cieľ. Je to spôsob, akým sa učíme byť bližšie sami sebe.</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
