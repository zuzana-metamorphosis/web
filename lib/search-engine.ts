export type SearchCategory = "all" | "articles" | "products" | "pages"

export interface SearchItem {
  id: string
  type: "article" | "product" | "page"
  title: string
  subtitle?: string
  excerpt: string
  content?: string
  categoryLabel: string
  url: string
  image?: string
  badge?: string
  price?: string
  location?: string
  tags: string[]
}

export interface SearchResultItem extends SearchItem {
  score: number
  matchedSnippet?: string
}

/**
 * Remove Slovak and other diacritics for accurate fuzzy search matching
 */
export function normalizeText(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
}

/**
 * Extract context snippet around the matched term
 */
export function extractSnippet(text: string, queryWords: string[], maxLength: number = 130): string {
  if (!text || queryWords.length === 0) return ""

  const normalizedText = normalizeText(text)
  let bestIndex = -1

  for (const word of queryWords) {
    const idx = normalizedText.indexOf(word)
    if (idx !== -1 && (bestIndex === -1 || idx < bestIndex)) {
      bestIndex = idx
    }
  }

  if (bestIndex === -1) {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text
  }

  const start = Math.max(0, bestIndex - 40)
  const end = Math.min(text.length, bestIndex + maxLength - 40)
  let snippet = text.slice(start, end).trim()

  if (start > 0) snippet = "..." + snippet
  if (end < text.length) snippet = snippet + "..."

  return snippet
}

export const popularSearchTags = [
  "Vagusový nerv",
  "EL-Metóda",
  "E-book",
  "Peloponéz Grécko",
  "Kostrčovo-panvové dýchanie",
  "Zlatý piest",
  "Smile Yoga Viedeň",
  "Oil Pulling",
  "Neuroplasticita",
  "Ázijský podrep",
]

/**
 * Complete search database for Zuzana Metamorphosis (Articles, Products/Programs, and Site Pages)
 */
