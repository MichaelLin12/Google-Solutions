import React from 'react';
import { Button, Checkbox, Container, FormControlLabel, FormGroup, Link } from '@mui/material';
import Code from './Code';
import '../css/App.css';

function App() {
  let checkboxChecked = false;
  const onCheckboxChange = (event) => { checkboxChecked = event.target.checked; };
  const handleClick = () => {
      if (checkboxChecked)
        alert('The checkbox was checked');
      else
        alert('The checkbox wasn\'t checked');
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <h1>
          Hello World
        </h1>
        <p>
          This is an example of using material-ui
          (<Link href="https://mui.com/getting-started/installation/">documentation</Link>)
        </p>
        <p>
          Navigate to <Code>solutions/src/components/App.js</Code> to modify this file
        </p>
        <form name="example-form">
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked={checkboxChecked} onChange={onCheckboxChange} />} label="Check" />
            <Button variant="contained" disableElevation onClick={handleClick}>Submit</Button>
          </FormGroup>
        </form>
      </Container>
    </div>
  );
}

export default App;
