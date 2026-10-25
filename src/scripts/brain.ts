// The chat "brain": maps free text to a pre-written answer id.
// To plug in a real AI later, replace match() with a call to your endpoint
// and keep returning one of the reply ids (or a free-text reply).

export type Intent = { id: string; keywords: string[]; weight?: number };

export function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

// Whole-word / whole-phrase match, so "ai" never matches "aiuto".
export function match(input: string, intents: Intent[]): string | null {
  const text = ` ${normalize(input)} `;
  let best: string | null = null;
  let bestScore = 0;
  for (const intent of intents) {
    let score = 0;
    for (const kw of intent.keywords) {
      const k = normalize(kw);
      if (k && text.includes(` ${k} `)) score += (intent.weight ?? 1) * k.split(' ').length;
    }
    if (score > bestScore) {
      best = intent.id;
      bestScore = score;
    }
  }
  return best;
}
