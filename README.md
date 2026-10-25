# felicemondo.it

Portfolio di Felice Mondo in forma di chat. Fai una domanda e la risposta arriva con testo e componenti: card dei progetti, timeline, competenze, contatti. Ogni progetto ha anche una sua pagina statica, così Google lo indicizza.

Stack: [Astro](https://astro.build), HTML statico, circa 5 KB di JavaScript. Deploy gratuito su GitHub Pages.

## Modificare i contenuti

| Cosa | Dove |
|------|------|
| Bio, esperienze, studi, certificazioni, competenze, progetti, video | `src/data/profile.ts` |
| Risposte della chat, parole chiave, suggerimenti | `src/data/intents.ts` |
| Testi dell'interfaccia (pulsanti, SEO) | `src/lib/i18n.ts` |
| Colori e font | `src/styles/global.css` |

Ogni testo ha la versione `it` e `en`.

**CV:** metti il PDF in `public/felice-mondo-cv.pdf` e scrivi `cv: '/felice-mondo-cv.pdf'` in `profile.ts`. Finché il campo è vuoto, il pulsante CV apre LinkedIn.

**Nuovo progetto:** aggiungi un oggetto all'array `projects` in `profile.ts`. La pagina, la card e la risposta in chat si creano da sole.

## Design system

File Figma: https://www.figma.com/design/92GaXfL6zgpnhfdaffIk24

Variabili, stili e componenti Figma usano gli stessi nomi del CSS in `src/styles/global.css`:

| Figma | CSS |
|-------|-----|
| `color/surface`, `accent/lime` … | `var(--surface)`, `var(--lime)` … |
| `space/4` | `var(--space-4)` |
| `radius/md` | `var(--radius-md)` |
| Text style `Body/sm`, `Heading/3xl`, `Display` | `var(--text-sm)`, `var(--text-3xl)`, `var(--text-display)` |

Ogni componente Figma ha nella descrizione la classe CSS corrispondente.

## Sviluppo

```bash
npm install
npm run dev     # http://localhost:4321
npm test        # controlla che la chat risponda come previsto
npm run build
```

## Pubblicazione

Ogni push su `main` pubblica il sito con GitHub Actions (`.github/workflows/deploy.yml`).

Una volta sola: su GitHub apri **Settings → Pages** e in **Source** scegli **GitHub Actions**.

Finché il dominio punta ancora al vecchio WordPress, il sito vive su `https://felicemondo.github.io/portfolio/`.

### Passare a felicemondo.it

1. Crea `public/CNAME` con dentro una riga: `felicemondo.it`
2. In `deploy.yml` cancella le righe `SITE` e `BASE`.
3. Dal tuo provider del dominio, punta il DNS a GitHub Pages: record `A` verso `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, e un `CNAME` `www` verso `felicemondo.github.io`.
4. In **Settings → Pages** inserisci `felicemondo.it` come custom domain e attiva **Enforce HTTPS**.

## Collegare un'AI vera

La chat sceglie la risposta in `src/scripts/brain.ts` con `match()`. Per usare un modello, sostituisci la chiamata a `match()` in `src/scripts/chat.ts` con una `fetch` verso un tuo endpoint (per esempio un Cloudflare Worker che tiene la chiave API). Passa al modello i contenuti di `profile.ts` come contesto e restituisci il testo, più l'id di un blocco se vuoi mostrare un componente.
