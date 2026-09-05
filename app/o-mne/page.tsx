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
            <Image src="/images/hero-model.jpg" alt="Portrét Zuzany Harvalik" fill className="object-cover" priority />
          </div>
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">O mne</p>
            <h1 className="font-serif text-5xl leading-tight text-foreground md:text-7xl">ZUZANA HARVALIK</h1>
            <p className="mt-6 text-xl leading-relaxed text-foreground">Autorka EL metódy &amp; Priekopníčka somatickej transformácie</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">Neurosomatický myofasciálny tréning, reverzibilita šedivenia a uvoľňovanie traumy (potlačených emócií) z tváre aj celého tela.</p>
          </div>
        </div>
      </section>

      <section className="bg-card px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Ako vznikla EL metóda</p>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>Moja cesta hlbokej očisty a osobnej transformácie sa naplno otvorila v roku 2020 po rozchode s manželom. Odvtedy kráčam po ceste vedomého celibátu, vnútornej čistoty a absolútneho prepojenia.</p>
            <p>Téme šedivenia, vlasov a regenerácie organizmu som sa začala venovať pred 14 rokmi, keď som u seba spozorovala prvé šediny. Skutočný zlom však nastal 1. septembra 2025, keď som sa postavila pred zrkadlo a s plným vedomím uvidela, že moja tvár je doslova zmrazená.</p>
            <p>Začala som do detailov študovať fasciálny systém, autonómny nervový systém, prepojenie svalov, dychu a toku energie. Tak vznikla EL metóda (Energetic Lifting). Vedľajším produktom tohto tréningu bolo, že mi po 9 mesiacoch začali po celej hlave opäť prirodzene rásť moje pôvodné tmavohnedé vlasy a z tváre aj celého tela sa kompletne uvoľnil kŕč.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">Čo je EL metóda</p>
            <h2 className="font-serif text-4xl leading-tight text-foreground md:text-6xl">Energetic Lifting</h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">EL metóda je neurosomatický myofasciálny systém. Spája vedomú prácu so 75 svalmi hlavy a tváre, polohu jazyka na podnebí, uvoľnenie skalpu (galea aponeurotica), aktiváciu bránice a hlboké panvovo-kostrčové dýchanie cez panvové dno (pubococcygeus – Pubo). Je to cesta navrátenia tela a tváre do ich prirodzeného stavu bytia.</p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <article className="border-t border-border pt-6">
              <h3 className="font-serif text-2xl text-foreground">Uvoľnenie traumy z tváre</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">Vrásky nie sú len znakom veku – sú to skutočné kŕče v našom fasciálnom systéme. Uvoľnením mikrokŕčov v svaloch a fasciách tváre sa vrásky prirodzene rozpúšťajú, mizne stresová maska aj dlhoročné napätie.</p>
            </article>
            <article className="border-t border-border pt-6">
              <h3 className="font-serif text-2xl text-foreground">Uvoľnenie traumy z panvy</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">Ako hore, tak aj dole – panva a naša tvár sú prepojené nádoby a vzájomné zrkadlo. Dýchanie cez Pubo uvoľňuje spodné emočné centrum, čím sa oslobodzuje celá chrbtica, krk aj tvár.</p>
            </article>
            <article className="border-t border-border pt-6">
              <h3 className="font-serif text-2xl text-foreground">Kontrola nad autonómnym systémom</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">Vedomou prácou preberáme kontrolu nad vlastným autonómnym nervovým systémom. Prechodom z permanentného kŕča do parasympatiku vstupuje telo do stavu bezpečia, kde sa spúšťa hlboká obnova tkanív.</p>
            </article>
            <article className="border-t border-border pt-6">
              <h3 className="font-serif text-2xl text-foreground">Reverzibilita šedivenia</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">Obnovením mikrocirkulácie v oblasti skalpu a uvoľnením fascií sa navracia výživa k vlasovým cibuľkám, vďaka čomu opäť rastú vaše pôvodné tmavé vlasy.</p>
            </article>
            <article className="border-t border-border pt-6 md:col-span-2 lg:col-span-1">
              <h3 className="font-serif text-2xl text-foreground">Energetický stĺp a motor bránice</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">Prepojenie jazyka na podnebí a uvoľnenej panvy vytvára pevný energetický stĺp. Jeho motorom je aktívna bránica – vnútorný „zlatý padák“, ktorý pumpuje energiu, vyživuje orgány a drží prirodzený tónus celej tváre.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-card px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">Ponuka</p>
          <h2 className="font-serif text-4xl text-foreground md:text-6xl">ZuzanaHarvalik.com</h2>
          <div className="mt-12 grid gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "E-book Bezpečná krása",
              "Online kurzy EL metódy",
              "Víkendový Mini Metamorphosis (Slovensko)",
              "7-dňový Metamorphosis (Grécko)",
              "Smile Yoga (Viedeň)",
              "Osobné poradenstvo",
            ].map((offer) => (
              <div key={offer} className="border-b border-border py-5 text-lg text-foreground">{offer}</div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
