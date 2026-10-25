import type { L, Lang } from './profile.ts';
import { projects, films } from './profile.ts';
import type { Intent } from '../scripts/brain.ts';

// A reply is a short text plus an optional rich block (rendered server-side
// in ChatApp.astro and cloned by the client) and follow-up suggestions.
export type Reply = {
  label: L; // text on the suggestion chip that asks this
  text: L;
  block?: string;
  panel?: string; // project slug to open in the side panel
  chips: string[];
};

export const replies: Record<string, Reply> = {
  hello: {
    label: { it: 'Ciao!', en: 'Hi!' },
    text: {
      it: 'Ciao! Sono la versione chat di Felice. Le risposte le ho scritte io, quindi chiedimi pure.',
      en: 'Hi! I’m the chat version of Felice. I wrote these answers myself, so go ahead and ask.',
    },
    chips: ['about', 'projects', 'experience'],
  },
  about: {
    label: { it: 'Chi sei?', en: 'Who are you?' },
    text: {
      it: 'Sono Felice e faccio due mestieri: progetto interfacce e giro video. Vivo e lavoro a Roma.',
      en: 'I’m Felice, and I do two things: I design interfaces and I make films. I live and work in Rome.',
    },
    block: 'about',
    chips: ['now', 'projects', 'skills'],
  },
  now: {
    label: { it: 'Di cosa ti occupi oggi?', en: 'What do you do now?' },
    text: {
      it: 'Da novembre 2025 sono in Aeroporti di Roma. Seguo il design di tutti i processi digitali dell’aeroporto, su ogni canale e touchpoint.',
      en: 'Since November 2025 I’ve been at Aeroporti di Roma. I lead design for all the airport’s digital processes, across every channel and touchpoint.',
    },
    block: 'now',
    chips: ['experience', 'projects', 'contact'],
  },
  experience: {
    label: { it: 'Dove hai lavorato?', en: 'Where have you worked?' },
    text: {
      it: 'Ecco il mio percorso, dal set cinematografico all’aeroporto.',
      en: 'Here’s my path, from film sets to the airport.',
    },
    block: 'timeline',
    chips: ['projects', 'education', 'contact'],
  },
  projects: {
    label: { it: 'Mostrami i progetti', en: 'Show me your projects' },
    text: {
      it: 'Questi sono i progetti di design di cui vado più fiero. Aprine uno per leggere la storia.',
      en: 'These are the design projects I’m proudest of. Open one to read the story.',
    },
    block: 'projects',
    chips: ['film', 'skills', 'contact'],
  },
  film: {
    label: { it: 'E i video?', en: 'What about video?' },
    text: {
      it: 'Il video è il mio secondo linguaggio. Ho girato e montato live, spot ed eventi.',
      en: 'Video is my second language. I’ve shot and edited live shows, commercials and events.',
    },
    block: 'film',
    chips: ['projects', 'skills', 'contact'],
  },
  skills: {
    label: { it: 'Cosa sai fare?', en: 'What can you do?' },
    text: {
      it: 'Lavoro dalla ricerca al prototipo, con un occhio fisso su accessibilità e performance.',
      en: 'I work from research to prototype, with a constant eye on accessibility and performance.',
    },
    block: 'skills',
    chips: ['projects', 'education', 'contact'],
  },
  education: {
    label: { it: 'Cosa hai studiato?', en: 'What did you study?' },
    text: {
      it: 'Sono partito dal DAMS e ho chiuso con una magistrale in comunicazione digitale. Nel 2026 ho preso due certificazioni su AI e design.',
      en: 'I started at DAMS and finished with a master’s in digital communication. In 2026 I earned two certifications on AI and design.',
    },
    block: 'education',
    chips: ['skills', 'experience', 'contact'],
  },
  accessibility: {
    label: { it: 'Ti occupi di accessibilità?', en: 'Do you work on accessibility?' },
    text: {
      it: 'Sì, conosco bene le WCAG e le linee guida AgID. Il progetto GSE racconta come lavoro: testo ogni componente mentre lo disegno.',
      en: 'Yes, I know WCAG and Italy’s AgID guidelines well. The GSE project shows how I work: I test every component while I design it.',
    },
    block: 'project:gse',
    panel: 'gse',
    chips: ['skills', 'projects'],
  },
  languages: {
    label: { it: 'Che lingue parli?', en: 'Which languages do you speak?' },
    text: {
      it: 'Italiano, è la mia lingua madre, e inglese a livello professionale. Puoi scrivermi in tutte e due.',
      en: 'Italian is my native language and I work in English. Write to me in either.',
    },
    chips: ['about', 'contact'],
  },
  free: {
    label: { it: 'Cosa fai nel tempo libero?', en: 'What do you do for fun?' },
    text: {
      it: 'Mi alleno e giro cortometraggi e videoclip. Il cinema mi ha insegnato a raccontare, il design a semplificare.',
      en: 'I train and shoot short films and music videos. Film taught me to tell stories, design taught me to simplify.',
    },
    chips: ['film', 'about'],
  },
  ai: {
    label: { it: 'Usi l’AI nel design?', en: 'Do you use AI in design?' },
    text: {
      it: 'Sì. Nel 2026 mi sono certificato su AI Foundations, Design Thinking e strategia di design con l’AI. Questo sito è un primo esperimento: per ora risponde con testi miei, presto con un modello vero.',
      en: 'Yes. In 2026 I got certified in AI foundations, design thinking and AI design strategy. This site is a first experiment: for now it answers with my own texts, soon with a real model.',
    },
    block: 'education',
    chips: ['skills', 'contact'],
  },
  hire: {
    label: { it: 'Sei disponibile?', en: 'Are you available?' },
    text: {
      it: 'Sì, valuto nuovi progetti e collaborazioni. Raccontami cosa hai in mente.',
      en: 'Yes, I’m open to new projects and collaborations. Tell me what you have in mind.',
    },
    block: 'contact',
    chips: ['projects', 'experience'],
  },
  contact: {
    label: { it: 'Come ti contatto?', en: 'How can I reach you?' },
    text: {
      it: 'La via più veloce è la mail. Rispondo di persona, non con un bot.',
      en: 'Email is the fastest way. I answer myself, not a bot.',
    },
    block: 'contact',
    chips: ['projects', 'experience'],
  },
  fallback: {
    label: { it: '', en: '' },
    text: {
      it: 'Questa non la so ancora: le mie risposte per ora sono scritte a mano. Prova con una di queste, oppure scrivimi direttamente.',
      en: 'I don’t have that one yet: my answers are hand-written for now. Try one of these, or write to me directly.',
    },
    chips: ['about', 'projects', 'experience', 'contact'],
  },
};

