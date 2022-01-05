const express = require('express');
const axios = require('axios');
const url = require('../../config.js').api_url

const router = express.Router();

const mock = {
  name: 'test character',
  password: 'password',
  background: 'Acolyte',
  stats: {
    race: 'human',
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
    skills: {
      Acrobatics: 0,
      Animal_Handling: 0,
      Arcana: 1,
      Athletics: 0,
      Deception: 1,
      History: 0,
      Insight: 1,
      Intimidation: 0,
      Investigation: 0,
      Medicine: 0,
      Nature: 0,
      Perception: 0,
      Performance: 0,
      Persuasion: 0,
      Religion: 1,
      Sleight_of_Hand: 0,
      Stealth: 0,
      Survival: 0
    },
    proficiencies: {
      armor: ['Light Armor'],
      weapons: ['Simple Weapons'],
      tools: [],
      languages: ['Common', 'Dwarvish', 'Elvish']
    }
  },
  equipment: {
    equiped: [],
    bag: [],
  },
  spells: {
    slots: [],
    prepared: [],
    known: []
  }
}

router.get('/', (req, res) => {
  res.send(mock)
});

module.exports = router;