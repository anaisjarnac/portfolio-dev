import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Card from "@material-ui/core/Card";
import ModalProject from "./components/ModalProject";
import ModalProjectVCT from "./components/ModalProjectVCT";
import ModalProjectTOCTOC from "./components/ModalProjectTOCTOC";
import ModalProjectSOS from "./components/ModalProjectSOS";
import ModalProjectGG from "./components/ModalProjectGG";
import ModalProjecttdc from "./components/ModalProjecttdc";
// import Tilt from 'react-parallax-tilt';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    height: 430,
    boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  title: {
    fontFamily: "'Rubik Mono One', sans-serif",
    fontSize: "40px",
    textAlign: "center",
    margin: "10px",
    color: "white",
    marginTop: "40px",
    "@media (max-width: 768px)":{
      fontSize: "30px"
    }
  },
  title2: {
    fontFamily: "'Source Code Pro', monospace",
    fontSize: "25px",
    textAlign: "center",
    margin: "10px",
    color: "#1A8889",
    marginTop: "40px",
  },
  hr: {
    width: "15%",
    height: "1px",
    backgroundColor: "#9EC9BC",
    border: "none",
  },
  hr2: {
    width: "15%",
    height: "3px",
    backgroundColor: "white",
    border: "none",
    marginBottom: "30px",
  },
  cat: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "15px",
    textAlign: "center",
    color: "#9EA074",
    marginTop: "20px",
  },
  cat2: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "10px",
    textAlign: "center",
    color: "#CF7C83",
    marginTop: "20px",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "url(./assets/projet-7.png)",
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

  back: {
    textAlign: "center",
    fontSize: "50px",
    color: "#CF7C83",
    margin: "30px",
    marginBottom: "-40%",
  },
  button: {
    fontSize: "15px",
    fontFamily: "'Source Code Pro', monospace",
    backgroundColor: "#DCB727",
    textDecoration: "none",
    margin: "40px",
    color: "white",
    "&:hover": {
      backgroundColor: "#B79819",
      color: "white",
      
    },
  },
  button2: {
    fontSize: "15px",
    fontFamily: "'Source Code Pro', monospace",
    backgroundColor: "#DCB727",
    textDecoration: "none",
    margin: "40px",
    color: "white",
    "&:hover": {
      backgroundColor: "#B79819",
      color: "white",
    },
  },
  but: {
    color: "white",
  },
  modal: {
    display: "flex",
    justifyContent: "center",
  },
}));

function MyProjets(props) {
  // const [projet] = useState([]);

  // const [showAll, setShowAll] = React.useState(false);

  // function handleShowAll() {
  //   setShowAll(!showAll);
  // }

  const classes = useStyles();
  return (
    <div className={classes.list}>
      <Link to={"/"}>
        <KeyboardBackspaceIcon className={classes.back} />
      </Link>
      <br />
      <h1 className={classes.title}>MES PROJETS</h1>
      <hr className={classes.hr2}></hr>

      {/* <Button onClick={handleShowAll} className={classes.button2}>
        Développement Web {showAll ? "" : "& DESIGN"}
      </Button> */}
      <div className={classes.grid}>
      {/* <Tilt> */}
        <Card className={classes.root}>
          <div>
            <h1 className={classes.title2}>CARGO BIKE TRADE</h1>
            <hr className={classes.hr}></hr>
            <p className={classes.cat}>Développement Web</p>
          </div>
          <p className={classes.cat2}>Market-Place de Vélos Cargo</p>
          <div>
            <img
              src="./assets/velo.png"
              alt="bike"
              className={classes.avatar}
              width="160px"
              style={{ marginLeft: "25%", marginTop: "25px" }}
            />
          </div>
          <ModalProjectVCT className={classes.modal} />
        </Card>
        {/* </Tilt> */}
        {/* <Tilt> */}
        <Card className={classes.root}>
          <div>
            <h1 className={classes.title2}>TOC TOC</h1>
            <hr className={classes.hr}></hr>
            <p className={classes.cat}>Développement Web</p>
          </div>
          <p className={classes.cat2}>
            Market Place entre particuliers & propriétaires
          </p>
          <img
            src="./assets/logotoc.png"
            alt="toc"
            className={classes.avatar}
            width="85px"
            style={{ marginLeft: "35%", marginTop: "25px" }}
          />
          <ModalProjectTOCTOC className={classes.modal} />
        </Card>
        {/* </Tilt> */}
        {/* <Tilt> */}
        <Card className={classes.root}>
          <div>
            <h1 className={classes.title2}>FIVERR MEET</h1>
            <hr className={classes.hr}></hr>
            <p className={classes.cat}>Développement Web</p>
          </div>
          <p className={classes.cat2}>
            Rencontre des freelances de ton quartier
          </p>
          <img
            src="./assets/fiver.png"
            alt="fiver"
            className={classes.avatar}
            width="100px"
            style={{ marginLeft: "35%", marginTop: "45px" }}
          />
          <ModalProject className={classes.modal} />
        </Card>
        {/* </Tilt>  */}
        {/* <Tilt> */}
        <Card className={classes.root}>
          <div>
            <h1 className={classes.title2}>SOS APÉROBOT</h1>
            <hr className={classes.hr}></hr>
            <p className={classes.cat}>Développement Web</p>
          </div>
          <p className={classes.cat2}>Deliveroo on Mars</p>
          <img
            src="./assets/sos.jpeg"
            alt="sos"
            className={classes.avatar}
            width="130px"
            style={{ marginLeft: "28%", marginTop: "30px" }}
          />
          <ModalProjectSOS className={classes.modal} />
        </Card>
        {/* </Tilt> */}
        {/* <Tilt> */}
        <Card className={classes.root}>
          <div>
            <h1 className={classes.title2}>LA GUINGUETTE</h1>
            <hr className={classes.hr}></hr>
            <p className={classes.cat}>Développement Web</p>
          </div>
          <p className={classes.cat2}>Projet sur la guinguette d'alriq</p>
          <img
            src="./assets/logo.png"
            alt="alriq"
            className={classes.avatar}
            width="140px"
            style={{ marginLeft: "28%", marginTop: "40px" }}
          />
          <ModalProjectGG className={classes.modal} />
        </Card>
        {/* </Tilt> */}
        {/* <Tilt> */}
        <Card className={classes.root}>
          <div>
            <h1 className={classes.title2}>LE TEMPS DES CERISES</h1>
            <hr className={classes.hr}></hr>
            <p className={classes.cat}>Design</p>
          </div>
          <p className={classes.cat2}>Packaging marque café local</p>
          <img
            src="./assets/pack.jpg"
            alt="pack"
            className={classes.avatar}
            width="160px"
            style={{ marginLeft: "23%", marginTop: "30px" }}
          />
          <ModalProjecttdc className={classes.modal} />
        </Card>
        {/* </Tilt> */}
        <br />
        <br />
        <br />

        {/* 
        {projet
          .filter(
            (project, index) =>
              !showAll || project.category.includes("Développement Web")
          )
          .map((devPro, index) => (
            <Card {...devPro} key={index} />
          ))}
     */}
      </div>
    </div>
  );
}

export default MyProjets;
