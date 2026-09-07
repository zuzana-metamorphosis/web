import { notFound } from "next/navigation"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"

const articles = {
  "ritual-pomaly": {
    category: "Rituál",
    title: "Prečo má pomalé ráno väčšiu silu než dokonalá rutina",
    intro: "Malé gestá, ktoré vracajú pozornosť späť k telu a vlastnému tempu.",
    body: "Ráno nemusí byť projekt, ktorý treba zvládnuť. Niekedy stačí niekoľko minút bez obrazovky, teplá voda a chvíľa, v ktorej si všimneme, ako sa cítime. Práve z týchto nenápadných rozhodnutí vzniká starostlivosť, ktorá vydrží.",
  },
  "sila-jednoduchosti": {
    category: "Úvaha",
    title: "Sila jednoduchosti v každodennej starostlivosti",
    intro: "O tom, čo môžeme z rutiny odobrať, aby v nej zostalo to podstatné.",
    body: "Jednoduchosť nie je rezignácia. Je to spôsob, ako si vybrať menej vecí, ktorým dokážeme venovať viac pozornosti. Keď rutina prestane byť zoznamom povinností, môže sa stať tichým miestom návratu k sebe.",
  },
  metamorfoza: {
    category: "Metamorphosis",
    title: "Zmena nezačína navonok",
    intro: "Poznámky o vnútornom pohybe, nových začiatkoch a priestore pre seba.",
    body: "Premena sa často začína skôr otázkou než odpoveďou. Dovolíme si zastaviť, prehodnotiť tempo a nechať starú predstavu o sebe pomaly odísť. Navonok sa možno nič nemení, no vnútri už vzniká nový smer.",
  },
  "co-je-metamorphosis": {
    category: "Metamorphosis",
    title: "Čo je Metamorphosis?",
    intro: "Metamorphosis je tichý, láskavý zázrak prirodzenej premeny.",
    body: [
      "Metamorphosis je tichý, láskavý zázrak prirodzenej premeny.",
      "Všetky sme najprv ako húsenice, ktoré si na sebe nesú ťažobu sveta, emócie a kŕč minulosti. Aby však mohol prísť zázrak, potrebujeme sa na chvíľu dať do ústrania – vojsť do tichej, bezpečnej kukly, stíšiť svet okolo a s Láskou sa plne venovať sama sebe.",
      "V tomto posvätnom priestore kukly sa spúšťa hlboká vnútorná premena. Učíš sa s ľahkosťou a vedomím oddeliť od svojich nástrojov – od mysle, emócií aj tela – a s láskavou zodpovednosťou ich prebrať do vlastných rúk. Rozpúšťa sa mráz z tváre, odchádza starý pancier a z tejto tichej hĺbky sa konečne rodí slobodný motýľ. Tvoja tvár sa rozjasňuje, telo sa oslobodzuje a ty sa vraciaš do svojej pravej podstaty.",
      "Vyvrcholením celej mojej práce a tohto posvätného procesu je 7 čarovných dní so mnou v Grécku – v priestore, kde sa tvoja vlastná Metamorphosis stáva žitou realitou.",
    ],
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
        <div className="mx-auto max-w-2xl px-6 py-16 lg:py-24">
          <div className="space-y-6 text-xl leading-relaxed text-foreground md:text-2xl">
            {Array.isArray(article.body) ? article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>) : <p>{article.body}</p>}
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
