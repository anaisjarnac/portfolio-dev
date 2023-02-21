import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import EmailIcon from '@material-ui/icons/Email';
import "./Home.css";


const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: "150px",
    marginTop: "20px",
  },
  home: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  homesweet: {
    backgroundImage: "url('/assets/template-2-2.png')" ,
    width: "100%",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  button: {
    marginTop: "20px", 
    marginBottom: "30px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "9ec9bc",
    "@media (max-width: 768px)":{
      marginTop: "10px", 
    }
  },
  logo: {
    display: "flex",
    justifyContent: "center",
  },
  logo1: {
    margin: "10px",
    color: "#FE8B46",
    marginBottom: "80px",
  },
  logo2: {
    margin: "10px",
    color: "#9BC7BA",
    marginBottom: "80px",

  },
  logo6: {
    margin: "10px",
    color: "#9BC7BA",
    marginBottom: "80px",

  },
  logo3: {
    margin: "10px",
    color: "#E1D05C",
    marginBottom: "80px",

  },
  logo5: {
    margin: "10px",
    color: "#FE8B46",
    marginBottom: "80px",

  },
  logo4: {
    margin: "10px",
    color: "#E1D05C",
    marginBottom: "80px",

  },
  buttons: {
    textDecoration: "none",
    color:"black",
    backgroundColor: "#9ec9bc",
    border: "none",
    borderRadius: "10px",
    fontFamily:"'Source Code Pro', monospace",
    "&:hover": {
      backgroundColor: "#E1D05C",
    },
 
  },
  name: {
    marginTop: "70px",
    color: "black",
    fontFamily:"'Source Code Pro', monospace",
    marginBottom: "-15px",
    fontSize: "20px",
    "@media (max-width: 768px)":{
      fontSize: "10px"
    }
  },
  titlename: {
    fontSize: "60px",
    fontFamily: "'Rubik Mono One', sans-serif",
    marginLeft: "-150px",
    textShadow: "5px 5px #FE8B46",
    display: "flex",
    flexWrap: "wrap",
    "@media (max-width: 768px)":{
      fontSize: "30px"
    }
  },
  def: {
    textAlign: "center",
    marginTop: "-15px",
    color: "black",
    fontFamily:"'Source Code Pro', monospace",
    textShadow: "2px 3px #9EC9BC",
    marginBottom: "-15px",
    "@media (max-width: 768px)":{
      fontSize: "15px"
    }
  },
  stacks: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  js: {
    "@media (max-width: 768px)":{
      width: "35px"
    },
  },
  container: {
    marginTop: "50px",
    marginRight: "150px"
  
  },
  tof: {
    display: "flex",
    marginRight: "-200px"
  },
  matete:{
    marginRight: "-150px",
    marginTop: "80px",
    "@media (max-width: 768px)":{
      display: "none"
    }

  
    // "&:hover": {
    //   opacity: 0.5,
    //   transition: "all 0.3s",
    // },
  },
  
  // txtsurmatete: {
  // position: "absolute",
  // top: "50%",
  // left: "50%",
  // transform: "translate(-50%, -50%)",
  // opacity: 0,
  // fontSize:"15px",
  // color: "white",
  // "&:hover": {
  //   opacity: 1,
  //   zIndex:7
  // },
  // },

  photo2moa: {
    // border: "1px solid",
    // boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
    // "&:hover": {
    //   opacity: 0.5,
 
    // },
  },
}));

function Home(props) {
  const classes = useStyles();
  return (
    <div className={classes.homesweet}>
      <div className={classes.home}>
      <div>
      <h2 className={classes.name}>Salut ! Moi, c'est</h2>
      <h1 className={classes.titlename} id="cat-img-1">Anaïs Jarnac</h1>
        <h2 className={classes.def}>DÉVELOPPEUSE WEB FULLSTACK JUNIOR</h2>
        </div>
        <div className={classes.tof}>
        <div className={classes.container}>
        <div className={classes.stacks}>
          <img src="./assets/js.png" alt="logo" width="50" height="100%" style={{marginRight: "10px"}} id="cat-img-2" className={classes.js}/>
          <img src="./assets/react.png" alt="logo" width="50" height="100%" style={{marginRight: "10px"}} id="cat-img-2"className={classes.js}/>
          <img src="./assets/node.png" alt="logo" width="80"  height="100%" style={{marginRight: "10px"}} id="cat-img-2"className={classes.js}/>
          <img src="./assets/Expressjs.png" alt="logo" width="50" height="100%" style={{marginRight: "10px"}} id="cat-img-2"className={classes.js}/>
          </div>
          <br />
          <div className={classes.stacks}>
          <img src="./assets/image-3.png" alt="logo" width="70" height="100%" style={{marginRight: "10px"}} id="cat-img-2"className={classes.js}/>
          <img src="./assets/next.png" alt="logo" width="60" height="100%" style={{marginRight: "10px"}} id="cat-img-2"className={classes.js}/>
          <img src="./assets/adobe.png" alt="logo" width="50" height="100%" style={{marginRight: "10px"}} id="cat-img-2"className={classes.js}/>
          <img src="./assets/typescript.png" alt="logo" width="50" height="100%" style={{marginRight: "10px"}} id="cat-img-2"className={classes.js}/>
          </div>
          <br />
          <div className={classes.stacks}>
          <img src="./assets/native.png" alt="logo" width="70" height="100%" style={{marginRight: "10px"}}id="cat-img-2"className={classes.js}/>
          <img src="./assets/graphql.png" alt="logo" width="60" height="100%" style={{marginRight: "10px"}}id="cat-img-2"className={classes.js}/>
          <img src="./assets/github.png" alt="logo" width="50" height="100%" style={{marginRight: "10px"}}id="cat-img-2"className={classes.js}/>
          <img src="./assets/scrum.png" alt="logo" width="50" height="100%" style={{marginRight: "10px"}}id="cat-img-2"className={classes.js}/>
      </div>
      </div>
      <div className={classes.matete}>
      <img src="./assets/projet-10.png" alt="logo" width="220" className={classes.photo2moa} id="cat-img-3"/>
      {/* <p className={classes.txtsurmatete}>07.66.32.80.08 <br/> ajarnac@gmail.com</p> */}
      </div>
      </div>
      </div>
      <div className={classes.button}>
        <Link to="/projets" className={classes.buttons}>
          <Button variant="outlined" className={classes.buttons}>
            PORTFOLIO
            <KeyboardArrowRightIcon />
          </Button>
        </Link>
      </div>
      <div className={classes.logo}>
      <a
          href="tel:+33766328008"
          target="_blank"
          rel="noreferrer"
          className={classes.logo4}
        >
        < LocalPhoneIcon />
        </a>
        <a href="mailto:ajarnac@gmail.com"
          target="_blank"
          rel="noreferrer"
          className={classes.logo6}
        >
        <         EmailIcon />
        </a>

        <a
          href="https://github.com/anaisjarnac"
          target="_blank"
          rel="noreferrer"
          className={classes.logo5}
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/anaïs-jarnac-407bba108/"
          target="_blank"
          rel="noreferrer"
          className={classes.logo2}
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/anaïs-jarnac-407bba108/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAABs7BMcBYAAbaMB-XMhFQVVln5pUlerB_1A,1635458537608)/"
          target="_blank"
          rel="noreferrer"
          className={classes.logo3}
        >
          <AccountCircleIcon />
        </a>
      </div>
    </div>
  );
}

export default Home;
