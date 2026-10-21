import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Calendar, MapPin, Mail, Facebook, Instagram, Sparkles, CheckCircle2 } from "lucide-react"
import { Footer } from "@/components/boty/footer"
import { Header } from "@/components/boty/header"

const articles = [
  { slug: "ritual-pomaly", category: "Rituál", title: "Ako začať deň v sile Tvorcu: Prečo má malý ranný rituál väčšiu silu než dokonalá rutina", excerpt: "Malý ranný rituál je vedomým pozvaním k sebe. Prehľad 7 krokov od večernej prípravy superfoodu cez Zlatý piest, ázijský podrep až po Oil Pulling a vedomý úsmev." },
  { slug: "sila-jednoduchosti", category: "Úvaha", title: "Sila jednoduchosti v každodenných rituáloch", excerpt: "Rozhodnutie o tom, čo z rutiny odobrať. O myšlienkach ako oblakoch, múdrosti Brucea Leeho a 90-sekundovom tajomstve emócií." },
  { slug: "metamorfoza", category: "Metamorphosis", title: "Zmena nezačína navonok", excerpt: "Poznámky o vnútornom pohybe, nových začiatkoch a priestore pre seba." },
  { slug: "co-je-metamorphosis", category: "Metamorphosis", title: "Metamorfóza: Tichý zázrak prirodzenej premeny", excerpt: "O tichom bezpečí kukly, znovuzrodení motýľa, návrate k sebe a 7-dňovom transformačnom pobyte na gréckom Peloponéze v hoteli White Donkey." },
  { slug: "zazrak-v-luxemburskych-zahradach", category: "Príbeh", title: "Zázrak v Luxemburských záhradách: Keď ťa chráni tvoja vlastná frekvencia", excerpt: "O zabudnutej luxusnej taške v srdci Paríža, trojhodinovom odstupe, hmatateľnom dôkaze vnútornej ochrany a srdci na oblohe." },
  { slug: "zazrak-na-mori", category: "Príbeh", title: "Zázrak na mori: Keď sa modlitba stáva frekvenciou a spevom", excerpt: "O trvalom rešpekte k prírode, speve Hallelujah na jednom paddleboarde so Simi a kŕdli divokých delfínov, ktorí nás v bezpečí odprevádzali k brehu." },
  { slug: "ranne-prebudenie-nastrojov", category: "Rituál", title: "Ranné prebudenie nástrojov: Spomeň si, kým naozaj si", excerpt: "O tom, ako hneď po prebudení usmerniť svoju pozornosť, uzavrieť zlatý stĺp, zastaviť príbehy mysle a vstať s vedomým úsmevom." },
  { slug: "navrat-k-sebe", category: "Úvaha", title: "Návrat k sebe: Otázky, ktoré menia vnímanie života", excerpt: "Zamyslenie nad tým, prečo sme sa odpojili od prirodzených zákonitostí tela, prečo hľadáme odpovede vonku a aký pokoj nastane, keď znova preberieme zodpovednosť za svoj vnútorný svet." },
]

