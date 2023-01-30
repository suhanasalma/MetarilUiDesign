import React from 'react';
import FilterBar from './FilterBar';
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";

const FilterBars = () => {

   const filterColors = [
      {
         name:"Black"
      },
      {
         name:"White"
      },
      {
         name:"Red"
      },
      {
         name:"Blue"
      },
      {
         name:"Gray"
      },
      {
         name:"Green"
      }
   ]
   const filterSizes = [
      {
         name:"Small"
      },
      {
         name:"Medium"
      },
      {
         name:"Large"
      }
     
   ]
   const filterMeterials = [
      {
         name:"Soft Cotton"
      },
      {
         name:"Medium Cotton"
      },
      {
         name:"Fat Cotton"
      }
     
   ]
   const filterPatterns = [
      {
         name:"Solid"
      },
      {
         name:"Printed"
      },
      {
         name:"Checkred"
      },
      {
         name:"Stripe"
      }
     
   ]
   const filterPrices = [
     {
       name: "$ 80.00 - $ 120.00",
     },
     {
       name: "$ 120.00 - $ 180.00",
     },
     {
       name: "$ 180.00 - $ 220.00",
     },
   ];

   const [state, setState] = React.useState( 
   false
   );


   const handleChange = (event) => {
      setState(true)
   //   setState({
   //     ...state,
   //     [event.target.name]: event.target.checked,
   //   });
   };

   const { gilad, jason, antoine } = state;
   return (
     <div>
       {/* {filterColors.map((color, i) => (
         <FilterBar item={color} key={i}></FilterBar>
       ))} */}
       {/* {filterSizes.map((size, i) => (
         <FilterBar item={size} key={i}></FilterBar>
       ))}
       {filterMeterials.map((metarial, i) => (
         <FilterBar item={metarial} key={i}></FilterBar>
       ))}
       {filterPatterns.map((pattern, i) => (
         <FilterBar item={pattern} key={i}></FilterBar>
       ))}
       {filterPrices.map((price, i) => (
         <FilterBar item={price} key={i}></FilterBar>
       ))} */}

       <Box sx={{ display: "flex" }}>
         <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
           <FormLabel component="legend">Assign responsibility</FormLabel>
           <FormGroup>
             {filterColors.map((color, i) => (
               <FilterBar
                 handleChange={handleChange}
                 item={color}
                 key={i}
               ></FilterBar>
             ))}
           </FormGroup>
         </FormControl>
       </Box>
     </div>
   );
};

export default FilterBars;