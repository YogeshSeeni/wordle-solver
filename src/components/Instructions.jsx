import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Toolbar from '@mui/material/Toolbar';
import DialogContentText from '@mui/material/DialogContentText';
import TextField from '@mui/material/TextField';


export default function Instructions(props) {

  const handleReset = () => {
    props.setWords([
      { value: "adieu", color: [0, 0, 0, 0, 0], i: 0 },
    ]);
  }

  const handleCloseCustoms = () => {
    if (!customWords || customWords.length === 0) {
      setOpenCustom(false);
    } else {
      let tmpWords = customWords.split(",").map(function(v) {
        return v.toLowerCase();
      });
      tmpWords = tmpWords.filter(element => {return element !== '';});
      tmpWords = tmpWords.map(el => el.trim());
      let words = []
      tmpWords.forEach((word) => {
        words.push({ value: word, color: [0, 0, 0, 0, 0], i: words.length })
      })
      props.setWords(words);
      setOpenCustom(false);
    }
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };
  const [open, setOpen] = React.useState(true);
  const [openCustom, setOpenCustom] = React.useState(false);
  let customWords = "";

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
      setOpen(true);
  }

  const handleCloseCustom = () => {
    setOpenCustom(false);
  };
  
  const handleOpenCustom = () => {
      setOpenCustom(true);
  }


  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Box sx={{ flexGrow: 1 }} >
          <Typography variant="h6" component="div" >
            Wordle Solver
          </Typography>
          </Box>
          <Button color="inherit" onClick={handleOpen}>Show Instructions</Button>
          <Button color="inherit" onClick={handleOpenCustom}>Custom Words</Button>
          <Button color="inherit" onClick={handleReset}>Reset</Button>
        </Toolbar>
      </AppBar>
    </Box>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Instructions
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            This is a solver for the wordle game created by Yogesh Seenichamy. It was made in under 24 hours in order to enter the GunnHacks 8.0 Hackathon.
          </Typography>
          <Typography gutterBottom>
            To use it, first type in oater into you're wordle game. Then match the colors in the game with the solver, by clicking on each of the letters. After that, click the Add button to generate a prediction. Repeat this until you win.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Start
          </Button>
        </DialogActions>
      </BootstrapDialog>
      <Dialog open={openCustom} onClose={handleCloseCustom}>
        <DialogTitle>Custom Words</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To use your own words if you are in the middle of a game or want to use a different starting word, enter the words you would like to use followed by a comma.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Custom Words"
            fullWidth
            variant="standard"
            onChange={(evt) => { customWords = evt.target.value; }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCustom}>Cancel</Button>
          <Button onClick={handleCloseCustoms}>Enter</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
