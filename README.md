# Angela’s Cakes

Webová aplikace pro zakázkové dorty. Momentálně umožňuje uživatelům vytvořit účet, prohlížet dorty a přidávat recenze.

## Požadavky

- Node.js ≥ 18
- npm / yarn / pnpm
- PostgreSQL databáze (hostovaná např. přes [Neon](https://neon.com/))
- [Google OAuth](https://console.cloud.google.com/apis/dashboard?pli=1) účet pro přihlášení uživatele (pouze při plném spuštění)

## Instalace
1. Naklonování repozitáře:
```
git clone "https://github.com/notvladbalan/angelas-cakes-3"
cd angelas-cakes-3
```
2. Nainstalování závislostí:
```
npm install
# nebo
yarn
# nebo
pnpm install
```  

## Nastavení databáze

1. Vytvoře souboru `.env` v kořenovém adresáři:
```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
NEXTAUTH_URL="http://localhost:3000"
```
2. Spustění migrace Prisma:
```
npx prisma migrate dev
```

## Spuštění projektu
```
npm run dev
# nebo
yarn dev
# nebo
pnpm dev
```

Otevření [http://localhost:3000](http://localhost:3000/) v prohlížeči.

## Testy

Projekt obsahuje základný Playwright e2e test, který ověřuje načtení hlavní stránky:
```
npx playwright test
```

> Poznámka: složitější testy (např. přidávání recenzí) by vyžadovaly přihlášení přes Google OAuth. Pro tento projekt je použit pouze jednoduchý smoke test.
