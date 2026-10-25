// Single source of truth for everything the site says about Felice.
// Edit here: chat answers, project pages and SEO all read from this file.

export type Lang = 'it' | 'en';
export type L = Record<Lang, string>;
export type Accent = 'lime' | 'violet' | 'coral' | 'sky' | 'sun' | 'pink';

export const profile = {
  name: 'Felice Mondo',
  role: { it: 'UX/UI Designer & Digital Creator', en: 'UX/UI Designer & Digital Creator' } as L,
  location: { it: 'Roma, Italia', en: 'Rome, Italy' } as L,
  email: 'mondo.felice@outlook.it',
  // Put the PDF in public/ and set cv to '/felice-mondo-cv.pdf'. Until then the CV button opens LinkedIn.
  cv: '',
  links: {
    linkedin: 'https://www.linkedin.com/in/felicemondo/',
    dribbble: 'https://dribbble.com/Happyworld',
  },
  available: { it: 'Aperto a nuovi progetti', en: 'Open to new projects' } as L,
  intro: {
    it: 'Designer e filmmaker. Oggi disegno l’esperienza digitale di Aeroporti di Roma, su tutti i canali e i touchpoint. Chiedimi dei miei progetti, di dove ho lavorato o di come lavoro.',
    en: 'Designer and filmmaker. Right now I design the digital experience of Aeroporti di Roma, across every channel and touchpoint. Ask me about my projects, where I’ve worked or how I work.',
  } as L,
  bio: {
    it: 'Progetto interfacce da quando ho capito che un buon design rende la giornata di qualcuno più semplice. Ho una laurea al DAMS e una magistrale in Comunicazione digitale e marketing. Lavoro su UI, prototipi, test di usabilità, accessibilità (WCAG e linee guida AgID) e prodotti basati su SAP Fiori. Fuori dal lavoro mi alleno e giro cortometraggi e videoclip.',
    en: 'I design interfaces because good design makes someone’s day easier. I studied arts and performance at DAMS, then took a master’s in Digital Communication and Marketing. I work on UI, prototypes, usability testing, accessibility (WCAG and Italy’s AgID guidelines) and SAP Fiori products. Off the clock I train and shoot short films and music videos.',
  } as L,
  languages: [
    { name: { it: 'Italiano', en: 'Italian' } as L, level: { it: 'madrelingua', en: 'native' } as L },
    { name: { it: 'Inglese', en: 'English' } as L, level: { it: 'professionale', en: 'professional' } as L },
  ],
};