for (const p of projects) {
  replies[`p-${p.slug}`] = {
    label: { it: p.client, en: p.client },
    text: { it: `Ecco ${p.client}. ${p.summary.it}`, en: `Here’s ${p.client}. ${p.summary.en}` },
    block: `project:${p.slug}`,
    panel: p.slug,
    chips: ['projects', 'contact'],
  };
}

export const intents: Intent[] = [
  { id: 'hello', keywords: ['ciao', 'salve', 'buongiorno', 'buonasera', 'hey', 'hi', 'hello', 'hola'] },
  { id: 'about', keywords: ['chi sei', 'presentati', 'parlami di te', 'chi e felice', 'su di te', 'who are you', 'about you', 'about', 'yourself', 'introduce'] },
  { id: 'now', keywords: ['aeroporti di roma', 'aeroporti', 'aeroporto', 'adr', 'fiumicino', 'ciampino', 'oggi', 'adesso', 'attualmente', 'lavoro attuale', 'dove lavori', 'now', 'currently', 'current job', 'airport'] },
  { id: 'experience', keywords: ['esperienza', 'esperienze', 'carriera', 'lavorato', 'storico', 'percorso', 'pixxa', 'madhat', 'aziende', 'experience', 'career', 'worked', 'companies', 'background', 'history'] },
  { id: 'projects', keywords: ['progetti', 'progetto', 'lavori', 'portfolio', 'case study', 'clienti', 'projects', 'project', 'work', 'clients', 'case studies'] },
  { id: 'film', keywords: ['video', 'film', 'filmmaker', 'filmmaking', 'regia', 'regista', 'videoclip', 'cinema', 'montaggio', 'riprese', 'spot', 'director', 'music video', 'editing', ...films.flatMap((f) => f.keywords)] },
  { id: 'skills', keywords: ['competenze', 'skill', 'skills', 'sai fare', 'strumenti', 'tool', 'tools', 'figma', 'software', 'stack', 'capacita', 'can you do', 'abilities', 'ux', 'ui', 'design system', 'prototipi', 'prototyping'] },
  { id: 'education', keywords: ['studi', 'studiato', 'laurea', 'universita', 'formazione', 'certificazioni', 'certificazione', 'master', 'dams', 'mercatorum', 'roma tre', 'education', 'degree', 'university', 'studied', 'certifications', 'certificates'] },
  { id: 'accessibility', keywords: ['accessibilita', 'accessibile', 'wcag', 'agid', 'a11y', 'accessibility', 'accessible', 'inclusive'], weight: 2 },
  { id: 'languages', keywords: ['lingue', 'lingua', 'inglese', 'parli', 'languages', 'english', 'speak'] },
  { id: 'free', keywords: ['tempo libero', 'hobby', 'passioni', 'passione', 'free time', 'hobbies', 'fun', 'weekend'] },
  { id: 'ai', keywords: ['ai', 'intelligenza artificiale', 'ia', 'artificial intelligence', 'chatgpt', 'claude', 'llm'] },
  { id: 'hire', keywords: ['disponibile', 'disponibilita', 'freelance', 'collaborare', 'collaborazione', 'assumere', 'assunzione', 'preventivo', 'available', 'availability', 'hire', 'hiring', 'collaborate', 'freelancer', 'quote'], weight: 2 },
  { id: 'contact', keywords: ['contatti', 'contatto', 'contattarti', 'contattare', 'email', 'mail', 'linkedin', 'telefono', 'cv', 'curriculum', 'contact', 'reach', 'resume', 'phone'], weight: 2 },
  ...projects.map((p) => ({ id: `p-${p.slug}`, keywords: [p.client, ...p.keywords], weight: 3 })),
];

// What the client needs for one language: plain strings, no L objects.
export function clientData(lang: Lang) {
  return {
    intents,
    replies: Object.fromEntries(
      Object.entries(replies).map(([id, r]) => [id, { label: r.label[lang], text: r.text[lang], block: r.block, panel: r.panel, chips: r.chips }]),
    ),
  };
}
