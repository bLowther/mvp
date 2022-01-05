import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Abilities from './stats/abilities.js';
import Profs from './stats/proficiencies.js';
import Skills from './stats/skills.js';

const Stats = ({stats}) => {

  return (
    <Container>
      <Row>
        <Abilities abilities={stats.abilities}/>
        <Profs proficiencies={stats.proficiencies}/>
        <Skills skills={stats.skills}/>
      </Row>
    </Container>
  );

}

export default Stats;