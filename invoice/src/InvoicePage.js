import React, { useEffect } from "react";
// @material-ui/core components
import InputLabel from "@material-ui/core/InputLabel";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";

// core components
import GridItem from "./components/Grid/GridItem.js";
import GridContainer from "./components/Grid/GridContainer.js";
import CustomInput from "./components/CustomInput/CustomInput.js";
import Button from "./components/CustomButtons/Button.js";
import Card from "./components/Card/Card.js";
import CardHeader from "./components/Card/CardHeader.js";
import CardBody from "./components/Card/CardBody.js";
import CardFooter from "./components/Card/CardFooter.js";

import ComponentError from "../../shell/src/ErrorBoundary/ComponentError.js";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  avatarPic: {
    marginTop: "-10px",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
}));

export default function UserProfile() {
  const classes = useStyles();

  const bc = React.useMemo(() => {
    return new BroadcastChannel("load_components");
  }, []);
  const onCreate = () => {
    bc.postMessage({
      context: "RecommendationWidget",
      as: "inline",
      el: "hangingRoot",
    });
  };
  return (
    <ComponentError message="Unable to load this view">
      <Container maxWidth="lg" className={classes.container}>
        <Grid item xs={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} lg={12}>
              <Card>
                <CardHeader>
                  <Typography
                    component="h1"
                    variant="h6"
                    color="primary"
                    gutterBottom
                  >
                    Create Invoice
                  </Typography>
                  {/* <Typography component="p" variant="subtitle1" color="primary" gutterBottom>
                    Complete your profile
                  </Typography> */}
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Company"
                        id="company-disabled"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        // inputProps={{
                        //   disabled: true,
                        // }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        labelText="Username"
                        id="username"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="First Name"
                        id="first-name"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="Last Name"
                        id="last-name"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="City"
                        id="city"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Country"
                        id="country"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Item"
                        id="product-iten"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Quantity"
                        id="product-quantity"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <InputLabel style={{ color: "#AAAAAA", marginTop: '2rem' }}>
                        Commnets
                      </InputLabel>
                      <CustomInput
                        labelText="Provide comments ...."
                        id="invoice-comments"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 5,
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                </CardBody>

                <CardFooter>
                  <Button onClick={onCreate} color="primary">
                    Create
                  </Button>
                </CardFooter>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <div id="hangingRoot"></div>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
        </Grid>
      </Container>
    </ComponentError>
  );
}
