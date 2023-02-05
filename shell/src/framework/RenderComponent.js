import React from "react";
import { Grid } from "@material-ui/core";
import { loadComponent } from "./utils/loadComponent";
import Widget from "./Widget";
import ComponentError from "../ErrorBoundary/ComponentError";

const RenderComponent = (props) => {
  //   const [details, setDetails] = React.useState({});

  const { componentId, layout, height } = props;
  console.log('--- layout ---', layout);

  const Component = React.lazy(
    loadComponent({ context: componentId, type: "component" })
  );
  return (
    <Grid item {...layout}>
      <Widget height={height || 'auto'}>
        <ComponentError message='Error fetching this widget!!'>
          <Component />
        </ComponentError>
      </Widget>
    </Grid>
  );
  //   return <div>In render components!!</div>;
};

export default RenderComponent;
