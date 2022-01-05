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
  textAlign: "center",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "center",
}

const abStyle = {
  fontSize: "1.4vw",
  margin: "5%"
}

const scoreStyle = {
  fontSize: "1.8vw",
  marginBottom: "5%"
}

const Abilities = ({abilities, asi}) => {
  const scores = Object.keys(abilities)
  return (
    <Container>
      <Row>
        {scores.map(score => (
          <Col style={gridStyle} key ={score}>
            <Card style={cardStyle}>
              <Card.Img src="https://i.dlpng.com/static/png/6688721_preview.png" alt={`${score}`} />
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