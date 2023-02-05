import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import ComponentError from '../../shell/src/ErrorBoundary/ComponentError';



const useStyles = makeStyles(theme => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default function DashboardDetails() {
  const classes = useStyles();
  return (
    <ComponentError message='Unable to load this view!!'>
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            One
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            Two
          </Grid>
          <Grid item xs={12}>
            Three
          </Grid>
        </Grid>
      </Container>
    </main>
    </ComponentError>
  );
}
