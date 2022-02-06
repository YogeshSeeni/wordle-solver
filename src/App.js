import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { FormGroup } from "@material-ui/core";
import React, { useState } from 'react';
import Word from "./components/Word";
function App() {
  const [words, setWords] = useState([{value: "opera", color: [0,1,0,2,0], i: 0}, {value: "lorem", color: [0,1,0,2,0], i: 1}, {value: "quicky", color: [0,1,0,2,0], i: 2}]);
  const wo = words.map((word) => 
  <Word words={words} setWords={setWords} index={word.i} />
  )

  return (
    <div className="App">
      {wo}
      <Button variant="contained"  disableElevation>
      Add
      </Button>
    </div>
  );
}

export default App;
