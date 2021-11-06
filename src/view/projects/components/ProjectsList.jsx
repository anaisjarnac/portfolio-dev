import React from "react";
import Card from "./Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: "30px",
    display: "grid",
    gridTemplateColumns: "300px 300px 300px",
    gridTemplateRows: "400px 400px",
    gridGap: "60px",
    justifyContent: "center",
  },
}));

function ProjectsList({ mesProjets }) {
  const classes = useStyles();
  return (
    <div className={classes.grid}>
   <Card />
    </div>
  );
}

export default ProjectsList;
