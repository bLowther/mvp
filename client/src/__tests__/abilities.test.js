import { render, screen } from '@testing-library/react';
import Abilities from '../componets/stats/abilities';

const  stats = {
  raceAtributes: {1: ['str', 'dex', 'con', 'int', 'wis', 'cha'], 2: []},
  class: {'warlock': {level: 1, subclass: null}},
  abilities: {
    str: 8,
    dex: 10,
    con: 12,
    int: 13,
    wis: 14,
    cha: 15
  },
  asi: [],
}

it('There are six Ability Scores', () => {
  render(
    <Abilities abilities={stats.abilities} raceAtributes={stats.raceAtributes} asi={stats.asi}/>
  );

  expect(Abilities.scores).toHaveLength(6);
});
