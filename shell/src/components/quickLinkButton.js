import React, { useState } from "react";
import { Launch as LaunchIcon } from "@material-ui/icons";
import {
  makeStyles,
  Typography,
  Button,
  Fade,
  Paper,
  Popper,
} from "@material-ui/core";

// const config = [
//   {
//     name: "create",
//   },
//   {
//     name: "test",
//   },
// ];

// const QuickLinkContainer = (props) => {
//   const { anchorEl, open } = props;
//   return (
//     <Popper open={open} anchorEl={anchorEl} placement="right" transition zIndex='1201'>
//       {({ TransitionProps }) => (
//         <Fade {...TransitionProps} timeout={350}>
//           <Paper>
//             {config.map((item) => (
//               <Typography sx={{ p: 2 }}>{item.name}</Typography>
//             ))}
//           </Paper>
//         </Fade>
//       )}
//     </Popper>
//   );
// };

const QuickLinkButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const bc = React.useMemo(()=>{
    return new BroadcastChannel("load_components");
  }, []);

  const buttonClicked = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
    console.log('button clicked!!');
    console.log('-- event.currentTarget --', event.currentTarget);
    bc.postMessage({
      context: 'QuickLinks', as: 'modal', el: 'quickLinkBtn'
    });
  };
  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<LaunchIcon />}
        onClick={buttonClicked}
      ></Button>
      {/* <QuickLinkContainer anchorEl={anchorEl} open={open} /> */}
    </div>
  );
};

export default QuickLinkButton;
