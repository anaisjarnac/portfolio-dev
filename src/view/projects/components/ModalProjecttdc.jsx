import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    fontFamily: "'Rubik Mono One', sans-serif",
    marginLeft: theme.spacing(2),
    flex: 1,
    fontSize: "15px",
    color: "white",
    "@media (max-width: 768px)":{
      fontSize: "10px"
    }
  },
  alriq: {
    width: "80%",
    textAlign: "center",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "5%",
  },
  video: {
    width: "50%",
    textAlign: "center",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
  },
  button: {
    marginLeft: "90px",
    marginTop: "20px",
    width: "40%",
    fontFamily: "'Source Code Pro', monospace",
    fontSize: "15px",
    color: "white",
    borderColor: "white",
    backgroundColor: "#db9064",
    "&:hover": {
      backgroundColor: "#EA9FA5",
      color: "white",
      border: "none",
    },
  },
  hr: {
    width: "15%",
    height: "2px",
    backgroundColor: "#9EC9BC",
    border: "none",
  },
  toolbar: {
    backgroundColor: "#db9064",
  },
  text: {
    fontFamily: "poppins, sans-serif",
    fontSize: "20px",
    color: "#566B5B",
    textAlign: "center",
    margin: "10px",
  },
  techno: {
    fontFamily: "poppins, sans-serif",
    fontSize: "20px",
    color: "#566B5B",
    textAlign: "center",
  },

  projetname: {
    fontFamily: "'Source Code Pro', monospace",
    fontSize: "35px",
    textAlign: "center",
    textShadow: "2px 3px #9EC9BC",
    "@media (max-width: 768px)":{
      fontSize: "25px"
    }
  },
  date: {
    color: "#1A8889",
    fontFamily: "'Source Code Pro', monospace",
    textAlign: "center",
    marginBottom: "20px",
    "@media (max-width: 768px)":{
      fontSize: "10px"
    }
  },
  date2: {
    color: "#1A8889",
    fontFamily: "'Source Code Pro', monospace",
    textAlign: "justify",
    marginTop: "5%",
    marginBottom: "5%",
    marginLeft: "25%",
    marginRight: "25%",
    fontSize: "15px",
    "@media (max-width: 768px)":{
      fontSize: "10px"
    }
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "30px"
  },
  fond: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "url(./assets/projet-9.png)",
    backgroundSize: "cover",
    // backgroundRepeat: "no-repeat"

    // backgroundColor: "black",
  },
    grid: {
    marginTop: "50px",
  //   display: "grid",
  //   gridTemplateColumns: "300px 300px 300px",
  //   gridTemplateRows: "400px 400px",
  //   gridGap: "60px",
  //   justifyContent: "center",
  maxWidth: "1000px",
  width: "80%",
  height: "auto",
  margin: "30px auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, 300px)",
  justifyContent: "center",
  gridGap: "40px",
  marginBottom: "80px" 
  },
img: {
    width: "80%",
  },
  js: {
    "@media (max-width: 768px)":{
      width: "30px"
    },
  },

}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalProjectVCT({ devPro }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={handleClickOpen}
      >
        Voir Plus
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {/* {unicproject.title} */}
              <h1>LE PROJET : </h1>
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.fond}>
          <h1 className={classes.projetname}>Le Temps des Cerises</h1>
          <hr className={classes.hr}></hr>
          <p className={classes.date}>
            Crée en <strong>2021</strong> - Design
          </p>
          <hr className={classes.hr}></hr>
          <div>
          <div className={classes.logo}>
          <img src="./assets/adobe.png" alt="logo" width="50" height="100%" style={{marginRight: "10px"}} className={classes.js} />
          </div>
          <img src="./assets/pack.jpg" alt="" className={classes.alriq} />
          </div>

          <p className={classes.date2}>
          Création de packaging pour une marque de café Française et Biologique.
          </p>
          <div className={classes.grid}>
          <img src="./assets/cafe.jpg" alt="" className={classes.img} />
          <img src="./assets/cafe1.jpg" alt="" className={classes.img} />
          <img src="./assets/cafe2.jpg" alt="" className={classes.img} />
          <img src="./assets/cafe3.jpg" alt="" className={classes.img} />
          <img src="./assets/cafe4.jpg" alt="" className={classes.img} />
          <img src="./assets/cafe5.jpg" alt="" className={classes.img} />
          </div>
        </div>
      </Dialog>
    </div>
  );
}
