import React, {useEffect, useMemo} from "react";
import {
  makeStyles,
  CircularProgress,
  Typography,
  Container,
} from "@material-ui/core";
import { Box } from "@material-ui/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Nav from "./nav";
import AppLazyCss from "./app.lazy.css";
import ComponentError from "../../shell/src/ErrorBoundary/ComponentError";

const CreateInvoice = React.lazy(()=>import("./InvoicePage"));
const AllInvoice = React.lazy(()=>import("./AllInvoice"));

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    // paddingBottom: theme.spacing(4),
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
  const bc = useMemo(()=>{
    return new BroadcastChannel("data_channel");
  }, []);

  useEffect(()=>{
    bc.postMessage({
      type: 'app:title', value: 'Invoice'
    });
    return () => bc.close();
  }, []);
  useEffect(() => {
    AppLazyCss.use();
    return () => AppLazyCss.unuse();
  }, []);
  return (
    <BrowserRouter basename="/invoice">
      <ComponentError message='Unable to load this App!!'>
      <Box display="flex" flex={1} flexDirection="column">
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Nav />
          </Container>
          <React.Suspense fallback={"Loading"}>
            <Routes>
              <Route path="/" element={<AllInvoice />} />
              <Route path="/create" element={<CreateInvoice />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </React.Suspense>
        </main>
      </Box>
      </ComponentError>
    </BrowserRouter>
  );
}

function LoadingShell() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress />
      <Typography className={classes.text}>Loading Shell</Typography>
    </div>
  );
}

export default App;
