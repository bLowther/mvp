import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const Search = props => {
  const [value, setValue] = useState('');
  useEffect(() => {
    props.change(value);
  })
  return (
    <Container>
        <Form.Control
          size="lg"
          type="text"
          placeholder= {props.text}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Container>
  )
}

export default Search;