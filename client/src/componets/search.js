import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const Search = ({change, text}) => {
  const [value, setValue] = useState('');
  useEffect(() => {
    change(value);
  }, [value])
  return (
    <Container>
        <Form.Control
          size="lg"
          type="text"
          placeholder= {text}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Container>
  )
}

export default Search;