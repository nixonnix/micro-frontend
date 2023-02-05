import React from "react";
import {
  Box,
  Container,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { orders } from "./data";
import ComponentError from "../../shell/src/ErrorBoundary/ComponentError";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

function Title() {
  const [value, setValue] = React.useState("");
  const bc = React.useMemo(() => {
    return new BroadcastChannel("test_channel");
  }, []);
  bc.onmessage = (event) => {
    console.log("reading message ---- ", event);
    // bc.postMessage({type:'sales:amount', value:'$3,024.00'});
    setValue(event.data?.type === "sales:amount" ? event.data?.value : "");
  };
  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        All Invoices
      </Typography>
      {value && (
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Value: {value}
        </Typography>
      )}
    </>
  );
}

function OrderRow(props) {
  return (
    <TableRow key={props.order.id}>
      <TableCell>
        {props.order.date}
      </TableCell>
      <TableCell>
        {props.order.name}
      </TableCell>
      <TableCell >
        {props.order.shipTo}
      </TableCell>
      <TableCell >
        {props.order.paymentMethod}
      </TableCell>
      <TableCell
        align="right"
      >
        {props.order.amount}
      </TableCell>
    </TableRow>
  );
}

export default function AllInvoice() {
  const classes = useStyles();
  const bc = React.useMemo(()=>{
    return new BroadcastChannel("load_components");
  }, []);
  const onMoreInvoiceClick = () => {
    bc.postMessage({
      context: 'NoData', as: 'drawer'
    });
  }

  return (
    <ComponentError message='Unable to load this view!!'>
    <Container maxWidth="lg" className={classes.container}>
      <Box display="flex" flexDirection="column" flex={1}>
        <Title />
        <Box flex={1}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Payment Method</TableCell>
                <TableCell align="right">Sale Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <OrderRow order={order} key={order.id} />
              ))}
            </TableBody>
          </Table>
        </Box>
        <Box mt={3}>
          <Button color="primary" onClick={onMoreInvoiceClick}>See more Invoices</Button>
        </Box>
      </Box>
    </Container>
    </ComponentError>
  );
}
