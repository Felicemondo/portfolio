import type { Lang } from '../data/profile.ts';

export const ui = {
  it: {
    title: 'Felice Mondo · UX/UI Designer & Digital Creator a Roma',
    description: 'Chatta con Felice Mondo, UX/UI designer e filmmaker a Roma. Progetti per Aeroporti di Roma, Enel Green Power, Luxottica, GSE e altri.',
    skip: 'Vai alla chat',
    inputLabel: 'Fai una domanda a Felice',
    placeholder: 'Chiedimi qualcosa su di me…',
    send: 'Invia',
    ask: 'Chiedimi',
    projects: 'Progetti',
    cv: 'Scarica il CV',
    write: 'Scrivimi',
    close: 'Chiudi',
    openPage: 'Apri la pagina del progetto',
    back: 'Torna alla chat',
    role: 'Ruolo',
    tools: 'Strumenti',
    typing: 'Felice sta scrivendo',
    note: 'Risposte scritte da me. Presto con un modello AI vero.',
    newChat: 'Nuova chat',
    moreCerts: 'Altre certificazioni su LinkedIn',
    langSwitch: 'English',
    otherWork: 'Altri progetti',
    copied: 'Copiata!',
    copy: 'Copia email',
  },
  en: {
    title: 'Felice Mondo · UX/UI Designer & Digital Creator in Rome',
    description: 'Chat with Felice Mondo, UX/UI designer and filmmaker in Rome. Work for Aeroporti di Roma, Enel Green Power, Luxottica, GSE and more.',
    skip: 'Skip to chat',
    inputLabel: 'Ask Felice a question',
    placeholder: 'Ask me anything about me…',
    send: 'Send',
    ask: 'Ask me',
    projects: 'Projects',
    cv: 'Download CV',
    write: 'Email me',
    close: 'Close',
    openPage: 'Open the project page',
    back: 'Back to chat',
    role: 'Role',
    tools: 'Tools',
    typing: 'Felice is typing',
    note: 'Answers written by me. A real AI model is coming soon.',
    newChat: 'New chat',
    moreCerts: 'More certifications on LinkedIn',
    langSwitch: 'Italiano',
    otherWork: 'More projects',
    copied: 'Copied!',
    copy: 'Copy email',
  },
} satisfies Record<Lang, Record<string, string>>;

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const href = (path: string) => base + path;

export const homePath = (lang: Lang) => (lang === 'it' ? '/' : '/en/');
export const projectPath = (lang: Lang, slug: string) => (lang === 'it' ? `/progetti/${slug}/` : `/en/projects/${slug}/`);