export const experience = [
  {
    company: 'Aeroporti di Roma',
    role: { it: 'UX/UI Designer & Digital Touchpoint Owner', en: 'UX/UI Designer & Digital Touchpoint Owner' } as L,
    period: { it: 'nov 2025 – oggi', en: 'Nov 2025 – now' } as L,
    place: { it: 'Fiumicino · ibrido', en: 'Fiumicino · hybrid' } as L,
    accent: 'lime' as Accent,
    text: {
      it: 'Seguo il design end-to-end di tutti i processi digitali dell’aeroporto, su ogni canale e touchpoint. Porto avanti l’identità del brand sul digitale, raccolgo la domanda dei team e allineo gli stakeholder su ogni iniziativa.',
      en: 'I own end-to-end design for the airport’s digital processes, across every channel and touchpoint. I push the brand identity forward in digital, collect demand from teams and align stakeholders on every design initiative.',
    } as L,
  },
  {
    company: 'Pixxa',
    role: { it: 'UX/UI Designer · consulenza', en: 'UX/UI Designer · consulting' } as L,
    period: { it: 'feb 2021 – nov 2025', en: 'Feb 2021 – Nov 2025' } as L,
    place: { it: 'Caserta · ibrido', en: 'Caserta · hybrid' } as L,
    accent: 'violet' as Accent,
    text: {
      it: 'Quasi cinque anni di consulenza per aziende medie e grandi: Enel Green Power, Luxottica, GSE, Dedem, ASL Napoli 3. Benchmark, personas, user flow, wireframe, prototipi e test, sempre dentro team agile con PO, analisti e sviluppatori.',
      en: 'Almost five years consulting for mid-size and large companies: Enel Green Power, Luxottica, GSE, Dedem, ASL Napoli 3. Benchmarks, personas, user flows, wireframes, prototypes and testing, always inside agile teams with POs, analysts and developers.',
    } as L,
  },
  {
    company: 'Pixxa',
    role: { it: 'Filmmaker', en: 'Filmmaker' } as L,
    period: { it: 'feb 2021 – nov 2025', en: 'Feb 2021 – Nov 2025' } as L,
    place: { it: 'Caserta', en: 'Caserta' } as L,
    accent: 'coral' as Accent,
    text: {
      it: 'In parallelo ho girato e montato spot, live ed eventi: TEDx, Ernia, la Regione Campania, il lancio dell’app La Mia Campania.',
      en: 'Alongside design I shot and edited commercials, live shows and events: TEDx, Ernia, Regione Campania, the launch of the La Mia Campania app.',
    } as L,
  },
  {
    company: 'Madhat Production',
    role: { it: 'Assistente di produzione · stage', en: 'Production assistant · internship' } as L,
    period: { it: 'gen – feb 2020', en: 'Jan – Feb 2020' } as L,
    place: { it: 'Caserta', en: 'Caserta' } as L,
    accent: 'sun' as Accent,
    text: {
      it: 'Sul set ho gestito persone e risorse: budget, attrezzatura, scene di massa, casting.',
      en: 'On set I managed people and resources: budget, equipment, crowd scenes, casting.',
    } as L,
  },
];

export const education = [
  {
    school: 'Università Mercatorum',
    title: { it: 'Laurea magistrale in Comunicazione digitale e marketing', en: 'MSc in Digital Communication and Marketing' } as L,
    period: '2022 – 2024',
    note: { it: 'Voto 105/110', en: 'Grade 105/110' } as L,
  },
  {
    school: 'Università Roma Tre',
    title: { it: 'Laurea triennale DAMS: arti figurative, musica, spettacolo e moda', en: 'BA in Arts, Music, Performance and Fashion (DAMS)' } as L,
    period: '2016 – 2020',
    note: { it: '', en: '' } as L,
  },
];

export const certifications = [
  { name: 'Design Strategy, Future Trends & Implementation with AI', issuer: 'AI CERTs', date: { it: 'set 2026', en: 'Sep 2026' } as L },
  { name: 'AI Foundations & Design Thinking', issuer: 'AI CERTs', date: { it: 'ago 2026', en: 'Aug 2026' } as L },
];

export const skills = {
  design: {
    label: { it: 'Design', en: 'Design' } as L,
    items: ['UI design', 'Visual design', 'Prototyping', 'Usability testing', 'Design system', 'SAP Fiori', 'CX architecture'],
  },
  quality: {
    label: { it: 'Accessibilità e performance', en: 'Accessibility & performance' } as L,
    items: ['WCAG', 'AgID', 'Core Web Vitals', 'Web performance analysis'],
  },
  film: {
    label: { it: 'Video', en: 'Video' } as L,
    items: ['Regia / DOP', 'Storytelling', 'Montaggio', 'Color grading', 'VFX & SFX', 'Sceneggiatura'],
  },
  tools: {
    label: { it: 'Strumenti', en: 'Tools' } as L,
    items: ['Figma', 'Adobe XD', 'Framer', 'Webflow', 'WordPress', 'HTML/CSS/JS', 'React', 'GSAP', 'Token Studio', 'ContentSquare', 'Monetate', 'Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Photoshop', 'Illustrator', 'Jira', 'Miro'],
  },
};

export type Project = {
  slug: string;
  client: string;
  title: L;
  kind: 'product' | 'web';
  accent: Accent;
  role: L;
  tools: string[];
  summary: L;
  sections: { h: L; p: L }[];
  keywords: string[];
};

