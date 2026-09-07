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
  "zazrak-v-luxemburskych-zahradach": {
    category: "Príbeh",
    title: "Zázrak v Luxemburských záhradách: Keď ťa chráni tvoja vlastná frekvencia",
    intro: "O zabudnutej luxusnej taške v srdci Paríža, trojhodinovom odstupe, hmatateľnom dôkaze vnútornej ochrany a srdci na oblohe.",
    body: [
      "V apríli 2026 som pri prechádzke cez parížsky Jardin du Luxembourg so svojou kamarátkou Alessiou a jej dcérkou zabudla na lavičke svoju luxusnú dizajnovú tašku so zlatým logom a cennosťami. Z parku sme odišli do mestskej reštaurácie a spokojne sme jedli medzi ľuďmi. Až po celých troch hodinách som zistila, že tú kapsičku nemám. Alessia mi s obavou povedala, že po troch hodinách v preplnenom Paríži tam tá taška už určite nebude.",
      "Ja som však vnútorne zostala v absolútnom pokoji a neochvejnej istote Energetic Lifting. Otočili sme sa a išli späť. Keď sme dorazili k lavičke, stal sa ten pozemský zázrak: uprostred víriaceho davu ľudí stála tá luxusná taška na lavičke úplne opustená, nedotknutá a v bezpečí.",
      "Chytila som kapsičku do rúk, ukázala som ju Alessii, že tam naozaj je, a povedala som jej:",
      "„Alessia, ale teraz už musíme vedieť, že sme chránené. Toto je zázrak. To je dar.“",
      "S úsmevom som sa pozrela hore k nebu, aby som sa poďakovala – a v tom momente sme tam zbadali ten mrak, ktorý bol tak dokonale sformovaný do tvaru obrovského srdca. Svet ti nikdy nezrkadlí to, čoho sa bojíš, ale výhradne to, čo sama vnútorne vyžaruješ.",
    ],
  },
  "zazrak-na-mori": {
    category: "Príbeh",
    title: "Zázrak na mori: Keď sa modlitba stáva frekvenciou a spevom",
    intro: "O trvalom rešpekte k prírode, speve Hallelujah na jednom paddleboarde so Simi a kŕdli divokých delfínov, ktorí nás v bezpečí odprevádzali k brehu.",
    body: [
      "Mám trvalý a hlboký rešpekt pred prírodou, vodou a všetkými bytosťami, ktoré v mori žijú – cítim totiž oveľa viac, než len vidím očami. Písal sa rok 2023. Predtým, než som vstúpila do vody, som sa úpenlivo modlila a prosila o ochranu. Potom sme s mojou kamarátkou Simi vyrazili na oceán na jednom spoločnom paddleboarde. Slnko zapadlo a voda sa ponorila do mystickej oranžovej farby.",
      "Simi sedela vpredu na paddleboarde a veslovala. Asi po 200 metroch som zbadala, ako sa zrazu vyľakala. Vykukla som predo ňu a v smere jej pohľadu, približne 100 metrov priamo pred nami, som uvidela veľkého divokého delfína. Plával priamo k nám. Vnímala som, že musíme okamžite opustiť myšlienky na strach, a tak som Simi povedala: „Neboj sa, teraz sa nesmieme báť, lebo on nás cíti.“",
      "V tom momente som začala spievať Hallelujah. Ako sa náš spev niesol po vlnách, zrazu sa z vody vynorili ďalšie delfíny. Vytvorili okolo nášho paddleboardu dokonalý krúžiaci kruh. Vytvorili taký pohyb vody, že Simi už nemusela veslovať – prúd ich tanca nás sám unášal smerom k brehu. Zaliala ma najhlbšia istota a šťastie, aké som kedy zažila.",
      "Keď sme dospievali, v hlbokom prejave vďačnosti som sa dala do kľaku na paddleboarde, hľadela na nebo a z plného hrdla volala veľké ĎAKUJEM.",
      "Celý breh fascinovane sledoval toto divadlo. Keď sme boli asi 100 metrov od pevniny, delfíny odplávali. Ten prvý, ktorý k nám prišiel, odchádzal posledný a na pozdrav ešte z vody vystrekol prúd vody. Keď sme so Simi vkročili z čírej vody na krásnu kamenistú pláž, objali sme sa v slzách dojatia. Pochopili sme, že či uvidíš na nebi anjela, alebo stretneš v mori divokého delfína, tá energia je rovnaká – je to čistý dar a neklamné znamenie vnútornej ochrany.",
    ],
  },
  "ranne-prebudenie-nastrojov": {
    category: "Rituál",
    title: "Ranné prebudenie nástrojov: Spomeň si, kým naozaj si",
    intro: "O tom, ako hneď po prebudení usmerniť svoju pozornosť, uzavrieť zlatý stĺp, zastaviť príbehy mysle a vstať s vedomým úsmevom.",
    body: [
      "Rituál slúži na to, aby sme si hneď ráno spomenuli sami na seba – na to, kým naozaj sme. Ešte predtým, než vstaneš z postele, si uvedom svoj vlastný nástroj, ktorým je tvoje telo. Daj jazyk na podnebie a uzavri tak horný piest zlatého stĺpca. Začni voľne dýchať do brucha a uvoľni panvu. Práve uvoľnená panva a jazyk na podnebí nás okamžite dostávajú do stavu parasympatiku – do priestoru pokoja, bezpečia a hlbokej regenerácie. Energia nikde neuniká, zostáva v tele a znásobuje sa.",
      "Keď svoju pozornosť presunieš do dychu, ku správnej polohe jazyka a uvoľnenej panve – keď vnútorným okom vojdeš do svojho stredu v bruchu – tvoja myseľ stratí energiu na to, aby vytvárala príbehy. Ako presne zdôrazňoval aj Bruce Lee, keď pozornosť a vedomie vychádzajú z brucha (zo stredu), myseľ sa utíši a nespustí zbytočný prúd myšlienok. A bez vymyslených príbehov nevznikajú neužitočné emócie. Týmto jednoduchým krokom preberáš plnú zodpovednosť aj vedomé riadenie svojich nástrojov: mysle, emócií a tela.",
      "Ráno je kľúčové hneď sa precítiť vo svojom tele, zastaviť prúd myšlienok a vedome si vyčarovať úsmev na perách (podľa Very F. Birkenbihl aj 60 sekúnd klesajúceho/mechanického úsmevu vyvolá v mozgu presne tú istú hormonálnu reakciu šťastia a náplav endorfínov, ako keď sa 10 sekúnd usmievame úprimne). Pri tomto úsmeve v duchu ďakuješ a žehnáš. A až vtedy, keď máš uvoľnenú panvu, jazyk opretý o podnebie, úsmev na perách a vnútri pocit čistej radosti – až vtedy vstaň.",
    ],
  },
  "navrat-k-sebe": {
    category: "Úvaha",
    title: "Návrat k sebe: Otázky, ktoré menia vnímanie života",
    intro: "Zamyslenie nad tým, prečo sme sa odpojili od prirodzených zákonitostí tela, prečo hľadáme odpovede vonku a aký pokoj nastane, keď znova preberieme zodpovednosť za svoj vnútorný svet.",
    body: [
      "Skúsme na chvíľu zastaviť kolobeh dní a položiť si pár otvorených, rétorických otázok. Nebolo by pre každého z nás jednoduchšie a lepšie, keby sme sa najprv naučili ovládať svoje vlastné nástroje – svoje telo, svoje myšlienky a svoje emócie? Ako je možné, že sa v našej spoločnosti neučíme narábať s tým najvzácnejším, čo sme do života dostali?",
      "Nebolo by efektívnejšie použiť telo presne na to, na čo bolo stvorené, a spomenúť si na prirodzený dych, chodidlo a držanie tela? V mnohých ázijských krajinách je úplne prirodzené kľačať alebo odpočívať v hlbokom drepe namiesto sedenia na lavičkách a 90-stupňových stoličkách, ktoré nám v západnom svete postupne ruinujú celé pohybové ústrojenstvo, kolená a chrbticu.",
      "A nebolo by oveľa efektívnejšie poučiť matky, aby jemne a vedomo dohliadali na svoje deti? Aby dbali na to, aby mali deti jazyk stále opretý hore na podnebí? Vyhli by sme sa tým krivým zubom, asymetriám tváre, pľúcnym alergiám, astme, zahlieneniu či neskoršiemu chrápaniu a hustým slinám – všetkým tým problémom, ktoré vznikajú len preto, že jazyk leží bezvládne dole na dne úst.",
      "Nebolo by efektívnejšie vyhradiť si 10 minút denne na to, aby sme si jednoducho sadli, pozerali sa na oblohu alebo so zatvorenými očami dýchali vedomým dychom priamo do panvy a bránice?",
      "Keby sme poznali sami seba a ovládali svoje vnútro, neznamenalo by to pre celé ľudstvo, že by sme si začali jeden druhého vážiť ešte viac? Znova by sme sa dokázali naozaj vidieť. V iných kultúrach sveta je odchod človeka z tohto sveta väčšou oslavou než svadba. Ľudia prichádzajú v bielom, pretože vedia, že táto bytosť už dokončila svoju pozemskú školu a odovzdala svoju školskú uniformu – svoje telo. Veď sa opýtaj sám seba: kto chce zostávať v škole po maturite? Každý sa chce vrátiť domov. A tým skutočným domovom nie je táto zem.",
      "Skutočná krása vychádza výhradne zvnútra, z pocitu absolútneho bezpečia a vnútorného pokoja. Namiesto toho, aby sme sa neustále zachraňovali vonkajšími pomôckami a dočasnými riešeniami, preberme plnú zodpovednosť za svoj život, za svoje slová, myšlienky, pocity aj za stav svojho tela. Odpovede na najdôležitejšie otázky totiž nikdy nenájdeme vonku – čakajú na nás v našom vlastnom vnútri.",
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
