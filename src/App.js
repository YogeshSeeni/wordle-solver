import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { FormGroup } from "@material-ui/core";
import React, { useState } from 'react';
import Word from "./components/Word";
import raw from "./words.txt";
let allWords = []
fetch(raw)
  .then(r => r.text())
  .then(text => {
    allWords = text.split("\n")
  });
function App() {
  const [words, setWords] = useState([{value: "opera", color: [0,0,0,0,0], i: 0}]);
  
  const wo = words.map((word) => 
  <Word words={words} setWords={setWords} index={word.i} />
  )
  
  function makePrediction() {
    console.log(allWords[2]);
  }
  return (
    <div className="App">
      {wo}
      <Button variant="contained"  onClick={makePrediction} disableElevation>
      Add
      </Button>
    </div>
  );
}

export default App;
