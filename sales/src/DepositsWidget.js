import React, {useMemo} from 'react';
import { Box, Button, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function DepositsWidget() {
  const classes = useStyles();
  const bc = useMemo(()=>{
    return new BroadcastChannel("data_channel");
  }, []);
  const onButtonClick = ()=> {
    console.log('button clicked!!');
    bc.postMessage({
      type: 'sales:amount', value: '$1000000000.00'
    });
  }

  const bcd = useMemo(() => {
    return new BroadcastChannel("load_components");
  }, []);
  const onRecButtonClick = () => {
    bcd.postMessage({
      context: "RecommendationWidget",
      as: "inline",
      el: "dashRoot",
    });
  };
  return (
    <Box display="flex" flexDirection="column" flex={1}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Recent Deposits
      </Typography>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Button color="primary" onClick={onButtonClick}>View balance</Button>
      </div>
      <div>
        <Button color="primary" onClick={onRecButtonClick}>Recommend</Button>
      </div>
    </Box>
  );
}
