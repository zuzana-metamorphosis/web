export type ProductCategory = "all" | "ebook" | "retreat" | "course" | "live"

export interface ProductItem {
  id: string
  slug: string
  category: "ebook" | "retreat" | "course" | "live"
  badge?: string
  image: string
  price?: number
  currencyCode?: string
  sk: {
    title: string
    subtitle: string
    intro: string
    categoryLabel: string
    formatOrDates?: string
    location?: string
    duration?: string
    features?: string[]
    variants?: { name: string; description: string; badge?: string }[]
    details?: { label: string; value: string }[]
    actionLabel: string
  }
  de: {
    title: string
    subtitle: string
    intro: string
    categoryLabel: string
    formatOrDates?: string
    location?: string
    duration?: string
    features?: string[]
    variants?: { name: string; description: string; badge?: string }[]
    details?: { label: string; value: string }[]
    actionLabel: string
  }
}

export const productsData: ProductItem[] = [
  {
    id: "ebook-bezpecie-je-nova-krasa",
    slug: "ebook-bezpecie-je-nova-krasa",
    category: "ebook",
    badge: "Bestseller",
    image: "/Fotky/ebook.jpg",
    price: 29,
    currencyCode: "EUR",
    sk: {
      title: "E-book: Bezpečie je nová krása",
      subtitle: "Sprievodca somatickým omladením, fasciálnym uvoľnením a vnútorným pokojom",
      intro: "Predstav si ten pocit, keď sa ráno prebúdzaš a prvá vec, ktorú ucítiš, je hlboko zakorenený pokoj vo vnútri tvojho tela. Žiadny ranný zhon, žiadny vnútorný tlak. Tento e-book je tvojou osobnou mapou pre každodenný život.",
      categoryLabel: "E-book",
      formatOrDates: "Digitálny e-book (PDF) k okamžitému stiahnutiu",
      features: [
        "Porozumenie vlastnému nervovému a fasciálnemu systému",
        "Aktivácia vagusového nervu a jemné somatické cvičenia",
        "Uvoľnenie mikrokŕčov v tvári aj v celom tele",
        "Návod na hydratáciu fascií a rozprúdenie fasciálnej tekutiny",
        "Prirodzená iskra v očiach a žiarivosť z hlbokého vnútorného bezpečia",
      ],
      details: [
        { label: "Formát", value: "PDF (okamžité stiahnutie)" },
        { label: "Pre koho", value: "Pre každého, kto chce držať kľúč k prirodzenému omladeniu a vnútornému pokoju" },
      ],
      actionLabel: "Stiahnuť E-book",
    },
    de: {
      title: "E-Book: Sicherheit ist die neue Schönheit",
      subtitle: "Ein Leitfaden für somatische Verjüngung, Faszienentspannung und innere Ruhe",
      intro: "Stell dir das Gefühl vor, wenn du morgens aufwachst und das Erste, was du spürst, eine tief verwurzelte Ruhe in deinem Körper ist. Keine morgendliche Hektik, kein innerer Druck. Dieses E-Book ist deine persönliche Landkarte für den Alltag.",
      categoryLabel: "E-Book",
      formatOrDates: "Digitales E-Book (PDF) zum sofortigen Download",
      features: [
        "Verständnis des eigenen Nerven- und Fasziensystems",
        "Aktivierung des Vagusnervs und sanfte somatische Übungen",
        "Lösen von Mikrokämpfen und Spannungen im Gesicht und Körper",
        "Faszienhydratisierung und Anregung der Faszienflüssigkeit",
        "Natürliche Ausstrahlung aus tiefer innerer Sicherheit",
      ],
      details: [
        { label: "Format", value: "PDF (sofortiger Download)" },
        { label: "Für wen", value: "Für jeden, der den Schlüssel zu natürlicher Verjüngung selbst in Händen halten möchte" },
      ],
      actionLabel: "E-Book herunterladen",
    },
  },
  {
    id: "metamorphosis-pobyt-grecko",
    slug: "metamorphosis-pobyt-grecko",
    category: "retreat",
    badge: "Exkluzívny pobyt",
    image: "/Fotky/grecko.jpg",
    sk: {
      title: "Metamorphosis: 7-dňový transformačný pobyt v Grécku",
      subtitle: "Týždeň ústrania, hlbokého liečenia, omladenia a znovuzrodenia v raji",
      intro: "Dovoľ si na chvíľu vystúpiť zo zrýchleného sveta a ponoriť sa do liečivého ticha a energie Peloponézu. V očarujúcom 4-hviezdičkovom boutique hoteli White Donkey vytvárame bezpečný priestor pre tvoje celkové omladenie a regeneráciu.",
      categoryLabel: "Transformačný pobyt",
      formatOrDates: "Jún / September",
      location: "Peloponéz, Grécko (Boutique Hotel White Donkey)",
      duration: "7 dní / 7 nocí",
      features: [
        "Tréning techniky EL metódy: Špeciálny myofasciálny tréning pre 75 svalov hlavy a tváre",
        "Smile Yoga & Parasympatický tréning: Denná skupinová prax pre uvoľnenie fascií",
        "Anatómia chôdze & Kostrčovo-panvové dýchanie: Hlboké zážitkové workshopy",
        "Majstrovská meditácia: Prax „Prebuď sa sám k sebe“ pre stíšenie mysle",
        "Nedotknutá príroda & Výlety do historických miest Peloponézu",
        "7 dní, 7 čakier, 7 nových životných návykov",
      ],
      details: [
        { label: "Miesto", value: "Peloponéz, Grécko" },
        { label: "Hotel", value: "White Donkey Boutique Hotel (4*)" },
        { label: "Termíny", value: "Jún / September" },
      ],
      actionLabel: "Rezervovať pobyt",
    },
    de: {
      title: "Metamorphosis: 7-Tage-Transformations-Retreat in Griechenland",
      subtitle: "Eine Woche des Rückzugs, der tiefen Heilung, Verjüngung und Neugeburt im Paradies",
      intro: "Erlaube dir für einen Moment, aus der beschleunigten Welt auszusteigen und in die heilende Stille und Energie des Peloponnes einzutauchen. Im zauberhaften 4-Sterne-Boutique-Hotel White Donkey kreieren wir einen geschützten Raum für deine ganzheitliche Verjüngung.",
      categoryLabel: "Transformations-Retreat",
      formatOrDates: "Juni / September",
      location: "Peloponnes, Griechenland (Boutique Hotel White Donkey)",
      duration: "7 Tage / 7 Nächte",
      features: [
        "Training der EL-Methode: Spezielles myofasziales Training für 75 Muskeln an Kopf und Gesicht",
        "Smile Yoga & Parasympathisches Training: Tägliche Gruppenpraxis",
        "Anatomie des Gehens & Steißbein-Becken-Atmung: Tiefe Erlebnis-Workshops",
        "Meister-Meditation: Praxis „Erwache zu dir selbst“ zur Verankerung im Schöpfer-Zustand",
        "Unberührte Natur & Ausflüge zu historischen Orten",
        "7 Tage, 7 Chakren, 7 neue Lebensgewohnheiten",
      ],
      details: [
        { label: "Ort", value: "Peloponnes, Griechenland" },
        { label: "Hotel", value: "White Donkey Boutique Hotel (4*)" },
        { label: "Termine", value: "Juni / September" },
      ],
      actionLabel: "Retreat anfragen",
    },
  },
  {
    id: "mini-metamorphosis-slovensko",
    slug: "mini-metamorphosis-slovensko",
    category: "retreat",
    badge: "Intenzívny víkend",
    image: "/Fotky/IMG_7721.JPG",
    sk: {
      title: "Mini Metamorphosis: Víkendový pobyt na Slovensku",
      subtitle: "Intenzívny regeneračný víkend parasympatického tréningu, liečenia a nového nasmerovania",
      intro: "Cítiš, že tvoje telo potrebuje zastaviť, nadýchnuť sa a dobiť batérie práve teraz? Tento víkendový pobyt funguje ako tvoj ochranný kukol a nesie rovnaké hlboké posolstvo: Bezpečie je nová krása.",
      categoryLabel: "Víkendový pobyt",
      formatOrDates: "Február / Apríl / November",
      location: "Slovensko",
      duration: "Piatok až Nedeľa (3 dni)",
      features: [
        "Workshopy anatómie chôdze a kostrčovo-panvového dýchania pre uvoľnenie panvového dna",
        "Fasciálne a somatické techniky pre obnovu elasticity tkanív",
        "Hydratácia fasciálnej tekutiny a okamžitá úľava od stresu",
        "Návrat k sebe: Praktické postupy, ako utíšiť myseľ a získať ľahkosť",
      ],
      details: [
        { label: "Trvanie", value: "Piatok – Nedeľa" },
        { label: "Termíny", value: "Február / Apríl / November" },
        { label: "Miesto", value: "Slovensko" },
      ],
      actionLabel: "Mám záujem o víkend",
    },
    de: {
      title: "Mini Metamorphosis: Wochenende-Retreat in der Slowakei",
      subtitle: "Intensives Regenerations-Wochenende mit parasympathischem Training, Heilung und neuer Ausrichtung",
      intro: "Spürst du, dass dein Körper genau jetzt innehalten, durchatmen und seine Batterien aufladen muss? Dieses Wochenend-Retreat wirkt wie dein schützender Kokon und trägt dieselbe Botschaft: Sicherheit ist die neue Schönheit.",
      categoryLabel: "Wochenend-Retreat",
      formatOrDates: "Februar / April / November",
      location: "Slowakei",
      duration: "Freitag bis Sonntag (3 Tage)",
      features: [
        "Workshops zur Anatomie des Gehens & Steißbein-Becken-Atmung",
        "Fasziale und somatische Techniken zur Wiederherstellung der Gewebeelastizität",
        "Hydratation der Faszienflüssigkeit und sofortige Stressbefreiung",
        "Rückkehr zu dir selbst: Methoden zur Beruhigung des Geistes",
      ],
      details: [
        { label: "Dauer", value: "Freitag – Sonntag" },
        { label: "Termine", value: "Februar / April / November" },
        { label: "Ort", value: "Slowakei" },
      ],
      actionLabel: "Wochenende anfragen",
    },
  },
  {
    id: "online-kurz-el-metoda",
    slug: "online-kurz-el-metoda",
    category: "course",
    badge: "Odporúčané",
    image: "/Fotky/lifting a konzultacia.jpg",
    sk: {
      title: "Online kurz: Energetic Lifting Method (EL-Metóda)",
      subtitle: "Somatický, myofasciálny a neurosomatický tréning pre prirodzené omladenie a regeneráciu tkanív",
      intro: "Nauč sa vnímať, uvoľniť a navrátiť do rovnováhy 75 svalov svojej tváre a hlavy. Tento kurz spája neurosomatický pohyb s aktiváciou piezoelektrického prúdu a prúdením tekutín v tele, čím štartuje hĺbkovú regeneráciu fascií, svalov, kostí a kĺbov.",
      categoryLabel: "Online kurz",
      formatOrDates: "5 modulov (samostúdium alebo VIP)",
      variants: [
        {
          name: "Variant A: Začiatočník & Pohybový aparát",
          description: "5 ucelených modulov po 45 minútach (výučba 2-krát do týždňa). Hlboká teória o nervovom a fasciálnom systéme, piezoelektrickom prúde, bunkových šťavách a praktický nácvik.",
        },
        {
          name: "Variant B: VIP + Osobná konzultácia (1:1)",
          description: "Kompletný kurz z Variantu A plus 2 osobné 1:1 online konzultácie: Úvodná diagnostika na začiatku a Záverečná konzultácia pre vyhodnotenie pokroku a nastavenie dlhodobej praxe.",
          badge: "VIP voľba",
        },
      ],
      features: [
        "75 svalov tváre a hlavy – cielené uvoľnenie a lifting",
        "Aktivácia piezoelektrického prúdu a prúdenia tekutín",
        "Prepnutie nervového systému do parasympatiku",
        "Dlhodobá prevencia vrások a napätia",
      ],
      actionLabel: "Vybrať kurz",
    },
    de: {
      title: "Online-Kurs: Energetic Lifting Method (EL-Methode)",
      subtitle: "Somatisches, myofasziales und neurosomatisches Training für natürliche Verjüngung und Geweberegeneration",
      intro: "Lerne, die 75 Muskeln deines Gesichts und Kopfes wahrzunehmen, zu entspannen und wieder ins Gleichgewicht zu bringen. Dieser Kurs verbindet neurosomatische Bewegung mit der Aktivierung des piezoelektrischen Stroms.",
      categoryLabel: "Online-Kurs",
      formatOrDates: "5 Module (Selbststudium oder VIP)",
      variants: [
        {
          name: "Variante A: Einsteiger & Bewegungsapparat",
          description: "5 fundierte Module à 45 Minuten (Unterricht 2-mal pro Woche). Tiefe Theorie über Nerven- und Fasziensystem, piezoelektrischen Strom und praktische Übungen.",
        },
        {
          name: "Variante B: VIP + Persönliche Beratung",
          description: "Vollständiger Kurs aus Variante A plus 2 persönliche 1:1 Online-Beratungen: Einführungsberatung zu Beginn und Abschlussberatung am Kursende.",
          badge: "VIP-Wahl",
        },
      ],
      features: [
        "75 Gesichtsmuskeln – gezielte Entspannung und natürliches Lifting",
        "Aktivierung des piezoelektrischen Stroms im Gewebe",
        "Umschaltung in den Parasympathikus",
        "Nachhaltige Faszienhydratisierung",
      ],
      actionLabel: "Kurs wählen",
    },
  },
  {
    id: "online-kurz-kostrcovo-panvove-dychanie",
    slug: "online-kurz-kostrcovo-panvove-dychanie",
    category: "course",
    badge: "Základ zdravia",
    image: "/Fotky/kostcove panvove dychanie.jpg",
    sk: {
      title: "Online kurz: Kostrčovo-panvové dýchanie & Miofasciálny tréning",
      subtitle: "Prirodzený dych dieťaťa – Aktivácia hlavného motora pre prúdenie štiav a zdravie celého tela",
      intro: "Väčšina z nás postupom rokov zabudla, ako voľne dýchať, čím sme zablokovali bránicu a vystavili svoje telo aj fascie neustálemu napätiu. Bránica je hlavným pumpovacím motorom našich vnútrotelových tekutín a štiav.",
      categoryLabel: "Online kurz",
      formatOrDates: "3 ucelené moduly (spolu 1 hodina intenzívnej praxe)",
      features: [
        "Aktivácia motora štiav: Bránica opäť prirodzene pumpuje lymfu a tekutiny",
        "Miznutie kŕčových žíl: Obnovenie žilového a lymfatického návratu z nôh",
        "Uzdravenie tráviaceho traktu: Mikromasáž pre žalúdok, pečeň, žlčník a črevá",
        "Podpora močových a sexuálnych orgánov: Prekrvovanie panvového dna",
        "Prevencia sedimentu a piesku v obličkách a žlčníku",
      ],
      details: [
        { label: "Obsah", value: "3 moduly (1 hodina praxe)" },
        { label: "Účinok", value: "Uvoľnenie spodného chrbta, panvového dna a aktivácia vagusového nervu" },
      ],
      actionLabel: "Začať kurz",
    },
    de: {
      title: "Online-Kurs: Steißbein-Becken-Atmung & Myofasziales Training",
      subtitle: "Der natürliche Atem des Kindes – Aktivierung des Hauptmotors für den Flüssigkeitsfluss",
      intro: "Die meisten von uns haben im Laufe der Jahre verlernt, frei zu atmen, wodurch unser Zwerchfell blockiert wurde. Das Zwerchfell ist der Hauptpumpmotor unserer Körperflüssigkeiten und -säfte.",
      categoryLabel: "Online-Kurs",
      formatOrDates: "3 fundierte Module (1 Stunde intensive Praxis)",
      features: [
        "Aktivierung des Saftmotors: Natürliches Pumpen von Lymphe und Säften",
        "Rückgang von Krampfadern und Stauungen in den Beinen",
        "Heilung des Verdauungstrakts: Mikromassage für Magen, Leber und Darm",
        "Unterstützung der Urogenitalorgane und des Beckenbodens",
        "Prävention von Ablagerungen in Nieren und Galle",
      ],
      details: [
        { label: "Inhalt", value: "3 Module (1 Stunde Praxis)" },
        { label: "Wirkung", value: "Entlastung des unteren Rückens, Aktivierung des Vagusnervs" },
      ],
      actionLabel: "Kurs starten",
    },
  },
  {
    id: "smile-yoga-vieden",
    slug: "smile-yoga-vieden",
    category: "live",
    badge: "Pravidelná prax",
    image: "/Fotky/yoga.jpg",
    sk: {
      title: "Smile Yoga vo Viedni",
      subtitle: "Pravidelná skupinová prax pre oporu, vedomý dych, fasciálnu pružnosť a vnútornú žiarivosť",
      intro: "Zaži spájajúcu a vzpriamujúcu energiu Smile Yogy na vlastnej koži priamo vo Viedni. Ide o jemnú, no hlbokú syntézu vedomého držania tela, funkčného dýchania, fasciálnej elastickosti, somatického uvoľnenia a vnútornej meditácie.",
      categoryLabel: "Živá prax",
      formatOrDates: "Streda: 18:00 – 19:30 / Piatok dohodou",
      location: "Viedeň, Rakúsko",
      features: [
        "Vedomé držanie tela a prirodzené osové napriamenie",
        "Funkčné bránicové dýchanie a uvoľnenie panvy",
        "Fasciálna elasticita a somatická regenerácia",
        "Hlboká vnútorná meditácia v podporujúcej skupine",
      ],
      details: [
        { label: "Miesto", value: "Viedeň, Rakúsko" },
        { label: "Čas", value: "Streda 18:00 – 19:30 | Piatok po dohode" },
      ],
      actionLabel: "Prihlásiť sa na lekciu",
    },
    de: {
      title: "Smile Yoga in Wien",
      subtitle: "Regelmäßige Gruppenpraxis für Halt, bewussten Atem, Faszienelastizität und inneres Strahlen",
      intro: "Erlebe die verbindende und aufrichtende Energie von Smile Yoga hautnah direkt in Wien. Es ist eine sanfte, aber tiefe Synthese aus bewusster Körperhaltung, funktioneller Atmung und Faszienelastizität.",
      categoryLabel: "Live-Praxis",
      formatOrDates: "Mittwoch: 18:00 – 19:30 Uhr / Freitag nach Vereinbarung",
      location: "Wien, Österreich",
      features: [
        "Bewusste Körperhaltung und natürliche Aufrichtung",
        "Funktionelle Zwerchfellatmung und Beckenentspannung",
        "Faszienelastizität und somatische Regeneration",
        "Geführte Meditation in geschützter Gruppenatmosphäre",
      ],
      details: [
        { label: "Ort", value: "Wien, Österreich" },
        { label: "Zeit", value: "Mittwoch 18:00 – 19:30 | Freitag nach Absprache" },
      ],
      actionLabel: "Für Stunde anmelden",
    },
  },
  {
    id: "osobna-konzultacia-diagnostika-1-1",
    slug: "osobna-konzultacia-diagnostika-1-1",
    category: "live",
    badge: "Individuálna starostlivosť",
    image: "/Fotky/lifting a konzultacia.jpg",
    sk: {
      title: "Osobná konzultácia & Diagnostika (1:1)",
      subtitle: "Celostná hĺbková diagnostika, uvoľňovanie traumy, fasciálnych blokád a obnovenie toku energie",
      intro: "Sú momenty, kedy potrebujeme plne chránený, osobný priestor vytvorený len pre nás. V individuálnych sedeniach spájam rokmi overenú somatickú a myofasciálnu prax s hlbokým vnímaním tela, aby sme presne pomenovali a uvoľnili staré vzorce napätia.",
      categoryLabel: "Individuálna konzultácia",
      formatOrDates: "Termíny po osobnej dohode",
      features: [
        "Celostná diagnostika tela, nervového a fasciálneho systému",
        "Bezpečné sprevádzanie pri uvoľňovaní emócií a traumy zo systému",
        "Uvoľnenie hlbokých blokád v nervových a fasciálnych dráhach",
        "Obnovenie prirodzeného toku životnej energie a tekutín",
        "Individuálne odporúčania a cvičenia na mieru pre váš každodenný život",
      ],
      details: [
        { label: "Formát", value: "Osobne alebo Online (1:1)" },
        { label: "Termíny", value: "Po individuálnej dohode" },
      ],
      actionLabel: "Dohodnúť konzultáciu",
    },
    de: {
      title: "Persönliche Beratung & Diagnostik (1:1)",
      subtitle: "Ganzheitliche Tiefendiagnostik, Trauma-Lösung, Faszienblockaden-Befreiung und Erneuerung des Energieflusses",
      intro: "Es gibt Momente, in denen wir einen vollkommen geschützten, persönlichen Raum nur für uns brauchen. In den Einzel-Sitzungen verbinde ich jahrelang erprobte somatische und myofasziale Praxis mit tiefem Körperbewusstsein.",
      categoryLabel: "Einzelberatung",
      formatOrDates: "Termine nach Vereinbarung",
      features: [
        "Ganzheitliche Diagnostik von Körper, Nerven- und Fasziensystem",
        "Sichere Begleitung beim Lösen von Emotionen und Traumata",
        "Befreiung tiefer Blockaden in Nerven- und Faszienbahnen",
        "Erneuerung des freien Flusses der Lebensenergie",
        "Maßgeschneiderte Übungen für deinen Alltag",
      ],
      details: [
        { label: "Format", value: "Persönlich oder Online (1:1)" },
        { label: "Termine", value: "Nach individueller Vereinbarung" },
      ],
      actionLabel: "Beratung anfragen",
    },
  },
]
