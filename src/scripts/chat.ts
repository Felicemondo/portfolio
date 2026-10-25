import { match, type Intent } from './brain.ts';

type Reply = { label: string; text: string; block?: string; panel?: string; chips: string[] };
type Data = { intents: Intent[]; replies: Record<string, Reply>; urls: Record<string, string>; firstChips: string[]; typing: string };

const data: Data = JSON.parse(document.getElementById('chat-data')!.textContent!);
const app = document.querySelector<HTMLElement>('[data-app]')!;
const log = document.querySelector<HTMLElement>('[data-log]')!;
const form = document.querySelector<HTMLFormElement>('[data-form]')!;
const input = form.querySelector('input')!;
const chips = document.querySelector<HTMLElement>('[data-chips]')!;
const panel = document.querySelector<HTMLElement>('[data-panel]')!;
const panelBody = panel.querySelector<HTMLElement>('[data-panel-body]')!;
const panelLink = panel.querySelector<HTMLAnchorElement>('[data-panel-link]')!;
const botShell = document.querySelector<HTMLTemplateElement>('#t-bot')!;

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const mobile = matchMedia('(max-width: 899px)');
const wait = (ms: number) => new Promise((r) => setTimeout(r, reduce ? 0 : ms));
let busy = false;
let returnFocus: HTMLElement | null = null;

function setChips(ids: string[]) {
  chips.replaceChildren(
    ...ids.map((id) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.dataset.ask = id;
      b.textContent = data.replies[id].label;
      return b;
    }),
  );
}

async function typeInto(el: HTMLElement, text: string) {
  if (reduce) return void (el.textContent = text);
  const words = text.split(' ');
  for (let i = 0; i < words.length; i++) {
    el.textContent = words.slice(0, i + 1).join(' ');
    await wait(18);
  }
}

async function respond(question: string, id: string) {
  if (busy) return;
  busy = true;
  const reply = data.replies[id];

  const user = document.createElement('p');
  user.className = 'msg user';
  user.textContent = question;
  log.append(user);
  // Keep the question at the top so the answer grows below it.
  const pin = () => user.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });

  const bot = botShell.content.firstElementChild!.cloneNode(true) as HTMLElement;
  const body = bot.querySelector<HTMLElement>('[data-body]')!;
  bot.classList.add('typing');
  body.setAttribute('aria-label', data.typing);
  log.setAttribute('aria-busy', 'true');
  log.append(bot);
  pin();
  await wait(550);

  bot.classList.remove('typing');
  body.removeAttribute('aria-label');
  const p = document.createElement('p');
  body.append(p);
  await typeInto(p, reply.text);
  if (reply.block) {
    const tpl = document.getElementById(`b-${reply.block}`) as HTMLTemplateElement | null;
    if (tpl) body.append(tpl.content.cloneNode(true));
  }
  pin();
  log.setAttribute('aria-busy', 'false');
  if (reply.panel && !mobile.matches) openPanel(reply.panel, false);
  setChips(reply.chips);
  busy = false;
}

function openPanel(slug: string, focus: boolean) {
  const tpl = document.getElementById(`d-${slug}`) as HTMLTemplateElement | null;
  if (!tpl) return;
  panelBody.replaceChildren(tpl.content.cloneNode(true));
  panelBody.scrollTop = 0;
  panelLink.href = data.urls[slug];
  panel.hidden = false;
  app.classList.add('has-panel');
  document.querySelectorAll('.plist a').forEach((a) => a.setAttribute('aria-current', String((a as HTMLElement).dataset.project === slug)));
  if (focus) {
    returnFocus = document.activeElement as HTMLElement;
    panelBody.querySelector<HTMLElement>('.title')?.focus();
  }
}

function closePanel() {
  panel.hidden = true;
  app.classList.remove('has-panel');
  document.querySelectorAll('.plist a').forEach((a) => a.setAttribute('aria-current', 'false'));
  returnFocus?.focus();
  returnFocus = null;
}

function reset() {
  log.querySelectorAll('.msg:not(.intro)').forEach((m) => m.remove());
  closePanel();
  setChips(data.firstChips);
  log.scrollTop = 0;
  input.focus();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const q = input.value.trim();
  if (!q || busy) return;
  input.value = '';
  respond(q, match(q, data.intents) ?? 'fallback');
});

document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const ask = target.closest<HTMLElement>('[data-ask]');
  if (ask) return void respond(data.replies[ask.dataset.ask!].label, ask.dataset.ask!);

  const link = target.closest<HTMLAnchorElement>('a[data-project]');
  if (link && !(e.metaKey || e.ctrlKey || e.shiftKey)) {
    e.preventDefault();
    return openPanel(link.dataset.project!, true);
  }

  if (target.closest('[data-close]')) return closePanel();
  if (target.closest('[data-new]')) return reset();

  const copy = target.closest<HTMLButtonElement>('[data-copy]');
  if (copy) {
    navigator.clipboard?.writeText(copy.dataset.copy!).then(() => {
      const old = copy.lastChild!.textContent;
      copy.lastChild!.textContent = copy.dataset.done!;
      setTimeout(() => (copy.lastChild!.textContent = old), 1600);
    });
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !panel.hidden) closePanel();
});
