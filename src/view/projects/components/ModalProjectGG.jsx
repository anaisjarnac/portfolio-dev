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
    width: "30%",
    textAlign: "center",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "5%",
  },
  video: {
    textAlign: "center",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
    "@media (max-width: 768px)":{
      width:"434px"
    }
  },
  button: {
    marginLeft: "90px",
    marginTop: "40px",
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
      fontSize: "20px"
    },
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
    marginBottom: "30px",
    marginTop: "30px"
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

  js: {
    "@media (max-width: 768px)":{
      width: "30px"
    },
  },
  react: {
    "@media (max-width: 768px)":{
      width: "30px"
    }
  },
  html: {
    "@media (max-width: 768px)":{
      width: "30px"
    }
  },
  html2: {
    "@media (max-width: 768px)":{
      width: "30px"
    }
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
          <h1 className={classes.projetname}>La Guinguette</h1>
          <hr className={classes.hr}></hr>
          <p className={classes.date}>
            Crée en <strong>2021</strong> - Développement Web
          </p>
          <hr className={classes.hr}></hr>
          <div>
          <div className={classes.logo}>
          <img src="./assets/js.png" alt="logo" width="40" height="100%" style={{marginRight: "10px"}} className={classes.js}/>
          <img src="./assets/html.png" alt="logo" width="40" height="100%" style={{marginRight: "10px"}} className={classes.react}/>
          <img src="./assets/html-2.png" alt="logo" width="40" height="100%" style={{marginRight: "10px"}} className={classes.html}/>
          <img src="./assets/github.png" alt="logo" width="40"  height="100%" style={{marginRight: "10px"}} className={classes.html2}/>
          </div>
          <iframe  className={classes.video} width="869" height="456" src="https://www.youtube.com/embed/3JS-q55xBUY?amp;autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

          <p className={classes.date2}>
          Ce projet est une single page fictive destinée à la <strong>guiguette de Alric</strong>. Ce fut mon tout premier projet d'études, crée en HTML, CSS & JavaScript.
          </p>

          <img src="./assets/logo.png" alt="" className={classes.alriq} />
        </div>
      </Dialog>
    </div>
  );
}
