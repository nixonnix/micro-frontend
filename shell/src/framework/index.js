import React from "react";
import { Grid } from "@material-ui/core";
// import { loadComponent } from "./utils/loadComponent";
import RenderComponent from "./RenderComponent";

const LoadPageComponents = (props) => {
  //   const [details, setDetails] = React.useState("");

  const { loadables } = props;

  console.log("--- loadables ---", loadables);

  //   const Component = React.lazy(loadComponent(details));
  return (
    <Grid container spacing={3}>
      {loadables.widgets.map((each) => (
        <RenderComponent
          key={each.id}
          componentId={each.id}
          layout={each.layout}
          height={each.height}
        />
      ))}
    </Grid>
  );
};

export default LoadPageComponents;
