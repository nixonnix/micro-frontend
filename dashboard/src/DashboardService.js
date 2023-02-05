import { Container, Grid, makeStyles } from "@material-ui/core";
import React, {lazy, useState, useEffect, useMemo} from "react";
import { useParams, useLocation } from "react-router-dom";

import Widget from "./Widget";
import { loadComponent } from "../../shell/src/framework/utils/loadComponent";
import ComponentError from "../../shell/src/ErrorBoundary/ComponentError";

const RecentOrders = lazy(
  loadComponent({ context: "RecentOrdersWidget", type: "component" })
);
const SalesDeposits = lazy(
  loadComponent({ context: "DepositsWidget", type: "component" })
);
const SalesToday = lazy(
  loadComponent({ context: "TodayWidget", type: "component" })
);

const RecentOrderWidget = () => (
  <Widget height="500px">
    <RecentOrders />
  </Widget>
);

const SalesDepositsWidget = () => (
  <Widget height="240px">
    <SalesDeposits />
  </Widget>
);

const SalesTodayWidget = () => (
  <Widget height="240px">
    <SalesToday />
  </Widget>
);

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
      <ComponentError message='Error loading this view!!'>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            <SalesTodayWidget />
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SalesDepositsWidget />
          </Grid>
          <Grid item xs={12}>
            <RecentOrderWidget />
          </Grid>
          <Grid item xs={12}>
            <div id="dashRoot"></div>
          </Grid>
        </Grid>
      </Container>
      </ComponentError>
    </div>
  );
}
