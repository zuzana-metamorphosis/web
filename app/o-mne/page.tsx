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
            <Image src="/Fotky/480785660_624497300225070_1171894858753554870_n.jpg" alt="Portrét Zuzany Harvalik" fill className="object-cover" priority />
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
            <p>O MNE</p>
            <p>Dnes, vo svojich 48 rokoch, v sebe spájam viac ako 30 rokov nepretržitého výskumu, pozorovania a zberu poznatkov, ktoré sú mojím najväčším životným hobby a skutočným zmyslom bytia.</p>
            <p>Moje hlboké spojenie s prírodou sa začalo už v detstve. Ako malé dievča som najradšej trávila večery sama v záhrade na hojdačke, vnímala vône kvetov a stromov – dodnes viem podľa jedinej vône rozoznať marhuľu od jablone. S láskou som zbierala herbáre, študovala liečivú moc bylín a prirodzene vnímala svet okolo seba cez vysokú citlivosť.</p>
            <p>Skutočná škola života sa však otvorila v roku 1996, hneď dva týždne po maturite. Vo svojich 18 rokoch som predala svoj jediný majetok – bicykel – ako prvú investíciu na cestu do Rakúska. Plán bol jednoduchý: odísť len na jeden rok, zarobiť si na vysokú školu a vrátiť sa. Život ma však viedol inak. Prvé tri roky som strávila v Dolnom Rakúsku a ďalšie štyri roky vo Viedni.</p>
            <p>Týchto celých 7 rokov som žila v Rakúsku bez trvalého pobytu, bez pracovného povolenia a bez zdravotného poistenia. Aby som prežila, robila som akúkoľvek poctivú prácu – upratovala som, pracovala ako chyžná, pomocníčka v kuchyni, opatrovateľka, privyrábala si v záhradách, strážila deti a na diskotékach zbierala a umývala poháre. Táto náročná a pokorná skúsenosť, spolu s hraničnou situáciou bez poistenia, ma prinútila prebrať absolútnu, vedomú zodpovednosť za svoje zdravie aj život. Keďže som nemohla navštevovať lekárov, začala som sa do hĺbky vzdelávať v alternatívnej medicíne a hľadať odpovede tam, kde bežný systém končil.</p>
            <p>Prešla som liečiteľskými školami, študovala som diagnostiku z tváre, jazyka a očnej dúhovky (irisdiagnostiku), tradičnú čínsku medicínu aj učenia starovekej Atlantídy, Babylona a antického Grécka. Nahliadla som do najhlbších komôr liečiteľstva po celom svete – od peruánskych curanderas cez sibírske šamanky až po slovanské tradície. Od svojich 19 rokov žijem v súlade s mesačnými fázami a konšteláciami. Na všetko, čo mi bolo kedy predložené ako fakt, som sa pýtala s veľkým otáznikom a išla nekompromisne do podstaty.</p>
            <p>Zároveň už vyše 20 rokov pracujem ako dentálna hygienička vo Viedni. Vďaka tomu som prepojila klasickú medicínsku anatómiu s anatómiou energií východných kultúr. Svoju túžbu po porozumení ľudskému svetu a kultúram som naplnila aj ukončeným univerzitným štúdiom transkulturálnej komunikácie v troch cudzích rečiach vo Viedni. S hlbokou láskou k pohybu, komunikácii a dychu som v sebe niesla aj učenie jogy – 14. februára 2024, na začiatku čínskeho nového roka v znamení Dreveného Draka, som vo Viedni založila vlastnú Smile Jogu, integrovaný systém prepájajúci vedomý pohyb, dych a svalovú bdelosť.</p>
            <p>Moje najväčšie odpovede však neprišli z kníh, ale z dlhoročného, tichého pozorovania. Mojimi najväčšími učiteľmi sa stali deti. Boli pre mňa živým vzorom čistej ľudskej prirodzenosti. Roky som fascinovane sledovala ich dych, postavenie tela, slobodný pohyb bez kŕča, prirodzenú prácu jazyka a tvárovú mimiku, v ktorých nezostáva žiadny stres.</p>
            <p>Ibaže aj ja som sa na svojej ceste na čas stratila vo Viedni a v nárokoch hmotného sveta. Veľký zlom prišiel rozvodom môjho manželstva v roku 2020. Práve vtedy som začala vo Viedni pôsobiť ako sprievodkyňa pri umieraní. S plnou vnútornou istotou totiž viem a cítim, kým v skutočnosti sme – že telo, myseľ a emócie sú len našimi nástrojmi. Smrť sa stala mojou najlepšou priateľkou a učiteľkou. Dodáva mi odvahu žiť svoj vlastný život bez plnenia očakávaní druhých.</p>
            <p>Vstúpila som do obdobia vedomého celibátu, hlbokej očisty a práce s vlastnou energiou. V roku 2021 však prišiel ďalší životný šok – po 17 rokoch ma vyhodili z práce, pretože som odmietla podstúpiť COVID očkovanie. Zostala som verná svojej pravde a svojmu telu. Na 4 mesiace som odišla do Grécka, kde som sa stíšila a začala úplne nový život.</p>
            <p>Obdobie od roku 2020 sa stalo posvätnou cestou premeny – symbolickým prechodom cez 7 hlavných čakier a 7 endokrinných žliaz ľudského tela. V roku 2020 sa otvorila práca s panvovým dnom, dychom a jazykom. Skutočný osobný prielom však nastal 1. septembra 2025, keď som sa postavila pred zrkadlo a s plným vedomím uvidela, že moja tvár je doslova zmrazená.</p>
            <p>Začala som do najmenších detailov študovať fasciálny systém, autonómny nervový systém, prepojenie svalov, dychu a toku energie. Tak vznikla moja autorská EL metóda (Energetic Lifting). Nádherným výsledkom tohto tréningu bolo, že sa z mojej tváre aj celého tela kompletne uvoľnil dlhoročný kŕč – a po 9 mesiacoch mi po celej hlave začali opäť prirodzene rásť moje pôvodné tmavohnedé vlasy.</p>
            <p>Nikoho nechcem poučovať ani učiť. Mojím zámerom je navrátiť nás k tomu, čo sme kedysi tutti prirodzene žili – do vnútrotelového pokoja, hlbokej regenerácie v parasympatiku a k absolútnemu zdraviu tela aj duše. Všetko, čo odovzdávam, hovorím preto, že som to sama prežila, preskúmala a stelesnila vo vlastnom tele.</p>
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
              "E-book Bezpečie je nová krása",
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
