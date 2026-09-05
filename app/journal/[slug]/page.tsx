import Image from "next/image"
import { notFound } from "next/navigation"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"

const articles = {
  "ritual-pomaly": {
    category: "Rituál",
    title: "Prečo má pomalé ráno väčšiu silu než dokonalá rutina",
    intro: "Malé gestá, ktoré vracajú pozornosť späť k telu a vlastnému tempu.",
    image: "/images/skincare-ritual.jpg",
    body: "Ráno nemusí byť projekt, ktorý treba zvládnuť. Niekedy stačí niekoľko minút bez obrazovky, teplá voda a chvíľa, v ktorej si všimneme, ako sa cítime. Práve z týchto nenápadných rozhodnutí vzniká starostlivosť, ktorá vydrží.",
  },
  "sila-jednoduchosti": {
    category: "Úvaha",
    title: "Sila jednoduchosti v každodennej starostlivosti",
    intro: "O tom, čo môžeme z rutiny odobrať, aby v nej zostalo to podstatné.",
    image: "/images/natural-leaf.jpg",
    body: "Jednoduchosť nie je rezignácia. Je to spôsob, ako si vybrať menej vecí, ktorým dokážeme venovať viac pozornosti. Keď rutina prestane byť zoznamom povinností, môže sa stať tichým miestom návratu k sebe.",
  },
  metamorfoza: {
    category: "Metamorfóza",
    title: "Zmena nezačína navonok",
    intro: "Poznámky o vnútornom pohybe, nových začiatkoch a priestore pre seba.",
    image: "/images/bento-skin-model.jpg",
    body: "Premena sa často začína skôr otázkou než odpoveďou. Dovolíme si zastaviť, prehodnotiť tempo a nechať starú predstavu o sebe pomaly odísť. Navonok sa možno nič nemení, no vnútri už vzniká nový smer.",
  },
} as const

type ArticleSlug = keyof typeof articles

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }))
}

export default async function JournalArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles[slug as ArticleSlug]

  if (!article) notFound()

  return (
    <main className="min-h-screen">
      <Header />
      <article className="pt-32">
        <div className="mx-auto max-w-4xl px-6 pb-16 text-center lg:px-8">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-primary">{article.category}</p>
          <h1 className="font-serif text-5xl leading-tight text-foreground md:text-7xl">{article.title}</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{article.intro}</p>
        </div>
        <div className="relative mx-auto aspect-[16/8] max-w-7xl overflow-hidden px-6 lg:px-8">
          <Image src={article.image} alt="" fill className="object-cover px-6 lg:px-8" priority />
        </div>
        <div className="mx-auto max-w-2xl px-6 py-16 lg:py-24">
          <p className="text-xl leading-relaxed text-foreground md:text-2xl">{article.body}</p>
        </div>
      </article>
      <Footer />
    </main>
  )
}
