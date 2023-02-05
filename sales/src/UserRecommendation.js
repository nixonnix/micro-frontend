import React from "react";

const RecommendationWidget = () => {
  const [value, setValue] = React.useState("");
  const bc = React.useMemo(() => {
    return new BroadcastChannel("data_channel");
  }, []);
  bc.onmessage = (event) => {
    console.log("reading message ---- ", event);
    // bc.postMessage({type:'sales:amount', value:'$3,024.00'});
    setValue(event.data?.type === "sales:amount" ? event.data?.value : "");
  };
  return (
    <div>
      <div>This is your personalised recommendation!!!!</div>
      <div>{value}</div>
    </div>
  );
};

export default RecommendationWidget;