export default function HomePage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-[#e3e1e2] pt-32">
        <Image src="/Fotky/480785660_624497300225070_1171894858753554870_n.jpg" alt="Portrét autorky" fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[calc(90vh-4rem)] max-w-7xl items-end px-6 pb-16 lg:px-8 lg:pb-24">
          <div className="max-w-3xl">
            {/* Elegant Floating Pill Badge for Retreat (Option 1) */}
            <div className="mb-6">
              <Link
                href="/shop/mini-metamorphosis-slovensko"
                className="group inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/85 hover:bg-white backdrop-blur-md border border-white/90 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <span className="flex h-2.5 w-2.5 relative shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                  <Sparkles className="w-3.5 h-3.5" /> 20. – 22. 11. 2026
                </span>
                <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-foreground/30" />
                <span className="text-xs sm:text-sm font-serif tracking-wide text-foreground font-medium">
                  3. Mini-Metamorfóza (Lučenec)
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            </div>

            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-black/70">Zuzana · Metamorphosis</p>
            <h1 className="font-serif text-5xl leading-[1.05] text-black md:text-7xl">Miesto pre zmenu, ktorá začína vnútri.</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-black/75">Nestarneš. Len na sebe nosíš nánosy minulosti, potlačených emócií a kŕč v tkanivách.</p>
          </div>
        </div>
      </section>

      {/* Featured Event Section: 3. Mini-Metamorfóza */}
      <section id="podujatie" className="relative px-6 py-20 lg:px-8 lg:py-28 bg-gradient-to-b from-card via-background to-card border-t border-b border-border/60">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Najbližší transformačný víkend</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-foreground leading-[1.1]">
                3. Mini-Metamorfóza na Slovensku
              </h2>
              <p className="mt-3 text-lg sm:text-xl font-medium text-foreground/80 font-serif">
                🦋 Návrat tela do bezpečia – uvoľnenie traumy & návrat moci k SEBE SAMÉMU 🦋
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-card border border-border shadow-xs text-foreground font-medium">
                <Calendar className="w-4 h-4 text-primary" />
                20. 11. – 22. 11. 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-card border border-border shadow-xs text-foreground font-medium">
                <MapPin className="w-4 h-4 text-primary" />
                Prameni Života pri Lučenci
              </span>
            </div>
          </div>

          {/* Grid: Poetic Letter & Video */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left: Message from Zuzana */}
            <div className="space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-background/80 border border-border/80 shadow-xs backdrop-blur-xs space-y-4 text-muted-foreground leading-relaxed">
                <p className="font-serif text-lg text-foreground italic">
                  „Milá duša 🌿, prečo klasické krémy, kozmetika ani bežné cvičenie nestačia na to, aby si sa cítila skutočne krásna a uvoľnená, kým tvoj nervový systém necíti BEZPEČIE?“
                </p>
                <p>
                  Skutočná krása nevychádza zvonku. Vychádza zvnútra – z tvojho pokoja. Žena má v sebe prirodzenú pokojnosť a láskyplnosť, no v kolotoči povinností a stresu na to často zabúdame. Naše telo sa prepne do režimu prežitia, trauma (či už malá alebo veľká) sa zapíše do našich buniek, fascií a nervového systému. Prestaneš sa cítiť vo vlastnom tele doma.
                </p>
                <p>
                  A to je presne to, prečo sme tu. Poď s nami na chvíľu vystúpiť z každodenného zhonu, nadýchnuť sa plnými dúškami a spomenúť si na svoj prirodzený stav bytia, ktorým je hlboký pokoj a bezpečie.
                </p>
                <p className="font-medium text-foreground pt-2">
                  Príď presne taká, aká si. Nie je čo robiť, len sa uvoľniť do bezpečia a dovoliť si transformáciu.
                </p>
                <p className="font-serif text-foreground italic text-right pt-2">
                  Teším sa na teba, Zuzana 🤍
                </p>
              </div>

              {/* Highlights List */}
              <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-foreground/85">
                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-card border border-border/60">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Kostrčovo-lonový dych dieťaťa & Smile Yoga</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-card border border-border/60">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Zvukový kúpeľ parasympatiku (Matej Jurenka)</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-card border border-border/60">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Fasciálny systém ako pamäť traumy & vrások</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-card border border-border/60">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Liečivý jaskynný kúpeľ v Sklených Tepliciach (Parenica)</span>
                </div>
              </div>
            </div>

            {/* Right: Video & Direct Contact Box */}
            <div className="space-y-6">
              {/* Video Preview Card */}
              <div className="relative aspect-16/10 rounded-3xl overflow-hidden bg-black shadow-lg border border-border/80 group">
                <video
                  src="/images/hero-amber.mp4"
                  poster="/Fotky/IMG_7721.JPG"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold uppercase tracking-wider">
                      Atmosféra
                    </span>
                    <p className="text-white font-serif text-lg sm:text-xl mt-1 drop-shadow-md">
                      Prameni Života & Víkend uvoľnenia
                    </p>
                  </div>
                  <Link
                    href="/shop/mini-metamorphosis-slovensko"
                    className="p-3 rounded-full bg-white text-black hover:scale-105 transition-transform shadow-md"
                    title="Zobraziť detail víkendu"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Direct Contacts Card */}
              <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-xs">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-3">
                  Priamy kontakt a rezervácie
                </p>
                <div className="grid sm:grid-cols-3 gap-3">
                  <a
                    href="mailto:zuzanab@gmx.at?subject=Rezervacia%203.%20Mini-Metamorfoza%20Lucenec"
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-muted/60 hover:bg-primary/10 border border-border hover:border-primary/40 transition group"
                  >
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <div className="overflow-hidden">
                      <p className="text-[10px] text-muted-foreground uppercase font-semibold">E-mail</p>
                      <p className="text-xs font-medium text-foreground truncate group-hover:text-primary transition-colors">
                        zuzanab@gmx.at
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://www.facebook.com/people/Zuzana-Harvalik-Bujdakova/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-muted/60 hover:bg-primary/10 border border-border hover:border-primary/40 transition group"
                  >
                    <Facebook className="w-4 h-4 text-primary shrink-0" />
                    <div className="overflow-hidden">
                      <p className="text-[10px] text-muted-foreground uppercase font-semibold">Facebook</p>
                      <p className="text-xs font-medium text-foreground truncate group-hover:text-primary transition-colors">
                        Zuzana Harvalik
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/meta_morphos_is/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-muted/60 hover:bg-primary/10 border border-border hover:border-primary/40 transition group"
                  >
                    <Instagram className="w-4 h-4 text-primary shrink-0" />
                    <div className="overflow-hidden">
                      <p className="text-[10px] text-muted-foreground uppercase font-semibold">Instagram</p>
                      <p className="text-xs font-medium text-foreground truncate group-hover:text-primary transition-colors">
                        @meta_morphos_is
                      </p>
                    </div>
                  </a>
                </div>

                <div className="mt-5 flex flex-col sm:flex-row items-center gap-3">
                  <Link
                    href="/shop/mini-metamorphosis-slovensko"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity shadow-xs"
                  >
                    <span>Kompletný harmonogram & Rezervácia</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/shop"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-full bg-card border border-border text-foreground text-xs sm:text-sm font-medium hover:bg-muted transition-colors"
                  >
                    Všetky programy a e-shop
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journal Section */}
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

      {/* About Section */}
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

