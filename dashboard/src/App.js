import React, {useEffect, Suspense, useMemo} from "react";
import { makeStyles, CircularProgress, Typography, Container } from "@material-ui/core";

import { Box } from "@material-ui/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Nav from "./nav";

import AppLazyCss from './app.lazy.css';
import ComponentError from "../../shell/src/ErrorBoundary/ComponentError";

const DashboardService = React.lazy(()=>import("./DashboardService"));
const DashboardDetails = React.lazy(()=>import("./DashboardDetails"));

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
  },
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  text: {
    marginTop: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();
  console.log('--- in dashboard: App -------');

  useEffect(()=> {
    AppLazyCss.use();
    return ()=>AppLazyCss.unuse();
  }, []);

  const bc = useMemo(()=>{
    return new BroadcastChannel("data_channel");
  }, []);

  useEffect(()=>{
    bc.postMessage({
      type: 'app:title', value: 'Dashboard'
    });
    return () => bc.close();
  }, []);

  return (
    <BrowserRouter basename="/dashboard">
      <ComponentError message='Error Loading this application!!'>
      <Box display="flex" flex={1} flexDirection="column">
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Nav />
          </Container>
          <Suspense fallback={"Loading"}>
            <Routes>
              <Route path="/" element={<DashboardService />} />
              <Route path="/details" element={<DashboardDetails />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
      </Box>
      </ComponentError>
    </BrowserRouter>
  );
}

export default App;
