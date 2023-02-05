import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import { useParams, useLocation } from "react-router-dom";

import { routeToComponentMap } from "./configs";
import LoadPageComponents from "../../shell/src/framework";
import ComponentError from "../../shell/src/ErrorBoundary/ComponentError";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default function Dashboard() {
  const param = useParams();
  const loc = useLocation();
  console.log("param ---- ", param);
  console.log("location ---- ", loc);
  const classes = useStyles();
  return (
    <div>
      <ComponentError message="Error loading this view!!">
        <Container maxWidth="lg" className={classes.container}>
          <LoadPageComponents loadables={routeToComponentMap["/details"]} />
        </Container>
      </ComponentError>
    </div>
  );
}
