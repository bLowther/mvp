import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Inventory from './componets/inventory.js'
import Stats from './componets/stats.js'

function App() {
  const [character, setCharacter] = useState({
    name: '',
    password: '',
    background: '',
    stats: { race: '', class: {}, abilities: {}, asi: [], skills: {}, proficiencies: {} },
    equipment: {equiped: [], bag: []},
    spells: {slots: [], prepared: [], known: []}
  });

  useEffect(() => {
    axios.get('http://localhost:8000/api/character')
    .then(res => setCharacter(res.data))
    .catch(err => console.log(err))
  }, []);

  return (
    <Container>
      <Stats stats={character.stats}/>
      <Inventory />
    </Container>
  );
}

export default App;
