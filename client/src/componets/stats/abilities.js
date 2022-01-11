import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const gridStyle= {
  padding: "2px"
}

const cardStyle = {
  maxWidth: "90px",
  maxHeight: "110px",
  minWidth: "64px",
  minHeight: "81px",
  textAlign: "center",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "center",
}

const abStyle = {
  fontSize: "12px",
  margin: "5%"
}

const scoreStyle = {
  fontSize: "18px",
  marginBottom: "5%"
}

const Abilities = ({abilities, raceAtributes, asi}) => {
  const scores = Object.keys(abilities)
  return (
    <Container>
      <Row>
        {scores.map(score => (
          <Col style={gridStyle} key ={score}>
            <Card style={cardStyle}>
              <Card.Img src="https://i.dlpng.com/static/png/6688721_preview.png" />
              <Card.ImgOverlay>
                <Card.Text style={abStyle}><b>{score.toUpperCase()}</b></Card.Text>
                <Card.Title style={scoreStyle}>{abilities[score]}</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );

}

export default Abilities;