export const searchIndex: SearchItem[] = [
  // --- PROGRAMY & PRODUKTY ---
  {
    id: "prod-ebook",
    type: "product",
    title: "E-book: Bezpečie je nová krása",
    subtitle: "Sprievodca somatickým omladením, fasciálnym uvoľnením a vnútorným pokojom",
    excerpt: "Digitálna mapa k aktivácii vagusového nervu, uvoľneniu mikrokŕčov v tvári a hlbokému vnútornému pokoju.",
    content: "Predstav si ten pocit, keď sa ráno prebúdzaš a prvá vec, ktorú ucítiš, je hlboko zakorenený pokoj vo vnútri tvojho tela. Žiadny ranný zhon, žiadny vnútorný tlak. Tento e-book je tvojou osobnou mapou pre každodenný život. Aktivácia vagusového nervu, jemné somatické cvičenia, uvoľnenie mikrokŕčov v tvári aj v celom tele, návod na hydratáciu fascií a rozprúdenie fasciálnej tekutiny.",
    categoryLabel: "E-book",
    url: "/shop/ebook-bezpecie-je-nova-krasa",
    image: "/Fotky/ebook.jpg",
    badge: "Bestseller",
    price: "29 €",
    tags: ["ebook", "kniha", "pdf", "vagus", "vagusovy nerv", "somatika", "omladenie", "fascie", "mikrokrc", "pokoj", "bezpecie", "tvar"],
  },
  {
    id: "prod-grecko",
    type: "product",
    title: "Metamorphosis: 7-dňový transformačný pobyt v Grécku",
    subtitle: "Týždeň ústrania, hlbokého liečenia, omladenia a znovuzrodenia v raji",
    excerpt: "7 dní, 7 čakier, 7 nových návykov v 4* boutique hoteli White Donkey na Peloponéze so Zuzanou a Smile Yogou.",
    content: "Dovoľ si na chvíľu vystúpiť zo zrýchleného sveta a ponoriť sa do liečivého ticha a energie Peloponézu. V očarujúcom 4-hviezdičkovom boutique hoteli White Donkey vytvárame bezpečný priestor pre tvoje celkové omladenie a regeneráciu. Tréning techniky EL metódy, myofasciálny tréning pre 75 svalov hlavy a tváre, Smile Yoga a parasympatický tréning, anatómia chôdze, kostrčovo-panvové dýchanie.",
    categoryLabel: "Transformačný pobyt",
    url: "/shop/metamorphosis-pobyt-grecko",
    image: "/Fotky/grecko.jpg",
    badge: "Exkluzívny pobyt",
    location: "Peloponéz, Grécko (White Donkey)",
    tags: ["grecko", "pobyt", "retreat", "peloponez", "white donkey", "cakry", "smile yoga", "el metoda", "regeneracia", "more", "relax"],
  },
  {
    id: "prod-slovensko",
    type: "product",
    title: "Mini Metamorphosis: Víkendový pobyt na Slovensku",
    subtitle: "Intenzívny regeneračný víkend parasympatického tréningu a liečenia",
    excerpt: "3-dňový regeneračný reštart nervového systému, fasciálne uvoľnenie a návrat k sebe v lone slovenskej prírody.",
    content: "Cítiš, že tvoje telo potrebuje zastaviť, nadýchnuť sa a dobiť batérie práve teraz? Tento víkendový pobyt funguje ako tvoj ochranný kukol a nesie rovnaké hlboké posolstvo: Bezpečie je nová krása. Workshopy anatómie chôdze a kostrčovo-panvového dýchania pre uvoľnenie panvového dna, fasciálne a somatické techniky pre obnovu elasticity tkanív.",
    categoryLabel: "Víkendový pobyt",
    url: "/shop/mini-metamorphosis-slovensko",
    image: "/Fotky/IMG_7721.JPG",
    badge: "Intenzívny víkend",
    location: "Slovensko",
    tags: ["slovensko", "vikend", "pobyt", "mini metamorphosis", "oddych", "regeneracia", "parasympatikus", "chodza", "dychanie"],
  },
  {
    id: "prod-el-metoda",
    type: "product",
    title: "Online kurz: Energetic Lifting Method (EL-Metóda)",
    subtitle: "Somatický, myofasciálny a neurosomatický tréning pre prirodzené omladenie",
    excerpt: "Prebuď 75 svalov tváre a hlavy, aktivuj piezoelektrický tok tekutín a navráť tkanivám mladistvú elasticitu.",
    content: "Nauč sa vnímať, uvoľniť a navrátiť do rovnováhy 75 svalov svojej tváre a hlavy. Tento kurz spája neurosomatický pohyb s aktiváciou piezoelektrického prúdu a prúdením tekutín v tele, čím štartuje hĺbkovú regeneráciu fascií, svalov, kostí a kĺbov. Variant A: Začiatočník a pohybový aparát (5 modulov), Variant B: VIP s 2 osobnými 1:1 online konzultáciami a diagnostikou.",
    categoryLabel: "Online kurz",
    url: "/shop/online-kurz-el-metoda",
    image: "/Fotky/lifting a konzultacia.jpg",
    badge: "Odporúčané",
    tags: ["el metoda", "lifting", "online kurz", "tvar", "vrasky", "omladenie", "75 svalov", "galea aponeurotica", "piezoelektrina", "neurosomatika"],
  },
  {
    id: "prod-dychanie",
    type: "product",
    title: "Online kurz: Kostrčovo-panvové dýchanie",
    subtitle: "Odomknutie primárneho dychového motora a uvoľnenie panvového dna",
    excerpt: "Prirodzený dych dieťaťa – aktivácia hlavného motora pre prúdenie vnútrotelových tekutín a zdravie celého tela.",
    content: "Väčšina z nás postupom rokov zabudla, ako voľne dýchať, čím sme zablokovali bránicu a vystavili svoje telo aj fascie neustálemu napätiu. Bránica je hlavným pumpovacím motorom našich vnútrotelových tekutín a štiav. Aktivácia motora štiav, pumpovanie lymfy, miznutie kŕčových žíl, podpora trávenia a panvového dna, uvoľnenie spodného chrbta.",
    categoryLabel: "Online kurz",
    url: "/shop/online-kurz-kostrcovo-panvove-dychanie",
    image: "/Fotky/kostcove panvove dychanie.jpg",
    badge: "Základ zdravia",
    tags: ["dychanie", "dych", "branica", "kostrc", "panva", "panvove dno", "lymfa", "krcove zily", "tekutiny", "stavy", "pubococcygeus"],
  },
  {
    id: "prod-smile-yoga",
    type: "product",
    title: "Smile Yoga vo Viedni: Živá prax",
    subtitle: "Pravidelná skupinová prax pre oporu, vedomý dych a fasciálnu pružnosť",
    excerpt: "Jemná a hlboká syntéza vedomého držania tela, funkčného dýchania, fasciálneho strečingu a úsmevu vo Viedni.",
    content: "Zaži spájajúcu a vzpriamujúcu energiu Smile Yogy na vlastnej koži priamo vo Viedni. Vedomé držanie tela a prirodzené osové napriamenie, funkčné bránicové dýchanie, fasciálna elasticita, somatická regenerácia a hlboká vnútorná meditácia. Streda 18:00 – 19:30 alebo piatok po dohode vo Viedni.",
    categoryLabel: "Živá prax",
    url: "/shop/smile-yoga-vieden",
    image: "/Fotky/yoga.jpg",
    badge: "Pravidelná prax",
    location: "Viedeň, Rakúsko",
    tags: ["smile yoga", "joga", "vieden", "rakusko", "wien", "usmev", "dych", "meditacia", "fascie", "strecink", "ziva lekcia"],
  },
  {
    id: "prod-diagnostika",
    type: "product",
    title: "1:1 Osobná somatická diagnostika so Zuzanou",
    subtitle: "Celostná hĺbková diagnostika, uvoľňovanie traumy a obnova toku energie",
    excerpt: "Individuálna analýza mikrokŕčov v tvári a tele, diagnostika z tváre a jazyka a nastavenie osobného rituálu na mieru.",
    content: "Sú momenty, kedy potrebujeme plne chránený, osobný priestor vytvorený len pre nás. V individuálnych sedeniach spájam rokmi overenú somatickú a myofasciálnu prax s hlbokým vnímaním tela, aby sme presne pomenovali a uvoľnili staré vzorce napätia. Diagnostika z tváre, jazyka a fasciálneho napätia. Osobne vo Viedni alebo online.",
    categoryLabel: "1:1 Diagnostika",
    url: "/shop/osobna-konzultacia-diagnostika-1-1",
    image: "/Fotky/lifting a konzultacia.jpg",
    badge: "Individuálna starostlivosť",
    tags: ["konzultacia", "diagnostika", "1:1", "osobne", "online", "trauma", "tvar", "jazyk", "irisdiagnostika", "sedanie", "zuzana"],
  },

  // --- BLOG & JOURNAL ČLÁNKY ---
  {
    id: "art-ritual-pomaly",
    type: "article",
    title: "Ako začať deň v sile Tvorcu: Malý ranný rituál",
    subtitle: "Prečo má malý ranný rituál väčšiu silu než dokonalá rutina",
    excerpt: "Prehľad 7 krokov od večernej prípravy superfoodu cez Zlatý piest, ázijský podrep až po Oil Pulling a vedomý úsmev.",
    content: "Malý ranný rituál je vedomým pozvaním k sebe. Je to moment, kedy preberáš moc a zodpovednosť za svoj život. 7 krokov rituálu: 1. Príprava večer (semienka s vodou a sušenou slivkou pre mikroflóru a hormóny). 2. Prebudenie v posteli a návrat zo snov, neuroplasticita vďaky. 3. Aktivácia Zlatého piestu (jazyk na horné podnebie, uvoľnená panva, bránicový dych). 4. Rozpomenutie na Tvorcu, Pozorovateľa a Projektor. 5. Ázijský podrep pre hydratáciu fascií a kolagén. 6. Keltská soľ s vodou a 3-minútový Oil Pulling olivovým olejom. 7. Vitálne raňajky a 60-sekundový úsmev do zrkadla podľa Very F. Birkenbihl.",
    categoryLabel: "Rituál",
    url: "/journal/ritual-pomaly",
    image: "/Fotky/480785660_624497300225070_1171894858753554870_n.jpg",
    tags: ["ritual", "ranne prebudenie", "zlaty piest", "jazyk na podnebie", "semienka", "superfood", "olejovy vyplach", "oil pulling", "keltska sol", "azijsky podrep", "kolagen", "usmev", "birkenbihl", "vagus"],
  },
  {
    id: "art-sila-jednoduchosti",
    type: "article",
    title: "Sila jednoduchosti v každodenných rituáloch",
    subtitle: "Rozhodnutie o tom, čo z rutiny odobrať",
    excerpt: "O myšlienkach ako oblakoch, múdrosti Brucea Leeho a 90-sekundovom tajomstve emócií.",
    content: "Nejde o to pridávať do svojho dňa ďalšie povinnosti. Ide o to rozhodnúť sa, čo môžeme z rutiny odobrať. Myšlienky sú ako oblaky – Ty si Nebo. Múdrosť Brucea Leeho: Keď svoju pozornosť presunieš z hlavy a mysle do svojho brucha, tvoje telo nemá energiu živiť myšlienkové špirály. Emócie sú len elektrina: 90-sekundové tajomstvo fyziológie. Uvoľni panvu, daj jazyk na podnebie a emócia pretečie ako elektrický prúd bez zanechania kŕča.",
    categoryLabel: "Úvaha",
    url: "/journal/sila-jednoduchosti",
    image: "/Fotky/IMG_7721.JPG",
    tags: ["sila jednoduchosti", "bruce lee", "myslienky", "oblaky", "nebo", "90 sekund", "emocie", "elektrina", "panva", "uvolnenie", "rutina"],
  },
  {
    id: "art-co-je-metamorphosis",
    type: "article",
    title: "Metamorfóza: Tichý zázrak prirodzenej premeny",
    subtitle: "O tichom bezpečí kukly a znovuzrodení motýľa",
    excerpt: "O tichom bezpečí kukly, návrate k sebe a 7-dňovom transformačnom pobyte na Peloponéze v hoteli White Donkey.",
    content: "Metamorfóza je tichý, pokojný a láskyplný zázrak prirodzenej premeny. Keď sa húsenica stiahne do kukly, vytvorí si svoje tiché bezpečie. Stíši svet okolo seba a až vtedy nájde silu a priestor, aby zo seba sňala všetku ťažobu sveta. V tichu sa z nej stáva nádherný motýľ. Tento zázrak nosí každý z nás vo vlastných rukách. 7-dňový pobyt na gréckom Peloponéze v hoteli White Donkey.",
    categoryLabel: "Metamorphosis",
    url: "/journal/co-je-metamorphosis",
    image: "/Fotky/grecko.jpg",
    tags: ["metamorfoza", "kukla", "motyl", "grecko", "peloponez", "white donkey", "premena", "ticho", "liecenie", "bezpecie"],
  },
  {
    id: "art-metamorfoza",
    type: "article",
    title: "Zmena nezačína navonok",
    subtitle: "Poznámky o vnútornom pohybe a nových začiatkoch",
    excerpt: "Premena sa začína otázkou, kedy si dovolíme zastaviť, prehodnotiť tempo a nechať starú predstavu o sebe odísť.",
    content: "Premena sa často začína skôr otázkou než odpoveďou. Dovolíme si zastaviť, prehodnotiť tempo a nechať starú predstavu o sebe pomaly odísť. Navonok sa možno nič nemení, no vnútri už vzniká nový smer.",
    categoryLabel: "Metamorphosis",
    url: "/journal/metamorfoza",
    image: "/Fotky/480785660_624497300225070_1171894858753554870_n.jpg",
    tags: ["zmena", "vnutro", "zaciatok", "ticho", "otazky", "tempo"],
  },
  {
    id: "art-zazrak-pariz",
    type: "article",
    title: "Zázrak v Luxemburských záhradách",
    subtitle: "Keď ťa chráni tvoja vlastná frekvencia",
    excerpt: "O zabudnutej luxusnej taške v srdci Paríža, trojhodinovom odstupe, vnútornej ochrane a srdci na oblohe.",
    content: "V apríli 2026 som pri prechádzke cez parížsky Jardin du Luxembourg so svojou kamarátkou Alessiou zabudla na lavičke svoju luxusnú dizajnovú tašku so zlatým logom a cennosťami. Po celých troch hodinách sme sa vrátili a uprostred víriaceho davu ľudí stála tá taška nedotknutá a v bezpečí. Na nebi sa objavil mrak v tvare obrovského srdca. Svet ti zrkadlí to, čo sama vnútorne vyžaruješ.",
    categoryLabel: "Príbeh",
    url: "/journal/zazrak-v-luxemburskych-zahradach",
    image: "/Fotky/480785660_624497300225070_1171894858753554870_n.jpg",
    tags: ["pariz", "luxemburske zahrady", "frekvencia", "ochrana", "synchronicity", "zazrak", "dovera", "mrak srdce", "alessia"],
  },
  {
    id: "art-zazrak-more",
    type: "article",
    title: "Zázrak na mori: Modlitba ako frekvencia a spev",
    subtitle: "O speve Hallelujah na paddleboarde a divokých delfínoch",
    excerpt: "O trvalom rešpekte k prírode, speve Hallelujah so Simi a kŕdli divokých delfínov, ktorí nás sprevádzali k brehu.",
    content: "V roku 2023 sme s kamarátkou Simi vyrazili na oceán na jednom paddleboarde. Uprostred vody sa k nám priblížil divoký delfín. Vnímala som, že musíme opustiť myšlienky na strach a začala som spievať Hallelujah. Z vody sa vynorili ďalšie delfíny a vytvorili okolo nášho paddleboardu tancujúci kruh, ktorý nás bezpečne odprevádzal k pevnine.",
    categoryLabel: "Príbeh",
    url: "/journal/zazrak-na-mori",
    image: "/Fotky/grecko.jpg",
    tags: ["more", "delfiny", "hallelujah", "paddleboard", "spev", "modlitba", "ocean", "priroda", "ochrana", "simi"],
  },
  {
    id: "art-ranne-nastroje",
    type: "article",
    title: "Ranné prebudenie nástrojov: Spomeň si, kým naozaj si",
    subtitle: "Zastaviť príbehy mysle a vstať s vedomým úsmevom",
    excerpt: "O tom, ako hneď po prebudení usmerniť svoju pozornosť, uzavrieť zlatý stĺp, uvoľniť panvu a vziať si svoje nástroje späť.",
    content: "Rituál slúži na to, aby sme si hneď ráno spomenuli sami na seba. Daj jazyk na podnebie a uzavri horný piest zlatého stĺpca. Začni voľne dýchať do brucha a uvoľni panvu. Tým sa okamžite dostávaš do stavu parasympatiku. Myseľ stratí energiu na vytváranie príbehov a nevznikajú zbytočné emócie. Úsmev na tvári aspoň 60 sekúnd spustí rovnakú vlnu endorfínov a hormónov šťastia.",
    categoryLabel: "Rituál",
    url: "/journal/ranne-prebudenie-nastrojov",
    image: "/Fotky/480785660_624497300225070_1171894858753554870_n.jpg",
    tags: ["ranne nastroje", "zlaty stlp", "zlaty piest", "jazyk na podnebie", "usmev", "parasympatikus", "bruce lee", "telo mysel emocie"],
  },
  {
    id: "art-navrat-k-sebe",
    type: "article",
    title: "Návrat k sebe: Otázky, ktoré menia vnímanie života",
    subtitle: "Prečo sme sa odpojili od prirodzených zákonitostí tela",
    excerpt: "Zamyslenie nad tým, čo sa stane, keď znova preberieme zodpovednosť za svoj vnútorný svet a polohu jazyka.",
    content: "Nebolo by jednoduchšie a lepšie, keby sme sa najprv naučili ovládať svoje vlastné nástroje – telo, myšlienky a emócie? V Ázii je prirodzené kľačať a byť v hlbokom drepe. A keby matky viedli deti k tomu, aby mali jazyk opretý na podnebí, vyhli by sme sa krivým zubom, astme, asymetriám a chrápaniu. Skutočná krása vychádza výhradne zvnútra, z pocitu absolútneho bezpečia.",
    categoryLabel: "Úvaha",
    url: "/journal/navrat-k-sebe",
    image: "/Fotky/IMG_7721.JPG",
    tags: ["navrat k sebe", "otazky", "prirodzenost", "zuby", "jazyk", "deti", "azia", "drep", "zdravie", "vnutorny svet"],
  },

  // --- STRÁNKY WEBU ---
  {
    id: "page-o-mne",
    type: "page",
    title: "O mne — Zuzana Harvalik",
    subtitle: "Autorka EL metódy & Priekopníčka somatickej transformácie",
    excerpt: "30 rokov výskumu, príbeh zo života vo Viedni, dentálna hygiena, reverzibilita šedivenia a vznik Energetic Lifting metódy.",
    content: "Dnes, vo svojich 48 rokoch, v sebe spájam viac ako 30 rokov nepretržitého výskumu. Príbeh zo života v Rakúsku bez poistenia, štúdium liečiteľstva, diagnostiky z tváre a jazyka, dentálna hygienička vo Viedni 20 rokov, zakladateľka Smile Jogy. Vznik EL metódy a prirodzený návrat tmavohnedých vlasov po uvoľnení mikrokŕčov v celom tele.",
    categoryLabel: "Stránka",
    url: "/o-mne",
    image: "/Fotky/480785660_624497300225070_1171894858753554870_n.jpg",
    tags: ["o mne", "zuzana harvalik", "el metoda", "vieden", "autorka", "pribeh", "vlasy", "sedivenie", "biografia", "kontakt"],
  },
  {
    id: "page-shop",
    type: "page",
    title: "Programy & E-shop",
    subtitle: "Prehľad všetkých kurzov, pobytov a e-bookov",
    excerpt: "Kompletný katalóg pre somatické omladenie, transformačné pobyty v Grécku, dýchacie kurzy a diagnostiku.",
    content: "Vyber si z ponuky: E-book Bezpečie je nová krása, 7-dňový pobyt Metamorphosis v Grécku, Víkend Mini Metamorphosis na Slovensku, Online kurz EL-Metóda, Online kurz Kostrčovo-panvové dýchanie, Smile Yoga Viedeň a 1:1 Osobná diagnostika.",
    categoryLabel: "Stránka",
    url: "/shop",
    image: "/Fotky/ebook.jpg",
    tags: ["shop", "programy", "eshop", "kurzy", "katalog", "ceny", "produkty", "nakup"],
  },
  {
    id: "page-blog",
    type: "page",
    title: "Blog — Zápisky o premene",
    subtitle: "Myšlienky, rituály a príbehy pre pomalší život",
    excerpt: "Zoznam všetkých článkov a zápiskov o somatickom zdraví, vedomých ranných rituáloch a príbehoch.",
    content: "Myšlienky, rituály a príbehy pre pomalší, pravdivejší spôsob života. Články o rannom rituáli, sile jednoduchosti, zázrakoch v Paríži a na mori, o bezpečí kukly a vedomom úsmeve.",
    categoryLabel: "Stránka",
    url: "/blog",
    image: "/Fotky/480785660_624497300225070_1171894858753554870_n.jpg",
    tags: ["blog", "clanky", "journal", "zapisky", "citanie", "ritualy"],
  },
  {
    id: "page-fotky",
    type: "page",
    title: "Fotky a videá",
    subtitle: "Vizuálny archív transformácie a okamihov",
    excerpt: "Galéria z pobytov v Grécku, na Slovensku, kurzov a vizuálnych momentov cesty Metamorphosis.",
    content: "Fotografie zachytávajúce ticho, morský vánok, atmosféru Grécka, semináre, cvičenia Smile Yogy a okamihy vnútornej premeny.",
    categoryLabel: "Stránka",
    url: "/fotky",
    image: "/Fotky/grecko.jpg",
    tags: ["fotky", "galeria", "videa", "obrazky", "grecko", "vizual"],
  },
  {
    id: "page-kontakt",
    type: "page",
    title: "Kontakt",
    subtitle: "Spoj sa so Zuzanou Harvalik",
    excerpt: "Priamy kontakt: e-mail zuzanab@gmx.at, Instagram @meta_morphos_is a Facebook.",
    content: "Ozvi sa mi: Ak máš otázku alebo sa chceš dozvedieť viac o kurzoch či pobytoch, napíš mi na zuzanab@gmx.at alebo cez Instagram @meta_morphos_is.",
    categoryLabel: "Stránka",
    url: "/kontakt",
    image: "/Fotky/480785660_624497300225070_1171894858753554870_n.jpg",
    tags: ["kontakt", "email", "sprava", "instagram", "facebook", "otazky", "zuzanab@gmx.at"],
  },
  {
    id: "page-home",
    type: "page",
    title: "Domov — Zuzana Metamorphosis",
    subtitle: "Miesto pre zmenu, ktorá začína vnútri",
    excerpt: "Nestarneš. Len na sebe nosíš nánosy minulosti, potlačených emócií a kŕč v tkanivách. Filozofia bezpečia a prirodzenej krásy.",
    content: "Vedomá starostlivosť, krása bez tlaku a malé rozhodnutia, ktoré menia každodennosť. Vstúp do sveta somatického omladenia a vnútornej slobody.",
    categoryLabel: "Stránka",
    url: "/",
    image: "/Fotky/480785660_624497300225070_1171894858753554870_n.jpg",
    tags: ["domov", "uvod", "hlavna stranka", "metamorphosis", "zuzana", "krasa", "somatika"],
  },
]

