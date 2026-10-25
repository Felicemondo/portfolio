import { test } from 'node:test';
import assert from 'node:assert/strict';
import { match } from './brain.ts';
import { intents, replies } from '../data/intents.ts';

const cases: [string, string | null][] = [
  ['Ciao!', 'hello'],
  ['Mostrami i progetti', 'projects'],
  ['Dove hai lavorato?', 'experience'],
  ['dove lavori adesso?', 'now'],
  ['Parlami del progetto Luxottica', 'p-luxottica'],
  ['hai lavorato con Enel?', 'p-enel-green-power'],
  ['Ray-Ban', 'p-luxottica'],
  ['Who are you?', 'about'],
  ['Are you available for freelance work?', 'hire'],
  ['Ti occupi di accessibilità?', 'accessibility'],
  ['mi serve aiuto', null],
  ['che tempo fa a Roma?', null],
];

test('match picks the expected reply', () => {
  for (const [input, expected] of cases) assert.equal(match(input, intents), expected, input);
});

test('every intent and chip points to a reply', () => {
  for (const i of intents) assert.ok(replies[i.id], i.id);
  for (const r of Object.values(replies)) for (const c of r.chips) assert.ok(replies[c], c);
});
