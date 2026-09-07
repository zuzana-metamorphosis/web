# Zuzana Metamorphosis

Webová stránka Zuzany Harvalik postavená na Next.js, Reacte a Tailwinde.

## Aktuálny stav

- Stránka „O mne“ obsahuje nový autobiografický text o výskume, životnej ceste a vzniku EL metódy.
- Shopify obchod je dočasne deaktivovaný. Route `/shop` a `/product/[id]` sú zablokované a nevolajú Shopify API.
- Shopify integračný kód zostáva v projekte, aby sa dal obchod neskôr obnoviť.
- ESLint je nastavený cez flat config v `eslint.config.mjs`.

## Opravené chyby

- neescapované apostrofy a úvodzovky v JSX
- synchronizované nastavovanie stavu v React efektoch
- kontrola mobilného breakpointu cez `useSyncExternalStore`, kompatibilná so SSR
- synchronizácia počiatočného stavu carouselu
- náhodná hodnota generovaná počas renderovania sidebar skeletonu
- chýbajúca ESLint konfigurácia a nekompatibilná verzia ESLintu

## Kontrola

```bash
pnpm lint
pnpm build
```

Oba príkazy aktuálne prechádzajú úspešne. ESLint ešte vypisuje upozornenia, ktoré neblokujú build.

## Spustenie

```bash
pnpm install
pnpm dev
```