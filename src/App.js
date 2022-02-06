import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { FormGroup } from "@material-ui/core";
import React, { useState } from 'react';
import Word from "./components/Word";
function App() {
  const [words, setWords] = useState([{value: "opera", color: [0,1,0,2,0]}]);

  return (
    <div className="App">
      <Word words={words} index={0} />
      <Button variant="contained"  disableElevation>
      Add
      </Button>
    </div>
  );
}

export default App;
