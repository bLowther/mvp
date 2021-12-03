import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Search from './search.js';

class Inventory extends  React.Component {
  constructor(props) {
    super(props);
    this.state = {
      containers: ['Equipment', 'Backpack']
    };
    this.filter = this.filter.bind(this);
  }

  componentDidMount() {} // only relavent after player info is stored in database

  filter(value) {
    // const { questions } = this.state;
    // const check = value.length;
    // if (check > 2) {
    //   const filteredArr = questions.filter((question) => (
    //     question.question_body.slice(0, check).toUpperCase() === value.toUpperCase()));
    //   this.setState({ rendered: filteredArr });
    // } else {
    //   this.setState({ rendered: questions });
    // }
  }

  render() {
    return (
      <Container>
        <Row><Search change={this.filter} text={"Search Inventory"}/></Row>
      </Container>
    );
  }
}

export default Inventory;