// "Enel Green Power" -> "EGP", "GSE" -> "GSE", "Dedem" -> "De"
export function monogram(client: string) {
  const words = client.split(' ');
  if (words.length > 1) return words.slice(0, 3).map((w) => w[0]).join('');
  return client === client.toUpperCase() ? client.slice(0, 3) : client.slice(0, 2);
}

export const projects: Project[] = [
  {
    slug: 'enel-green-power',
    client: 'Enel Green Power',
    title: { it: 'Plant Operation Management', en: 'Plant Operation Management' },
    kind: 'product',
    accent: 'lime',
    role: { it: 'UX/UI Designer', en: 'UX/UI Designer' },
    tools: ['Adobe XD', 'Miro'],
    summary: {
      it: 'Una piattaforma per gestire impianti eolici, fotovoltaici, a idrogeno e BESS in tutto il mondo.',
      en: 'A platform to run wind, solar, hydrogen and BESS plants worldwide.',
    },
    sections: [
      {
        h: { it: 'Il problema', en: 'The problem' },
        p: {
          it: 'Chi gestiva gli impianti non aveva uno strumento unico. Si coordinava con telefonate, WhatsApp e fogli Excel. Con le interviste agli utenti abbiamo capito che serviva un posto solo per comunicare, rispondere in fretta e seguire il lavoro.',
          en: 'Plant teams had no single tool. They coordinated through phone calls, WhatsApp and Excel sheets. User interviews showed they needed one place to communicate, react fast and track work.',
        },
      },
      {
        h: { it: 'Cosa ho fatto', en: 'What I did' },
        p: {
          it: 'Ho condotto interviste, disegnato flussi e interfacce, e lavorato ogni giorno con Product Owner, Scrum Master, analisti, sviluppatori e tester in Scrum. Ogni sprint mi permetteva di correggere il tiro sui bisogni che emergevano.',
          en: 'I ran interviews, designed flows and interfaces, and worked daily with Product Owners, Scrum Masters, analysts, developers and testers in Scrum. Each sprint let me adjust to the needs that surfaced.',
        },
      },
    ],
    keywords: ['enel', 'green power', 'impianti', 'plant', 'energia rinnovabile', 'renewable'],
  },
  {
    slug: 'luxottica',
    client: 'Luxottica',
    title: { it: 'Web Performance Analysis', en: 'Web Performance Analysis' },
    kind: 'product',
    accent: 'sky',
    role: { it: 'Web Performance Analyst', en: 'Web Performance Analyst' },
    tools: ['ContentSquare', 'Monetate', 'PageSpeed Insights', 'WebPageTest', 'mPulse', 'CrUX'],
    summary: {
      it: 'Core Web Vitals e UX per gli e-commerce di Ray-Ban, Persol, Oliver Peoples e altri brand del gruppo.',
      en: 'Core Web Vitals and UX for the e-commerce sites of Ray-Ban, Persol, Oliver Peoples and other group brands.',
    },
    sections: [
      {
        h: { it: 'L’obiettivo', en: 'The goal' },
        p: {
          it: 'Rendere più veloci gli e-commerce del gruppo, sia nei numeri sia nella percezione di chi compra, perché la velocità pesa sulle conversioni.',
          en: 'Make the group’s e-commerce sites faster, in the metrics and in how shoppers feel them, because speed drives conversions.',
        },
      },
      {
        h: { it: 'Cosa ho fatto', en: 'What I did' },
        p: {
          it: 'Ho analizzato LCP, CLS, FID e TTFB di ogni sito, trovato i punti critici e scritto un piano d’azione su misura. Ho alternato interventi rapidi e lavori strutturali, insieme ai team front-end, back-end, UX e business e in contatto con gli ingegneri di Google. Poi ho misurato l’impatto nel tempo.',
          en: 'I analysed LCP, CLS, FID and TTFB for each site, found the weak spots and wrote a tailored action plan. I mixed quick wins with structural work, together with front-end, back-end, UX and business teams and in touch with Google engineers. Then I tracked the impact over time.',
        },
      },
    ],
    keywords: ['luxottica', 'ray-ban', 'rayban', 'persol', 'oliver peoples', 'performance', 'core web vitals', 'e-commerce', 'ecommerce'],
  },
  {
    slug: 'gse',
    client: 'GSE',
    title: { it: 'Gestionale servizi energetici', en: 'Energy services platform' },
    kind: 'product',
    accent: 'violet',
    role: { it: 'UX/UI Designer · accessibilità', en: 'UX/UI Designer · accessibility' },
    tools: ['Figma', 'Mauve++', 'Axe DevTools', 'Lighthouse'],
    summary: {
      it: 'Un gestionale per il Gestore dei Servizi Energetici, progettato accessibile fin dal primo wireframe.',
      en: 'A management system for Italy’s Energy Services Manager, designed accessible from the first wireframe.',
    },
    sections: [
      {
        h: { it: 'Due obiettivi', en: 'Two goals' },
        p: {
          it: 'Rendere più efficiente il monitoraggio dei servizi energetici e garantire un accesso digitale inclusivo a ogni utente.',
          en: 'Make energy-service monitoring more efficient and give every user inclusive digital access.',
        },
      },
      {
        h: { it: 'Cosa ho fatto', en: 'What I did' },
        p: {
          it: 'Ho seguito tutto il processo, dai flussi UX ai prototipi interattivi in Figma. Ho testato ogni componente con Mauve++, Axe DevTools e Lighthouse mentre lo disegnavo, così l’accessibilità è entrata nel prodotto invece di arrivare come correzione finale.',
          en: 'I ran the whole process, from UX flows to interactive prototypes in Figma. I tested each component with Mauve++, Axe DevTools and Lighthouse while designing it, so accessibility shaped the product instead of arriving as a late fix.',
        },
      },
    ],
    keywords: ['gse', 'gestore', 'servizi energetici', 'energy services'],
  },
  {
    slug: 'dedem',
    client: 'Dedem',
    title: { it: 'App per gli ordini di manutenzione', en: 'Maintenance orders app' },
    kind: 'product',
    accent: 'sun',
    role: { it: 'UI Designer', en: 'UI Designer' },
    tools: ['Adobe XD', 'SAP Fiori'],
    summary: {
      it: 'Il restyling della versione 2.0 dell’app che i tecnici Dedem usano sul campo.',
      en: 'The 2.0 redesign of the app Dedem technicians use in the field.',
    },
    sections: [
      {
        h: { it: 'Il contesto', en: 'The context' },
        p: {
          it: 'Dedem gestisce cabine per fototessere e installazioni digitali in tutta Italia. I tecnici usano l’app per gli ordini di manutenzione e la versione 1.0 era diventata difficile da usare.',
          en: 'Dedem runs photo booths and digital installations across Italy. Technicians use the app for maintenance orders, and version 1.0 had become hard to use.',
        },
      },
      {
        h: { it: 'Cosa ho fatto', en: 'What I did' },
        p: {
          it: 'Ho ridisegnato la navigazione, rifatto le schermate esistenti e creato quelle nuove sulla libreria SAP Fiori. Ho tenuto tutte le funzioni e reso l’interfaccia più chiara, accessibile e coerente con gli standard aziendali.',
          en: 'I redesigned the navigation, reworked the existing screens and built new ones on the SAP Fiori library. I kept every feature and made the interface clearer, more accessible and consistent with company standards.',
        },
      },
    ],
    keywords: ['dedem', 'manutenzione', 'maintenance', 'sap', 'fiori', 'fototessere'],
  },
  {
    slug: 'asl-napoli-3',
    client: 'ASL Napoli 3 Sud',
    title: { it: 'Gestione fondi extra-aziendali', en: 'Extra-company funds management' },
    kind: 'product',
    accent: 'pink',
    role: { it: 'UX/UI Designer', en: 'UX/UI Designer' },
    tools: ['Adobe XD'],
    summary: {
      it: 'Un gestionale per monitorare le richieste dei pazienti e assegnare i premi di produzione.',
      en: 'A system to track patient requests and assign productivity bonuses.',
    },
    sections: [
      {
        h: { it: 'L’obiettivo', en: 'The goal' },
        p: {
          it: 'Dare all’ASL più efficienza interna e più trasparenza nella gestione delle risorse mediche.',
          en: 'Give the health authority better internal efficiency and more transparency in how it manages medical resources.',
        },
      },
      {
        h: { it: 'Cosa ho fatto', en: 'What I did' },
        p: {
          it: 'Ho mappato le interazioni con flussi UX dettagliati, poi ho disegnato wireframe e mockup ad alta fedeltà in Adobe XD. Ho lavorato in Scrum con Product Owner, analisti e sviluppatori per iterare in fretta.',
          en: 'I mapped interactions with detailed UX flows, then designed wireframes and high-fidelity mockups in Adobe XD. I worked in Scrum with Product Owners, analysts and developers to iterate fast.',
        },
      },
    ],
    keywords: ['asl', 'napoli 3', 'sanita', 'healthcare', 'pazienti', 'patients', 'medico'],
  },
  {
    slug: 'la-mia-campania',
    client: 'La Mia Campania',
    title: { it: 'App per il turismo di prossimità', en: 'Local tourism app' },
    kind: 'product',
    accent: 'coral',
    role: { it: 'UX/UI Designer', en: 'UX/UI Designer' },
    tools: ['Figma', 'Miro'],
    summary: {
      it: 'Un’app che racconta i posti nascosti della Campania a chi ci vive e a chi la visita.',
      en: 'An app that shows the hidden spots of Campania to locals and visitors.',
    },
    sections: [
      {
        h: { it: 'Cosa ho fatto', en: 'What I did' },
        p: {
          it: 'Con il team Pixxa ho seguito ogni fase in Figma: analisi degli utenti, flussi UX, mockup ad alta fedeltà e prototipi interattivi. Ho rifatto le schermate esistenti e aggiunto componenti nuovi per semplificare le interazioni.',
          en: 'With the Pixxa team I covered every stage in Figma: user analysis, UX flows, high-fidelity mockups and interactive prototypes. I reworked existing screens and added new components to simplify interactions.',
        },
      },
      {
        h: { it: 'Test', en: 'Testing' },
        p: {
          it: 'Prima del rilascio ho fatto test di usabilità sui prototipi e ho integrato il feedback. Per il lancio ho girato anche lo spot.',
          en: 'Before release I ran usability tests on the prototypes and folded in the feedback. I also shot the launch commercial.',
        },
      },
    ],
    keywords: ['la mia campania', 'lmc', 'turismo', 'tourism', 'campania', 'app mobile'],
  },
  {
    slug: 'sub-milano',
    client: 'Sub Milano',
    title: { it: 'Restyling del sito', en: 'Website redesign' },
    kind: 'web',
    accent: 'sky',
    role: { it: 'Web Designer', en: 'Web Designer' },
    tools: ['Adobe XD', 'WordPress'],
    summary: {
      it: 'Il nuovo sito di un centro sub multifunzione, dopo anni di grafica datata e layout non responsive.',
      en: 'A new website for a diving centre, replacing years of dated graphics and a non-responsive layout.',
    },
    sections: [
      {
        h: { it: 'Cosa ho fatto', en: 'What I did' },
        p: {
          it: 'Ho analizzato i concorrenti e riscritto la struttura del sito per due pubblici: chi si avvicina alle immersioni e i sub esperti. Palette blu, nero e argento, elementi acquatici stilizzati, navigazione chiara su corsi, servizi e attrezzatura.',
          en: 'I studied competitors and rebuilt the site structure for two audiences: beginners and experienced divers. Blue, black and silver palette, stylised water elements, clear navigation through courses, services and gear.',
        },
      },
    ],
    keywords: ['sub milano', 'diving', 'immersioni', 'sub'],
  },
  {
    slug: 'lascia-una-bozza',
    client: 'Lascia una bozza',
    title: { it: 'Piattaforma di scrittura anonima', en: 'Anonymous writing platform' },
    kind: 'web',
    accent: 'pink',
    role: { it: 'Web Designer', en: 'Web Designer' },
    tools: ['Adobe XD', 'WordPress'],
    summary: {
      it: 'Un sito dove lasciare le parole che non hai mai detto, in forma anonima.',
      en: 'A site where you leave the words you never said, anonymously.',
    },
    sections: [
      {
        h: { it: 'Cosa ho fatto', en: 'What I did' },
        p: {
          it: 'Ho lavorato su tre principi: minimalismo emotivo, colore usato con intenzione e interfacce pulite che lasciano spazio al testo. Scrivere e leggere una bozza doveva essere semplice, proteggendo anonimato e autenticità.',
          en: 'I worked on three principles: emotional minimalism, deliberate colour and clean interfaces that leave room for the words. Writing and reading a draft had to feel simple while protecting anonymity.',
        },
      },
    ],
    keywords: ['lascia una bozza', 'bozza', 'anonimo', 'anonymous'],
  },
  {
    slug: 'gabriele-esposito',
    client: 'Gabriele Esposito',
    title: { it: 'Sito per un artista', en: 'Artist website' },
    kind: 'web',
    accent: 'violet',
    role: { it: 'Web Designer', en: 'Web Designer' },
    tools: ['Figma', 'WordPress'],
    summary: {
      it: 'Il sito di un cantautore emergente: musica, merch e fan in un posto solo.',
      en: 'The website of an emerging singer-songwriter: music, merch and fans in one place.',
    },
    sections: [
      {
        h: { it: 'Cosa ho fatto', en: 'What I did' },
        p: {
          it: 'Ho studiato i siti di artisti indie e pop e ho scelto una dark mode con tocchi viola e oro, animazioni fluide e layout asimmetrici. Navigazione semplice, carrello per il merch e collegamenti a streaming e social.',
          en: 'I studied indie and pop artists’ sites and went for a dark mode with purple and gold touches, fluid animation and asymmetric layouts. Simple navigation, a merch cart and links to streaming and socials.',
        },
      },
    ],
    keywords: ['gabriele esposito', 'artista', 'artist', 'musica', 'music', 'cantautore'],
  },
];

