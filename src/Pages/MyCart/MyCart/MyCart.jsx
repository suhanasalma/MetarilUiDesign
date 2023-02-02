import { Paper, Typography } from '@mui/material';
import React from 'react';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Divider from "@mui/material/Divider";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,

} from "@mui/material";
import { Box } from "@mui/system";
const MyCart = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent:"space-between"
      }}
    >
      <FormControlLabel
        control={<Checkbox />}
        // label="Disabled"
      />
      <img src="" alt="Image" />
      <Typography variant="p">Mobile Name</Typography>

      <Box
        sx={{
          padding: "px",
          display: "flex",
          alignItems: "center",
          width: "fit-content",
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          borderColor: "purple",
          height: "44px",
          //   bgcolor: 'background.paper',
          color: "purple",
          "& svg": {
            m: 1.5,
          },
          "& hr": {
            mx: 0.5,
          },
        }}
      >
        <AddIcon sx={{ width: "15px", fontWeight: "bold" }} />
        <Divider
          style={{ background: "purple" }}
          orientation="vertical"
          variant="middle"
          flexItem
        />
        <Typography variant="div" sx={{ width: "20px", textAlign: "center" }}>
          1
        </Typography>
        <Divider
          style={{ background: "purple" }}
          orientation="vertical"
          variant="middle"
          flexItem
        />
        <RemoveIcon sx={{ width: "15px", fontWeight: "bold" }} />
      </Box>
      <Typography variant="p">Mobile Price</Typography>
    </Paper>
  );
};

export default MyCart;
