import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Abilities from './stats/abilities.js';
import Profs from './stats/proficiencies.js';
import Skills from './stats/skills.js';
import Profile from './stats/profile.js';

const Stats = ({stats, info, setInfo}) => {

  return (
    <Container>
      <Row>
        <Col><Profile info={info} setInfo={setInfo}/></Col>
        <Col><Abilities abilities={stats.abilities} raceAtributes={stats.raceAtributes} asi={stats.asi}/></Col>
        {/* <Col><Profs proficiencies={stats.proficiencies}/></Col>
        <Col><Skills skills={stats.skills}/></Col> */}
      </Row>
    </Container>
  );

}

export default Stats;