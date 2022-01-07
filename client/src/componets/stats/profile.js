import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Input from '@mui/material/Input';

const imgStyle = {
  maxWidth: "99px",
  maxHeight: "99px",
  textAlign: "center",
  justifyContent: "center",
  padding: 0
};

const circleStyle = {
  padding: 0,
  position: "absolute"
};

const inputStyle = {
  fontSize: 12,
  padding: 0,
  width: "6ch",
  left: "6%"
};

const inProp = {
  type: "number",
  min: 0,
  maxLength: 3
}

// {name: '', image: '', background: '', race: '', currentHP: 1, maxHP: 1, tempHP: 0,}
const Profile = ({info, setInfo}) => {
  const [health, setHealth] = useState(100);
  const [color, setColor] = useState('success');
  const [temp, setTemp] = useState(0);
  const [input, setInput] = useState(0);
  const [shield, setShield] = useState(0);

  useEffect(() => {
    setTemp(Math.ceil(((info.tempHP * 100) / info.maxHP)));
    setHealth(Math.ceil(((info.currentHP * 100) / info.maxHP)));
  },[info]);

  useEffect(() => {
    if(health > 33) {setColor('warning')}
    if(health > 66) {setColor('success')}
    if(health < 33) {setColor('error')}
  },[health]);

  const damage = () => {
    if(shield > 0) {
      info.tempHP = Math.max(0, (info.tempHP - Number(shield)));
    }else if(health > 0) {
      let hurt = Number(input) || 1;
      let extra = info.tempHP - hurt;
      info.tempHP = Math.max(0, extra);
      if (extra < 0) {
        info.currentHP = Math.max(0, (info.currentHP + extra));
      }
    }
    setInfo({...info});
    setInput(0);
    setShield(0);
  }

  const heal = () => {
    if(shield > 0) {
      info.tempHP = info.tempHP + Number(shield);
    }else if(info.currentHP < info.maxHP) {
      const healing = Number(input) || 1;
      info.currentHP = Math.min(info.maxHP, (info.currentHP + healing));
    }
    setInfo({...info});
    setInput(0);
    setShield(0);
  }

  return (
    <Container style={{ padding: 0 }}>
      <Row>{info.name}</Row>
      <Row>{info.race} {info.background}</Row>
      <Row>
        <Image roundedCircle={true} style={imgStyle} src={info.image}/>
        <CircularProgress
          sx={circleStyle}
          thickness={3}
          color={color}
          size={100}
          variant="determinate"
          value={health}
        />
        <CircularProgress
          sx={circleStyle}
          thickness={3}
          size={100}
          variant="determinate"
          value={temp}
        />
      </Row>
      <Row>
        Amount:
        <Input
          sx={inputStyle}
          inputProps={inProp}
          value={input}
          onChange={e => {setShield(0); setInput(e.target.value)}}
        />
      </Row>
      <Row sm="auto" >
        <Col style={{ padding: 0 }}>
          <IconButton
            aria-label="damage"
            color="error"
            size="small"
            style={{ padding: 0 }}
            onClick={() => damage()}
          >
            <RemoveCircleIcon />
          </IconButton>
        </Col>
        <Col style={{ padding: 0 }}>
          {info.currentHP} / {info.maxHP} ({info.tempHP})
        </Col>
        <Col style={{ padding: 0 }}>
          <IconButton
            aria-label="heal"
            color="success"
            size="small"
            style={{ padding: 0 }}
            onClick={() => heal()}
          >
            <AddCircleIcon />
          </IconButton>
        </Col>
      </Row>
      <Row>
        Temp:
        <Input
          sx={inputStyle}
          inputProps={inProp}
          value={shield}
          onChange={e => {setInput(0); setShield(e.target.value)}}
        />
      </Row>
    </Container>
  );

}

export default Profile;
