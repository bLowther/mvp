import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Inventory from './componets/inventory.js'
import Stats from './componets/stats.js'

function App() {
  const [info, setInfo] = useState({
    name: '',
    image: '',
    background: '',
    race: '',
    currentHP: 1,
    maxHP: 1,
    tempHP: 0
  });
  const [stats, setStats] = useState({
    raceAtributes: {1: [], 2: []},
    class: {},
    abilities: {},
    asi: [],
    skills: {},
    profs: {}
  });
  const [equipment, setEquipment] = useState({equiped: [], bag: []});
  const [spells, setSpells] = useState({slots: [], prepared: [], known: []});

  useEffect(() => {
    axios.get('http://localhost:8000/api/character')
    .then(res => {
      setInfo(res.data.info);
      setStats(res.data.stats);
      setEquipment(res.data.equipment);
      setSpells(res.data.spells);
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <Container>
      <Stats stats={stats} info={info}/>
      <Inventory equipment={equipment} spells={spells}/>
    </Container>
  );
}

export default App;
