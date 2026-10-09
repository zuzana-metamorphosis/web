import { notFound } from "next/navigation"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"
import { ArticleReader, ArticleData } from "@/components/boty/article-reader"

const articles: Record<string, ArticleData> = {
  "ritual-pomaly": {
    sk: {
      category: "Rituál",
      title: "Ako začať deň v sile Tvorcu: Prečo má malý ranný rituál väčšiu silu než dokonalá rutina",
      intro: "Dokonalá rutina býva často len ďalším tlakom z mysle – bodom na zozname úloh, ktorý si musíme odškrtnúť. Malý ranný rituál je však vedomým pozvaním k sebe. Je to moment, kedy preberáš moc a zodpovednosť za svoj život, za svoje telo, myšlienky aj pocity.",
      sections: [
        {
          heading: "Stručný prehľad tvojho ranného rituálu",
          list: [
            {
              title: "Príprava večer",
              text: "Namočenie ľanových, sezamových, slnečnicových a tekvicových semiačok so sušenou slivkou do sklenej misky s vodou.",
            },
            {
              title: "Prebudenie v posteli",
              text: "Nechať zatvorené oči, preniesť sa späť do snov, spomenúť si na ich odkazy a s úsmevom poďakovať.",
            },
            {
              title: "Aktivácia Zlatého piestu a dych",
              text: "Jazyk na podnebie, uvoľnená panva, tri hlboké dychy bránicou do brucha a vyjadrenie vďaky.",
            },
            {
              title: "Rozpomenutie sa na Tvorcu",
              text: "Uvedomenie si, že si Tvorca, Pozorovateľ aj Projektor svojho života – telo, myšlienky a emócie sú len tvoje nástroje.",
            },
            {
              title: "Prvý pohyb (Ázijský podrep)",
              text: "Prebudenie chodidiel, hydratácia fascií, štart piezoelektriny a tvorba kolagénu.",
            },
            {
              title: "Elektrizujúca očista a minerály",
              text: "Štipka keltskej soli s vodou a 2- až 3-minútový Oil Pulling (cmúľanie olivového oleja cez zuby).",
            },
            {
              title: "Vitálne raňajky a úsmev v zrkadle",
              text: "Semiačka so slivkou pre mikroflóru a hormóny, vedomý úsmev na seba do zrkadla s prijatím: „Neboj, som tu s tebou.“",
            },
          ],
        },
        {
          heading: "Všetko sa začína už večer: Príprava živého superfoodu pre črevá, nervy a hormóny",
          paragraphs: [
            "Cesta k vedomému ránu sa otvára ešte predtým, než zavrieš oči. Tvoje ráno sa totiž začína večernou prípravou malého zázraku pre tvoje črevá, nervový systém a hormonálnu rovnováhu.",
            "Priprav si do sklenej misky alebo pohára vitálny superfood: namoč do vody ľanové, sezamové, slnečnicové a tekvicové semiačka a pridaj k nim sušenú slivku. Namáčaním sa v semiačkach aktivujú enzýmy, neutralizuje sa kyselina fytová a prebúdza sa v nich plná životná sila. Cez noc sa vytvorí živý, elastický nápoj bohatý na jemný sliz (mucilagózu), ktorý pohladí sliznicu celého tráviaceho traktu.",
          ],
          subheading: "Čo tento elixír robí s tvojím telom a hormónmi?",
          paragraphs: [
            "• Ľanové semiačka: Sú bohaté na omega-3 mastné kyseliny (ALA) a lignany (fytoestrogény), ktoré prirodzene harmonizujú hormonálny systém, podporujú tvorbu bunkových membrán a upokojujú zápaly v tele.",
            "• Sezamové semiačka: Nabité vápnikom, horčíkom, zinkom a aminokyselinou tryptofán, ktorá je kľúčová pre tvorbu serotonínu (hormónu šťastia) a melatonínu.",
            "• Slnečnicové a tekvicové semiačka: Bohatý zdroj vitamínu E (silný antioxidant a ochranca buniek), železa, medi a najmä zinku, ktorý vyživuje nervový systém, podporuje imunitu a zdravú štítnu žľazu.",
            "• Sušená slivka: Obsahuje rozpustnú aj nerozpustnú vlákninu, sorbitol a draslík. Nie je tu len pre potešenie jazyka, ale ako palivo pre tvoj mikrobióm. Jemne stimuluje peristaltiku čriev, čím podporuje rannú prirodzenú detoxikáciu.",
            "Keďže mikrobióm v črevách priamo komunikuje s mozgom cez blúdivý nerv (nervus vagus), tento večerný rituál ti zabezpečí pokojný spánok a pripravený tráviaci trakt na nové ráno.",
          ],
        },
        {
          heading: "Tvoje vedomé prebudenie (Ešte v posteli)",
          subheading: "1. Návrat zo snov a neuroplasticita mozgu",
          paragraphs: [
            "Keď sa prebudíš, na chvíľu zastav. Nechaj oči ešte zatvorené a prenes sa späť do svojich snov – k poslednej osobe, vôni alebo pocitu, ktorý si vo sne prežila. Spomeň si na odkazy a symboly, ktoré ti tvoje vnútro v noci odovzdalo.",
            "Následné vyjadrenie vďačnosti a žehnanie nie je len krásne duchovné gesto – je to čistá neuroplasticita v praxi. Náš mozog sa neustále prepája podľa toho, čomu venujeme pozornosť. Keď prvé sekundy po prebudení usmerníš k vďačnosti a požehnaniu, fyzicky meníš štruktúru neurónových dráh. Ukojuješ amygdalu (centrum strachu) a zaplavuješ mozog dopamínom a oxytocínom, čím nastavuješ svoju biológiu na zdravie a pokoj počas celého dňa.",
          ],
        },
        {
          subheading: "2. Aktivácia Zlatého piestu, blúdivého nervu a parasympatiku",
          paragraphs: [
            "Polož jazyk jemne na horné podnebie za predné zuby, úplne uvoľni panvu a zhlboka sa nadýchni bránicou až dole do brucha. Sprav tri takéto vedomé dychy.",
            "Týmto jednoduchým pohybom zapájaš Zlatý piest tvojho tela – vertikálnu os, ktorá začína v panvovom dne, prechádza stredom tela a uzatvára sa hore priložením jazyka na podnebie. Motorom tohto piestu je bránica.",
            "• Priložením jazyka na podnebie stimuluješ zakončenia blúdivého nervu (nervus vagus) a okamžite posielaš mozgu signál: „Si v bezpečiu.“",
            "• Uvoľnením panvy a bránicovým dychom zapájaš sakrálny parasympatikus, prebúdzaš piezoelektrický signál v tkanivách a aktivuješ svoju hlbokú intuíciu. Po treťom výdychu si v duchu alebo nahlas povedz: „Ďakujem.“",
          ],
        },
        {
          subheading: "3. Rozpomenutie sa na svoje nástroje: Tvorca, Pozorovateľ a Projektor",
          paragraphs: [
            "Predtým, než dáš voľnú ruku mysli, pripomeň si pravdu o tom, kým v skutočnosti si:",
            "• Ty si Tvorca a Pozorovateľ. Predstav si kinosálu: Tvoje myšlienky a emócie sú len filmom na plátne. Ty nie si ten film. Ty si návštevník kina, ale zároveň aj projektor. Podľa toho, aké svetlo vedomia cez seba pustíš, taký film sa objaví vo tvojom živote.",
            "• Tvoje telo práve teraz dýcha a uvoľňuje sa.",
            "• Tvoje myšlienky sú ako oblaky na nebi. Prichádzajú a odchádzajú... ale Ty si to Nebo.",
            "• Tvoje emócie sú ako prúd elektriny, ktorý prechádza tvojím telom a týmto nádherným nástrojom.",
            "S týmto vedomím použi svoju myseľ na to najkrajšie – na vďačnosť. Požehnaj sebe, svojmu telu a požehnaj ľuďom vo svojom okolí.",
          ],
        },
        {
          heading: "Prvý pohyb, elektrizujúca starostlivosť a sila úsmevu",
          subheading: "4. Ázijský podrep: Hydratácia fascií a tvorba kolagénu",
          paragraphs: [
            "Vstaň z postele a spusti sa do hlbokého ázijského podrepu (alebo si v ňom jemne zapruž). Tento prirodzený pohyb má obrovský fyziologický význam:",
            "• Otvára a uvoľňuje bedrové kĺby, krížovú oblasť a achillovky.",
            "• Stláča a následne ako špongia nasáva tekutinu do hlbokých fasciálnych línií (najmä zadnej a špirálovitej línie).",
            "• Práve týmto mechanickým tlakom a uvoľnením sa vo fasciách štartuje piezoelektrické prúdenie, stimulujú sa fibroblasty a prirodzene sa spúšťa tvorba nového kolagénu. Tvoje telo sa prebúdza, pružnie a hydratuje zvnútra. Vyčaruj pri tomto pohybe na tvári prvý jemný úsmev a znova precíť svoje chodidlá spojené so zemou. Povedz svoje ďalšie „Ďakujem“.",
          ],
        },
        {
          subheading: "5. Keltská soľ a 5 000-ročná sila Oil Pullingu",
          paragraphs: [
            "• Elektrika pre mineralizované telo: Daj si na jazyk štipku kvalitnej keltskej soli a zapi ju čistou vodou. Keltská soľ je považovaná za najkvalitnejšiu na svete – obsahuje vyše 80 až 90 minerálov a stopových prvkov v dokonalej rovnováhe. Keďže všetky naše telové tekutiny sú slané (mineralizované), táto štipka soli okamžite rozsvieti tvoju vnútornú elektrickú sieť a dodá bunkám potrebné elektrolyty. Pi vodu s láskavým úsmevom a vďakou.",
            "• Očista úst (Oil pulling): V kúpeľni si vezmi do úst polievkovú lyžicu kvalitného panenského olivového oleja. Prevaľuj ho v ústach a ťahaj ho cez zuby 2 až 3 minúty. Táto metóda je známa z ajurvédy už viac ako 5 000 rokov. Olej na seba viaže rozpustné toxíny, baktérie a nánosy, ktoré sa v ústnej dutine nahromadili počas noci, prečisťuje lymfu a posilňuje ďasná.",
          ],
        },
        {
          subheading: "6. Vedecký zázrak úsmevu a vitálne raňajky",
          paragraphs: [
            "Teraz je čas na tvoj prvý superfood – semienka so slivkou, ktoré na teba čakali od večera. Vychutnaj si ich s úsmevom.",
          ],
          quote: {
            text: "Keď vedome držíš úsmev aspoň 60 sekúnd (aj keby bol zo začiatku kútikmi úst vytvarovaný nasilu), tvárové svaly stlačia konkrétne nervové dráhy. Tieto nervy pošlú priamy mechanický signál do mozgu, ktorý si povie: „Moje svaly sa usmievajú, teda musím byť šťastný!“ Mozog okamžite spustí produkciu serotonínu, dopamínu a neuropeptidov – hormónov šťastia a uvoľnenia.",
            author: "Vera F. Birkenbihl",
          },
          paragraphs: [
            "Na záver rituálu sa pozri na seba do zrkadla. Pozri sa si priamo do očí, drž tento úsmev aspoň 60 sekúnd s úplným prijatím a povedz si: „Neboj, som tu s tebou. Si v bezpečiu.“",
            "Tým, že si ráno dopraješ tento malý čas pre seba, neplníš len povinnosť. Pripomínaš si, kým naozaj si. Preberáš vládu nad svojím dňom a stávaš sa milujúcim sprievodcom pre svoje telo, myseľ aj emócie.",
          ],
          callout: "„Neboj, som tu s tebou. Si v bezpečiu.“",
        },
      ],
    },
    de: {
      category: "Ritual",
      title: "Wie du den Tag in der Kraft des Schöpfers startest: Warum ein kleines Morgenritual mehr Kraft hat als eine perfekte Routine",
      intro: "Eine perfekte Routine ist oft nur ein weiterer Druck des Verstandes – ein Punkt auf der To-do-Liste, den wir abhaken müssen. Ein kleines Morgenritual ist jedoch eine bewusste Einladung zu dir selbst. Es ist der Moment, in dem du die Macht und Verantwortung für dein Leben, deinen Körper, deine Gedanken und deine Gefühle übernimmst.",
      sections: [
        {
          heading: "Kurze Übersicht deines Morgenrituals",
          list: [
            {
              title: "Vorbereitung am Abend",
              text: "Einweichen von Leinsamen, Sesamsamen, Sonnenblumen- und Kürbiskernen mit einer getrockneten Pflaume in einer Glasschale mit Wasser.",
            },
            {
              title: "Erwachen im Bett",
              text: "Die Augen geschlossen halten, sich zurück in die Träume versetzen, sich an deren Botschaften erinnern und mit einem Lächeln danken.",
            },
            {
              title: "Aktivierung des Goldenen Kolbens und der Atmung",
              text: "Die Zunge an den Gaumen legen, das Becken entspannen, drei tiefe Zwerchfellatmungen in den Bauch nehmen und Dankbarkeit ausdrücken.",
            },
            {
              title: "Rückbesinnung auf den Schöpfer",
              text: "Sich bewusst machen, dass du der Schöpfer, der Beobachter und der Projektor deines Lebens bist – Körper, Gedanken und Gefühle sind nur deine Werkzeuge.",
            },
            {
              title: "Die erste Bewegung (Asiatische Hocke)",
              text: "Erwecken der Fußsohlen, Hydratisierung der Faszien, Start der Piezoelektrizität und Kollagenbildung.",
            },
            {
              title: "Elektrisierende Reinigung und Mineralien",
              text: "Eine Prise Keltisches Salz mit Wasser und ein 2- bis 3-minütiges Ölziehen (Bio-Olivenöl durch die Zähne ziehen).",
            },
            {
              title: "Vitales Frühstück und ein Lächeln im Spiegel",
              text: "Die Samen mit der Pflaume für Mikrobiom und Hormone, ein bewusstes Lächeln im Spiegel mit vollständiger Annahme: „Neboj, ich bin bei dir.“",
            },
          ],
        },
        {
          heading: "Alles beginnt bereits am Abend: Zubereitung des vitalen Superfoods für Darm, Nerven und Hormone",
          paragraphs: [
            "Der Weg zu einem bewussten Morgen öffnet sich bereits, bevor du die Augen schließt. Dein Morgen beginnt nämlich mit der abendlichen Zubereitung eines kleinen Wunders für deinen Darm, dein Nervensystem und deine hormonelle Balance.",
            "Bereite in einer Glasschale oder einem Glas dieses vitale Superfood vor: Weiche Leinsamen, Sesamsamen, Sonnenblumen- und Kürbiskerne zusammen mit einer getrockneten Pflaume in Wasser ein. Durch das Einweichen werden in den Samen Enzyme aktiviert, Phytinsäure wird neutralisiert und die volle Lebenskraft erwacht. Über Nacht entsteht ein lebendiges, elastisches Getränk reich an feinem Pflanzenschleim (Muzilagene), der die Schleimhaut des gesamten Traktes sanft umhüllt.",
          ],
          subheading: "Was macht dieses Elixier mit deinem Körper und deinen Hormonen?",
          paragraphs: [
            "• Leinsamen: Reich an Omega-3-Fettsäuren (ALA) und Lignanen (Phytoöstrogenen), die das Hormonsystem natürlich harmonisieren, den Aufbau der Zellmembranen unterstützen und Entzündungen im Körper beruhigen.",
            "• Sesamsamen: Vollgepackt mit Kalzium, Magnesium, Zink und der Aminosäure Tryptophan, die für die Bildung von Serotonin (dem Glückshormon) und Melatonin essenziell ist.",
            "• Sonnenblumen- und Kürbiskerne: Reiche Quelle an Vitamin E (starkes Antioxidans zum Zellschutz), Eisen, Kupfer und insbesondere Zink, das das Nervensystem nährt, das Immunsystem stärkt und die Schilddrüse unterstützt.",
            "• Getrocknete Pflaume: Enthält lösliche und unlösliche Ballaststoffe, Sorbit und Kalium. Sie dient nicht nur dem Gaumenfreude, sondern als Treibstoff für dein Mikrobiom. Sie stimuliert sanft die Darmperistaltik und unterstützt die natürliche Entgiftung am Morgen.",
            "Da das Mikrobiom im Darm über den Vagusnerv direkt mit dem Gehirn kommuniziert, sorgt dieses abendliche Ritual für einen ruhigen Schlaf und einen optimal vorbereiteten Verdauungstrakt für den neuen Tag.",
          ],
        },
        {
          heading: "Dein bewusstes Erwachen (Noch im Bett)",
          subheading: "1. Rückkehr aus den Träumen und die Neuroplastizität des Gehirns",
          paragraphs: [
            "Wenn du aufwachst, halte für einen Moment inne. Lass die Augen noch geschlossen und versetze dich zurück in deine Träume – zur letzten Person, zum letzten Duft oder Gefühl, das du im Traum erlebt hast. Erinnere dich an die Botschaften und Symbole, die dir dein Inneres in der Nacht geschenkt hat.",
            "Das anschließende Ausdrücken von Dankbarkeit und Segen ist nicht nur eine schöne spirituelle Geste – es ist reine Neuroplastizität in der Praxis. Unser Gehirn verdrahtet sich ständig neu, je nachdem, worauf wir unsere Aufmerksamkeit richten. Wenn du die ersten Sekunden nach dem Aufwachen auf Dankbarkeit und Segen lenkst, veränderst du physisch die Struktur deiner Nervenbahnen. Du beruhigst die Amygdala (das Angstzentrum) und überflutest das Gehirn mit Dopamin und Oxytocin, wodurch deine Biologie für den gesamten Tag auf Gesundheit und Frieden eingestellt wird.",
          ],
        },
        {
          subheading: "2. Aktivierung des Goldenen Kolbens, des Vagusnervs und des Parasympathikus",
          paragraphs: [
            "Lege die Zunge sanft an den oberen Gaumen hinter den Schneidezähnen, entspanne dein Becken vollständig und atme tief durch das Zwerchfell hinunter in den Bauch. Nimm drei solche bewussten Atemzüge.",
            "Mit dieser einfachen Bewegung aktivierst du den Goldenen Kolben deines Körpers – die vertikale Achse, die im Beckenboden beginnt, durch die Mitte des Körpers verläuft und sich oben durch das Anlegen der Zunge an den Gaumen schließt. Der Motor dieses Kolbens ist das Zwerchfell.",
            "• Durch das Anlegen der Zunge an den Gaumen stimulierst du die Endungen des Vagusnervs (Nervus vagus) und sendest dem Gehirn sofort das Signal: „Du bist in Sicherheit.“",
            "• Durch das Entspannen des Beckens und die Zwerchfellatmung aktivierst du den sakralen Parasympathikus, weckst das piezoelektrische Signal im Gewebe und erweckst deine tiefe Intuition. Sage dir nach dem dritten Ausatmen im Stillen oder laut: „Danke.“",
          ],
        },
        {
          subheading: "3. Rückbesinnung auf deine Werkzeuge: Schöpfer, Beobachter und Projektor",
          paragraphs: [
            "Bevor du dem Verstand freie Hand lässt, erinnere dich an die Wahrheit darüber, wer du wirklich bist:",
            "• Du bist der Schöpfer und der Beobachter. Stelle dir einen Kinosaal vor: Deine Gedanken und Gefühle sind nur der Film auf der Leinwand. Du bist nicht dieser Film. Du bist der Kinobesucher, aber gleichzeitig auch der Projektor. Je nachdem, welches Licht des Bewusstseins du durch dich fließen lässt, dieser Film erscheint in deinem Leben.",
            "• Dein Körper atmet in diesem Moment und entspannt sich.",
            "• Deine Gedanken sind wie Wolken am Himmel. Sie kommen und gehen... aber Du bist das Nebo.",
            "• Deine Gefühle sind wie ein elektrischer Strom, der durch deinen Körper und durch dieses wunderbare Werkzeug fließt.",
            "Nutze deinen Verstand mit diesem Bewusstsein für das Schönste – für die Dankbarkeit. Segne dich selbst, deinen Körper und segne die Menschen in deiner Umgebung.",
          ],
        },
        {
          heading: "Erste Bewegung, elektrisierende Pflege und die Kraft des Lächelns",
          subheading: "4. Die Asiatische Hocke: Hydratisierung der Faszien und Kollagenbildung",
          paragraphs: [
            "Stehe aus dem Bett auf und gleite in die tiefe asiatische Hocke (oder federe sanft darin). Diese natürliche Bewegung hat eine enorme physiologische Bedeutung:",
            "• Sie öffnet und entspannt die Hüftgelenke, den Lendenbereich und die Achillessehnen.",
            "• Sie komprimiert und saugt anschließend wie ein Schwamm Flüssigkeit in die tiefen Faszienbahnen (insbesondere die hintere und die Spirallinie).",
            "• Genau durch diesen mechanischen Druck und die anschließende Entlastung startet die piezoelektrische Strömung in den Faszien, die Fibroblasten werden stimuliert und die Bildung von neuem Kollagen wird natürlich angeregt. Dein Körper erwacht, wird geschmeidig und hydratisiert von innen. Zaubere bei dieser Bewegung ein erstes sanftes Lächeln auf dein Gesicht und spüre wieder deine mit der Erde verbundenen Fußsohlen. Sage dein nächstes „Danke“.",
          ],
        },
        {
          subheading: "5. Keltisches Salz und die 5.000 Jahre alte Kraft des Oil Pulling",
          paragraphs: [
            "• Elektrizität für den mineralisierten Körper: Gib eine Prise hochwertiges Keltisches Salz auf die Zunge und trinke ein Glas reines Wasser hinterher. Keltisches Salz gilt als eines der hochwertigsten Salze der Welt – es enthält über 80 bis 90 Mineralien und Spurenelemente in perfekter Balance. Da all unsere Körperflüssigkeiten salzig (mineralisiert) sind, bringt diese Prise Salz dein inneres elektrisches Netz sofort zum Leuchten und versorgt die Zellen mit den notwendigen Elektrolyten. Trinke das Wasser mit einem liebevollen Lächeln und Dankbarkeit.",
            "• Mundreinigung (Oil Pulling): Nimm im Badezimmer einen Esslöffel hochwertiges natives Olivenöl in den Mund. Bewege es im Mund hin und her und ziehe es 2 bis 3 Minuten lang durch die Zähne. Diese Methode ist aus dem Ayurveda seit über 5.000 Jahren bekannt. Das Öl bindet fettlösliche Toxine, Bakterien und Beläge, die sich über Nacht in der Mundhöhle angesammelt haben, reinigt die Lymphe und stärkt das Zahnfleisch.",
          ],
        },
        {
          subheading: "6. Das wissenschaftliche Wunder des Lächelns und ein vitales Frühstück",
          paragraphs: [
            "Jetzt ist es Zeit für dein erstes Superfood – die Samen mit der Pflaume, die seit dem Abend auf dich gewartet haben. Genieße sie mit einem Lächeln.",
          ],
          quote: {
            text: "Wenn du ein Lächeln bewusst mindestens 60 Sekunden lang hältst (selbst wenn es zu Beginn nur durch die Mundwinkel erzwungen ist), drücken die Gesichtsmuskeln auf bestimmte Nervenbahnen. Diese Nerven senden ein direktes mechanisches Signal an das Gehirn, das sich sagt: „Meine Muskeln lächeln, also muss ich glücklich sein!“ Das Gehirn schüttet sofort Serotonin, Dopamin und Neuropeptide aus – die Hormone des Glücks und der Entspannung.",
            author: "Vera F. Birkenbihl",
          },
          paragraphs: [
            "Schaue dich zum Abschluss des Rituals im Spiegel an. Blicke dir direkt in die Augen, halte dieses Lächeln für mindestens 60 Sekunden in vollständiger Annahme und sage dir: „Neboj, ich bin bei dir. Du bist in Sicherheit.“",
            "Indem du dir am Morgen diese kleine Zeit für dich schenkst, erfüllst du nicht nur eine Pflicht. Du erinnerst dich daran, wer du wirklich bist. Du übernimmst die Regie über deinen Tag und wirst zu einer liebevollen Begleiterin für deinen Körper, deinen Verstand und deine Gefühle.",
          ],
          callout: "„Neboj, ich bin bei dir. Du bist in Sicherheit.“",
        },
      ],
    },
  },
  "sila-jednoduchosti": {
    sk: {
      category: "Úvaha",
      title: "Sila jednoduchosti v každodenných rituáloch",
      intro: "Nejde o to pridávať do svojho dňa ďalšie a ďalšie povinnosti. Ide o to rozhodnúť sa, čo môžeme z rutiny odobrať, aby v nej zostalo len to podstatné. Jednoduchosť nie je rezignácia. Je to spôsob, ako si vybrať menej vecí, ktorým dokážeme venovať viac pozornosti.",
      sections: [
        {
          paragraphs: [
            "Keď rutina prestane byť zoznamom povinností, môže sa stať tichým miestom návratu k sebe.",
            "Skutočný rituál vás neučí nič úplne nové. Nie je to naučená povinnosť, ale láskavé rozpomínanie sa na váš prirodzený stav bytia – na to, čo sme cestou zabudli. A práve v tomto rozpamätávaní sa skrýva naše uzdravenie.",
          ],
        },
        {
          heading: "Tvoja pozornosť: To najdôležitejšie sa deje v skrytosti",
          paragraphs: [
            "To najdôležitejšie vo vašom živote sa deje vo chvíľach, keď vás nikto nevidí. Nevyžaduje si to žiadne veľké gestá pre vonkajší svet. Znamená to len presunúť svoju pozornosť z vonkajších ruchov späť do svojho vnútorného priestoru.",
            "Vezmite si znova vedome pod kontrolu svoje nástroje – svoje telo, svoj dych a svoje postavenie:",
            "• Kde máte jazyk? Leží jemne na hornom podnebí?",
            "• Aké napätie držíte v tvári, v pleciach alebo v panve? Je vaša panva uvoľnená, alebo v kŕči?",
            "• Ako stojíte a chodíte? Ako sa vaše prsty na nohách dotýkajú zeme? Pod akým uhlom stojí vaša hlava na krku?",
            "Týmito jednoduchými a jasnými krokmi uvedomovania si tela si odrazu začnete uvedomovať ďalšiu úroveň: svoje myšlienky.",
          ],
        },
        {
          heading: "Myšlienky sú ako oblaky – Ty si Nebo",
          paragraphs: [
            "Keď prichádzajú myšlienky, uvedom si: Ty nie si svoje myšlienky a myšlienky nie sú realita.",
            "Myšlienky vytvára myseľ. Tvoja myseľ je presne taká stará ako ty. Tvoja intuícia je však nekonečná, nesmrteľná a prichádza z ducha.",
            "Ak prichádzajú negatívne myšlienky, odpovedz jednoduchou fyziologickou korekciou:",
          ],
          list: [
            {
              title: "1. Zľahka sa usmej",
              text: "Daj kútiky úst jemne nahor (nie do strán k ušiam, ale nahor).",
            },
            {
              title: "2. Jazyk daj na podnebie a uvoľni panvu",
              text: "Polož jazyk na horné podnebie a úplne uvoľni celú panvovú oblasť.",
            },
            {
              title: "3. Staň sa pozorovateľom",
              text: "Predstav si, že tvoje myšlienky sú len oblaky na oblohe. Ty si Nebo. Nechaj oblaky len prejsť. Nevstupuj do nich, nestotožňuj sa s nimi. Je len na tebe, či do nich vložíš svoju energiu a pocit, alebo ich necháš voľne odplávať.",
            },
          ],
        },
        {
          heading: "Múdrosť Brucea Leeho: Presun energie z hlavy do brucha",
          paragraphs: [
            "Ako hovoril aj Bruce Lee: Keď svoju pozornosť presunieš z hlavy a mysle do svojho brucha, tvoje telo jednoducho nemá takú kapacitu energie, aby živilo neustále myšlienkové špirály.",
            "Energia sa stiahne z mysle a tvoja pozornosť sa prirodzene sústredí na tvoju hlbokú intuíciu a správny dych. V tom momente sa tvoje telo vracia do prirodzeného stavu pokoja a zapína sa parasympatikus.",
          ],
        },
        {
          heading: "Emócie sú len elektrina: 90-sekundové tajomstvo",
          paragraphs: [
            "Ani emócií sa nemusíš obávať. Veda dnes potvrdzuje to, čo dávna múdrosť už dlho vie: Emócia je z fyziologického hľadiska len elektrický impulz – čisto energia v pohybe.",
            "Jej trvanie v našom tele je len 60 až maximálne 90 sekúnd.",
            "Keď prichádza silná emócia: vedome uvoľni panvu, daj jazyk na podnebie a začni dýchať bránicou.",
            "Ak zostane panva uvoľnená, emócia cez teba len prejde ako elektrický prúd. Neostane v tebe v podobe kŕča či blokády, ale cez nohy sa prirodzene uzemní v zemi.",
          ],
          callout: "„V tej chvíli si voľná. Si späť vo svojom prirodzenom stave bytia.“",
        },
      ],
    },
    de: {
      category: "Betrachtung",
      title: "Die Kraft der Einfachheit in der täglichen Selbstfürsorge",
      intro: "Es geht nicht darum, neue Pflichten zu deiner Routine hinzuzufügen. Es geht darum zu entscheiden, was du weglassen kannst, damit nur das Wesentliche bleibt. Einfachheit ist keine Resignation. Es ist die bewusste Wahl für weniger Dinge, denen wir dafür unsere volle Aufmerksamkeit schenken.",
      sections: [
        {
          paragraphs: [
            "Wenn eine Routine aufhört, eine bloße To-do-Liste zu sein, wird sie zu einem stillen Ort der Rückkehr zu dir selbst.",
            "Ein wahres Ritual lehrt dich nichts gänzlich Neues. Es ist kein angelernter Zwang, sondern ein liebevolles Sich-Erinnern an deinen natürlichen Zustand des Seins – an das, was wir auf dem Weg vergessen haben. Genau in diesem Sich-Erinnern liegt unsere Heilung.",
          ],
        },
        {
          heading: "Deine Aufmerksamkeit: Das Wichtigste geschieht im Verborgenen",
          paragraphs: [
            "Das Wichtigste in deinem Leben geschieht in den Momenten, in denen dich niemand sieht. Es erfordert keine großen Gesten für die äußere Welt. Es bedeutet lediglich, deine Aufmerksamkeit von den äußeren Reizen zurück in deinen inneren Raum zu lenken.",
            "Nimm wieder bewusst die Kontrolle über deine Werkzeuge ein – über deinen Körper, deinen Atem und deine Haltung:",
            "• Wo befindet sich deine Zunge? Liegt sie sanft am oberen Gaumen?",
            "• Welche Spannung trägst du im Gesicht, in den Schultern oder im Becken? Ist dein Becken entspannt oder verkrampft?",
            "• Wie stehst und gehst du? Wie berühren deine Zehen den Boden? In welchem Winkel ruht dein Kopf auf deinem Hals?",
            "Durch diese einfachen, klaren Schritte der Körperwahrnehmung wirst du dir plötzlich einer weiteren Ebene bewusst: deinen Gedanken.",
          ],
        },
        {
          heading: "Gedanken sind wie Wolken – Du bist der Himmel",
          paragraphs: [
            "Wenn Gedanken auftauchen, erkenne sofort: Du bist nicht deine Gedanken, und Gedanken sind nicht die Realität.",
            "Gedanken werden vom Verstand erschaffen. Dein Verstand ist genau so alt wie du. Deine Intuition hingegen ist unendlich, unsterblich und entspringt deinem wahren Geist.",
            "Sollten negative Gedanken aufziehen, reagiere mit einer einfachen physiologischen Korrektur:",
          ],
          list: [
            {
              title: "1. Schenke dir ein sanftes Lächeln",
              text: "Ziehe deine Mundwinkel leicht nach oben (nicht seitlich zu den Ohren, sondern bewusst nach oben).",
            },
            {
              title: "2. Lege die Zunge an den Gaumen und entspanne dein Becken vollständig",
              text: "Lege die Zunge sanft an den Gaumen und lasse alle Anspannung aus dem Beckenbereich los.",
            },
            {
              title: "3. Werde zum Beobachter",
              text: "Stelle dir vor, deine Gedanken sind nur Wolken am Himmel. Du bist der Himmel. Lass die Wolken einfach vorbeiziehen. Steige nicht in sie ein und identifiziere dich nicht mit ihnen. Es liegt ganz bei dir, ob du Energie und Gefühle in einen Gedanken investierst oder ihn weiterziehen lässt.",
            },
          ],
        },
        {
          heading: "Die Weisheit von Bruce Lee: Die Energie vom Kopf in den Bauch lenken",
          paragraphs: [
            "Wie Bruce Lee einst beschrieb: Wenn du deine Aufmerksamkeit aus dem Verstand hinunter in deinen Bauch lenkst, hat dein Körper schlichtweg nicht mehr die Kapazität, verkopfte Gedankenschleifen mit Energie zu füttern.",
            "Die Energie zieht sich aus dem Verstand zurück und dein Fokus wandert ganz automatisch zu deiner tiefen Intuition und deinem natürlichen Atem. In diesem Moment schaltet dein Nervensystem auf den Parasympathikus um – den Zustand von tiefem Frieden und Ruhe.",
          ],
        },
        {
          heading: "Gefühle sind nur Elektrizität: Das 90-Sekunden-Geheimnis",
          paragraphs: [
            "Auch vor deinen Emotionen brauchst du keine Angst zu haben. Die Wissenschaft bestätigt heute, was die alte Weisheit längst weiß: Eine Emotion ist physiologisch betrachtet nur ein elektrischer Impuls – reine Energie in Bewegung.",
            "Ihre Lebensdauer im Körper beträgt lediglich 60 bis maximal 90 Sekunden.",
            "Wenn eine intensive Emotion aufsteigt: Entspanne bewusst dein Becken, lege die Zunge an den Gaumen und atme tief durch das Zwerchfell.",
            "Wenn dein Becken entspannt bleibt, zieht die Emotion wie ein elektrischer Strom einfach durch dich hindurch. Sie nistet sich nicht als Blockade im Gewebe ein, sondern fließt sanft über deine Füße ab und erdet sich im Boden.",
          ],
          callout: "„In diesem Moment bist du frei. Du bist zurück in deinem natürlichen Zustand des Seins.“",
        },
      ],
    },
  },
  metamorfoza: {
    sk: {
      category: "Metamorphosis",
      title: "Zmena nezačína navonok",
      intro: "Poznámky o vnútornom pohybe, nových začiatkoch a priestore pre seba.",
      body: "Premena sa často začína skôr otázkou než odpoveďou. Dovolíme si zastaviť, prehodnotiť tempo a nechať starú predstavu o sebe pomaly odísť. Navonok sa možno nič nemení, no vnútri už vzniká nový smer.",
    },
  },
  "co-je-metamorphosis": {
    sk: {
      category: "Metamorphosis",
      title: "Metamorfóza: Tichý zázrak prirodzenej premeny",
      intro: "Metamorfóza je tichý, pokojný a láskyplný zázrak prirodzenej premeny. Je to rovnaký zázrak, aký pozorujeme v samej prírode.",
      sections: [
        {
          paragraphs: [
            "Keď sa húsenica stiahne do kukly, vytvorí si svoje tiché bezpečie. Stíši svet okolo seba, odíde do ústrania a až vtedy nájde silu, priestor a čas na to, aby zo seba sňala všetku ťažobu sveta – všetky zadržané emócie, kŕče a nánosy minulosti. Je to posvätný priestor a luxus, ktorý si daruje sama pre seba.",
            "Keď sa do tej kukly zahaľuje, ešte netuší, kým v skutočnosti je. Do ústrania vstupuje ako stará húsenica. No práve v tom tichu a zastavení sa z nej stáva očarujúca bytosť – nádherný, farebný motýľ, ktorý svojou krásou zdobí túto zem.",
            "Tento zázrak prírody nosí každý z nás vo vlastných rukách. Stačí, ak si dovolíme ten luxus stiahnuť sa z vonkajšieho hlučného sveta do svojho vnútorného ticha. Ak si opäť dovolíme rozoznávať tie dva hlasy v našom vnútri a rozpomenúť sa na to, kým naozaj sme.",
            "Metamorfóza je hlboká dôvera. Dôvera v to, že všetko je presne tak, ako má byť, a že náš život máme vo vlastných rukách.",
            "Keď na chvíľu opustíme vonkajší svet a vstúpime dovnútra, spoznáme pravdu: sme Tvorcovia. Sme majitelia svojich nástrojov – svojho tela, svojich myšlienky a svojich pocitov. Keď si dovolíme zňať zo svojich pliec všetky problémy a minulosť, keď uvoľníme zo svojho systému každú emóciu, slovo či akciu, ktorú sme kedykoľvek zadržali... vtedy si spomenieme.",
          ],
          callout: "„Vtedy sa začína ten pravý, čistý stav bytia.“",
        },
        {
          heading: "Tvoja 7-dňová Metamorfóza na Peloponéze",
          paragraphs: [
            "Presne takýto priestor pre tvoju vlastnú premenu spolu vytvárame počas 7-dňového transformačného pobytu Metamorphosis so Zuzanou a Smile Yogou.",
            "V očarujúcom a pokojnom prostredí gréckeho Peloponézu, v čarovnom štvorhviezdičkovom boutique hoteli White Donkey, teba aj tvoje telo citlivo sprevádzam celým týmto procesom návratu k sebe.",
          ],
          subheading: "Ako vyzerá táto cesta znovuzrodenia?",
          list: [
            {
              title: "7 dní, 7 čakier, 7 nových návykov",
              text: "Každý deň venujeme hlbokej očiste a prebudeniu jedného energetického centra.",
            },
            {
              title: "Smile Yoga & Meditácia",
              text: "Každé ráno začíname jogou špeciálne zostavenou pre danú čakru a osobnou sprevádzanou meditáciou.",
            },
            {
              title: "Workshopy & Praktická anatómia",
              text: "Ponoríme sa do praktického výcviku anatómie chôdze a kostrčovo-panvového dýchania.",
            },
            {
              title: "Nedotknutá príroda & Výlety",
              text: "Súčasťou programu sú nezabudnuteľné výlety do panenskej prírody Peloponézu, kde načerpáme čistú energiu a pokoj.",
            },
          ],
          paragraphs: [
            "Počas celého týždňa si hlboko na úrovni tela, mysle aj duše pripomíname to, čo je v živote naozaj dôležité. Po siedmich dňoch ľudia odchádzajú po obrovskej vnútornej zmene – s ľahkosťou v tele, jasom v očiach a schopnosťou vidieť svet úplne inak.",
            "A za to som z celého srdca vďačná.",
          ],
          link: {
            url: "https://www.whitedonkeyhotel.com",
            label: "Navštíviť stránku hotela",
            description: "Boutique Hotel White Donkey, Peloponéz, Grécko",
          },
        },
      ],
    },
    de: {
      category: "Metamorphosis",
      title: "Metamorphose: Das stille Wunder der natürlichen Wandlung",
      intro: "Die Metamorphose ist ein stilles, friedvolles und liebevolles Wunder der natürlichen Wandlung. Es ist dasselbe Wunder, das wir in der Natur beobachten.",
      sections: [
        {
          paragraphs: [
            "Wenn sich die Raupe in ihren Kokon zurückzieht, erschafft sie sich ihren stillen Raum der Sicherheit. Sie bringt die Welt um sich herum zur Ruhe, begibt sich in den Rückzug und findet erst dann die Kraft, den Raum und die Zeit, um die gesamte Last der Welt von sich abzustreifen – all die angestauten Emotionen, die Verkrampfungen und die Ablagerungen der Vergangenheit. Es ist ein heiliger Raum und ein Luxus, den sie sich selbst schenkt.",
            "Wenn sie sich in diesen Kokon hüllt, ahnt sie noch nicht, wer sie in Wirklichkeit ist. Sie geht als alte Raupe in die Stille. Doch genau in diesem Rückzug entsteht aus ihr ein zauberhaftes Wesen – ein wunderschöner, farbenfroher Schmetterling, der diese Erde schmückt.",
            "Dieses Wunder der Natur trägt jeder von uns in den eigenen Händen. Es reicht, wenn wir uns den Luxus erlauben, uns aus der lauten äußeren Welt in unsere innere Stille zurückzuziehen. Wenn wir uns wieder erlauben, die zwei Stimmen in unserem Inneren zu unterscheiden und uns daran zu erinnern, wer wir wirklich sind.",
            "Metamorphose ist tiefes Vertrauen. Das Vertrauen darauf, dass alles genau so ist, wie es sein soll, und dass wir unser Leben in den eigenen Händen halten.",
            "Wenn wir für einen Moment die äußere Welt verlassen und nach innen blicken, erkennen wir die Wahrheit: Wir sind Schöpfer. Wir sind die Eigentümer unserer Werkzeuge – unseres Körpers, unserer Gedanken und unserer Gefühle. Wenn wir uns erlauben, all die Probleme und die Vergangenheit von unseren Schultern zu nehmen, wenn wir jede Emotion, jedes Wort und jede Handlung lösen, die wir jemals zurückgehalten haben... genau dann erinnern wir uns wieder.",
          ],
          callout: "„Genau dort beginnt der wahre, reine Zustand des Seins.“",
        },
        {
          heading: "Deine 7-tägige Metamorphose auf dem Peloponnes",
          paragraphs: [
            "Genau diesen Raum für deine eigene Wandlung kreieren wir gemeinsam während des 7-tägigen Transformations-Retreats Metamorphosis mit Zuzana und Smile Yoga.",
            "In der zauberhaften und friedvollen Umgebung des griechischen Peloponnes, im wunderschönen 4-Sterne Boutique Hotel White Donkey, begleite ich dich und deinen Körper achtsam durch diesen gesamten Prozess der Rückkehr zu dir selbst.",
          ],
          subheading: "Wie sieht dieser Weg der Neugeburt aus?",
          list: [
            {
              title: "7 Tage, 7 Chakren, 7 neue Gewohnheiten",
              text: "Jeden Tag widmen wir der tiefen Reinigung und Erweckung eines Energiezentrums.",
            },
            {
              title: "Smile Yoga & Meditation",
              text: "Wir beginnen jeden Morgen mit speziell auf das jeweilige Chakra abgestimmtem Yoga und persönlicher geführter Meditation.",
            },
            {
              title: "Workshops & Praktische Anatomie",
              text: "Wir tauchen tief ein in das praktische Training der Anatomie des Gehens und der Steißbein-Becken-Atmung.",
            },
            {
              title: "Unberührte Natur & Ausflüge",
              text: "Teil des Programms sind unvergessliche Ausflüge in die unberührte Natur des Peloponnes, wo wir reine Energie und Stille tanken.",
            },
          ],
          paragraphs: [
            "Während der gesamten Woche erinnern wir uns tief auf Ebene von Körper, Geist und Seele an das, was im Leben wirklich zählt. Nach sieben Tagen reisen die Menschen nach einer tiefgreifenden inneren Veränderung ab – mit Leichtigkeit im Körper, Klarheit in den Augen und der Fähigkeit, die Welt mit völlig neuen Augen zu sehen.",
            "Und dafür bin ich von ganzem Herzen dankbar.",
          ],
          link: {
            url: "https://www.whitedonkeyhotel.com",
            label: "Hotel-Website besuchen",
            description: "Boutique Hotel White Donkey, Peloponnes, Griechenland",
          },
        },
      ],
    },
  },
  "zazrak-v-luxemburskych-zahradach": {
    sk: {
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
  },
  "zazrak-na-mori": {
    sk: {
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
  },
  "ranne-prebudenie-nastrojov": {
    sk: {
      category: "Rituál",
      title: "Ranné prebudenie nástrojov: Spomeň si, kým naozaj si",
      intro: "O tom, ako hneď po prebudení usmerniť svoju pozornosť, uzavrieť zlatý stĺp, zastaviť príbehy mysle a vstať s vedomým úsmevom.",
      body: [
        "Rituál slúži na to, aby sme si hneď ráno spomenuli sami na seba – na to, kým naozaj sme. Ešte predtým, než vstaneš z postele, si uvedom svoj vlastný nástroj, ktorým je tvoje telo. Daj jazyk na podnebie a uzavri tak horný piest zlatého stĺpca. Začni voľne dýchať do brucha a uvoľni panvu. Práve uvoľnená panva a jazyk na podnebí nás okamžite dostávajú do stavu parasympatiku – do priestoru pokoja, bezpečia a hlbokej regenerácie. Energia nikde neuniká, zostáva v tele a znásobuje sa.",
        "Keď svoju pozornosť presunieš do dychu, ku správnej polohe jazyka a uvoľnenej panve – keď vnútorným okom vojdeš do svojho stredu v bruchu – tvoja myseľ stratí energiu na to, aby vytvárala príbehy. Ako presne zdôrazňoval aj Bruce Lee, keď pozornosť a vedomie vychádzajú z brucha (zo stredu), myseľ sa utíši a nespustí zbytočný prúd myšlienok. A bez vymyslených príbehov nevznikajú neužitočné emócie. Týmto jednoduchým krokom preberáš plnú zodpovednosť aj vedomé riadenie svojich nástrojov: mysle, emócií a tela.",
        "Ráno je kľúčové hneď sa precítiť vo svojom tele, zastaviť prúd myšlienok a vedome si vyčarovať úsmev na perách (podľa Very F. Birkenbihl aj 60 sekúnd klesajúceho/mechanického úsmevu vyvolá v mozgu presne tú istú hormonálnu reakciu šťastia a náplav endorfínov, ako keď sa 10 sekúnd usmievame úprimne). Pri tomto úsmeve v duchu ďakuješ a žehnáš. A až vtedy, keď máš uvoľnenú panvu, jazyk opretý o podnebie, úsmev na perách a vnútri pocit čistej radosti – až vtedy vstaň.",
      ],
    },
  },
  "navrat-k-sebe": {
    sk: {
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
  },
}

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }))
}

export default async function JournalArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const articleData = articles[slug]

  if (!articleData) notFound()

  return (
    <main className="min-h-screen">
      <Header />
      <ArticleReader articleData={articleData} />
      <Footer />
    </main>
  )
}