/**
 * Perform intelligent, weighted local search
 */
export function searchEngine(
  query: string,
  category: SearchCategory = "all"
): SearchResultItem[] {
  const cleanQuery = query.trim()
  if (!cleanQuery) return []

  const normalizedQuery = normalizeText(cleanQuery)
  const queryTokens = normalizedQuery.split(/\s+/).filter(Boolean)

  const results: SearchResultItem[] = []

  for (const item of searchIndex) {
    // Filter by category if specified
    if (category !== "all") {
      if (category === "articles" && item.type !== "article") continue
      if (category === "products" && item.type !== "product") continue
      if (category === "pages" && item.type !== "page") continue
    }

    const normTitle = normalizeText(item.title)
    const normSubtitle = item.subtitle ? normalizeText(item.subtitle) : ""
    const normExcerpt = normalizeText(item.excerpt)
    const normContent = item.content ? normalizeText(item.content) : ""
    const normCategoryLabel = normalizeText(item.categoryLabel)
    const normTags = item.tags.map(normalizeText)

    let score = 0
    let hasMatched = false

    // Exact title match gets huge score
    if (normTitle === normalizedQuery) {
      score += 150
      hasMatched = true
    } else if (normTitle.startsWith(normalizedQuery)) {
      score += 80
      hasMatched = true
    } else if (normTitle.includes(normalizedQuery)) {
      score += 50
      hasMatched = true
    }

    // Tokenized matching
    for (const token of queryTokens) {
      let tokenMatched = false

      if (normTitle.includes(token)) {
        score += 35
        tokenMatched = true
      }

      if (normSubtitle.includes(token)) {
        score += 20
        tokenMatched = true
      }

      if (normTags.some((t) => t.includes(token))) {
        score += 25
        tokenMatched = true
      }

      if (normCategoryLabel.includes(token)) {
        score += 18
        tokenMatched = true
      }

      if (normExcerpt.includes(token)) {
        score += 15
        tokenMatched = true
      }

      if (normContent.includes(token)) {
        score += 8
        tokenMatched = true
      }

      if (tokenMatched) {
        hasMatched = true
      }
    }

    if (hasMatched && score > 0) {
      // Determine context snippet
      let matchedSnippet = item.excerpt
      if (item.content && normContent.includes(normalizedQuery)) {
        matchedSnippet = extractSnippet(item.content, queryTokens, 130)
      } else if (item.content && queryTokens.some((t) => normContent.includes(t))) {
        matchedSnippet = extractSnippet(item.content, queryTokens, 130)
      }

      results.push({
        ...item,
        score,
        matchedSnippet,
      })
    }
  }

  // Sort descending by score
  return results.sort((a, b) => b.score - a.score)
}
