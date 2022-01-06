import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import CircularProgress from '@mui/material/CircularProgress';

const imgStyle = {
  maxWidth: "99px",
  maxHeight: "99px",
  textAlign: "center",
  justifyContent: "center",
  padding: 0
}

// {name: '', image: '', background: '', race: '', currentHP: 1, maxHP: 1, tempHP: 0,}
const Profile = ({info}) => {
  const [health, setHealth] = useState(100);
  const [color, setColor] = useState('success');

  useEffect(() => {
    setHealth(Math.ceil(((info.currentHP + info.tempHP) / info.maxHP) * 100));
  },[info]);

  useEffect(() => {
    if(health > 33) {setColor('warning')}
    if(health > 66) {setColor('success')}
    if(health < 33) {setColor('error')}
  },[health]);

  return (
    <Container style={{ padding: 0 }}>
      <Row>{info.name}</Row>
      <Row>
        <Image roundedCircle={true} style={imgStyle} src={info.image}/>
        <CircularProgress
          sx={{ padding: 0, position: "absolute"}}
          thickness={5}
          color={color}
          size={100}
          variant="determinate"
          value={health}
        />
      </Row>
      <Row>{info.race} {info.background}</Row>
    </Container>
  );

}

export default Profile;
