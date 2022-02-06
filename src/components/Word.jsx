import React from "react";
import { Box } from "@material-ui/core";
import { Button } from "@mui/material";

export default function Word(props) {
  let letters = [];
  for (let i = 0; i < 5; i++) {
    let tmp = [props.words[props.index].value.charAt(i)]
    if (props.words[props.index].color[i] == 0) {
      tmp.push("gray")
    } else if (props.words[props.index].color[i] == 1) {
      tmp.push("yellow")
    } else {
      tmp.push("green")
    }
    letters.push(tmp)
  }
  const boxes = letters.map((letter) =>
      <Box bgcolor={letter[1]} width={100} height={100} m={1} clone>
        <Button style={{ fontSize: "63px", color: "white" }}>
          {letter[0]}
        </Button>
      </Box>
  );
  return <div>{boxes}</div>;
}