export const films = [
  { client: 'TEDx San Nicola la Strada', what: { it: 'Video dell’evento', en: 'Event film' } as L, keywords: ['tedx', 'ted'] },
  { client: 'Ernia', what: { it: 'Live performance', en: 'Live performance' } as L, keywords: ['ernia'] },
  { client: 'KLEM x Serena Brancale', what: { it: 'Opening act live', en: 'Live opening act' } as L, keywords: ['klem', 'serena brancale', 'brancale'] },
  { client: 'Superbia', what: { it: 'Videoclip', en: 'Music video' } as L, keywords: ['superbia', 'videoclip', 'music video'] },
  { client: 'Regione Campania · Exempla', what: { it: 'Mostra “Il Grand Tour del Saper fare Campano”', en: '“Il Grand Tour del Saper fare Campano” exhibition' } as L, keywords: ['exempla', 'regione campania'] },
  { client: 'ANCI Campania', what: { it: 'Assemblea regionale “La voce dei sindaci”', en: 'Regional assembly “La voce dei sindaci”' } as L, keywords: ['anci', 'sindaci'] },
  { client: 'Torello Trasporti', what: { it: 'Presentazione del nuovo truck Mercedes', en: 'New Mercedes truck launch' } as L, keywords: ['mercedes', 'truck', 'torello'] },
  { client: 'La Mia Campania', what: { it: 'Spot di lancio dell’app', en: 'App launch commercial' } as L, keywords: ['spot', 'commercial', 'tony tammaro'] },
];
