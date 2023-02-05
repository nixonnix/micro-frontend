import React, { useMemo, useEffect } from "react";
import quickLinksCss from "./QuickLinks.lazy.css";
import { Typography, Box,makeStyles } from "@material-ui/core";

const config = [
  {
    name: "Recent Orders",
    context: "RecentOrdersWidget",
    as: "interstitial",
    el: "",
  },
  {
    name: "How's Today?",
    context: "TodayWidget",
    as: "interstitial",
    el: "",
  },
];


const useStyles = makeStyles((theme) => ({
  root: {
    cursor: 'pointer',
    padding: '0.25rem 0.25rem',
  },
}));

const QuickLinks = (props) => {
  const classes = useStyles();
  const bc = useMemo(() => {
    return new BroadcastChannel("load_components");
  }, []);
  const onOptionClick = (item) => {
    bc.postMessage(item);
  };

  useEffect(() => {
    quickLinksCss.use();
    return () => quickLinksCss.unuse();
  }, []);
  return (
    <Box>
      {config.map((item) => (
        <Typography
          key={item.name}
          sx={{ p: 2 }}
          onClick={() => onOptionClick(item)}
          className={classes.root} 
        >
          {item.name}
        </Typography>
      ))}
    </Box>
  );
};

export default QuickLinks;
