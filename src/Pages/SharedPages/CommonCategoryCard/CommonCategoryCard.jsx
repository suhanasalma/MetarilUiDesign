


import React from 'react';

import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

import { Grow,} from "@mui/material";
import useStyle from "./CommonCategoryCardStyles";
import { Link } from 'react-router-dom';

const CommonCategoryCard = ({ category, i }) => {
  const { name, image, id } = category;
  const classes = useStyle();
  let link = `/productsUnderSubCat/${id}`;


  return (
    <Grid

      item
      xs={3}
      sm={3}
      md={3}
      lg={3}
      xl={2}
      justifyContent="center"
      alignItems="center"
      
    >
      <Grow timeout={(i + 1) * 250} in key={i}>
        <Link to={link}>
          <div className={classes.link}>
            
            <img alt={name} className={classes.image} src={image} />
          
            <Typography
              sx={{ fontSize: "10px" ,textDecoration:"none"}}
              className={classes.title}
              variant="p"
            >
              {name}
            </Typography>
          </div>
        </Link>
      </Grow>
    </Grid>
  );
};

export default CommonCategoryCard;