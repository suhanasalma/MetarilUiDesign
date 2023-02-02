import { Box, Button, IconButton, Paper, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Divider from '@mui/material/Divider';
import useStyles from './ProductDetailsStyles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useParams } from 'react-router-dom';
import { useGetProductsDetailsQuery } from '../../../Redux/ProductApi/productsApiSlice';

const ProductDetails = () => {
  const isSmallMobile = useMediaQuery("(max-width:775px)")
  const classes = useStyles();
  const [buttonSelect, setButtonSelect] = useState();
  const isMobile = useMediaQuery("(max-width:943px)")
  const seo = useParams()
  
  const product = useGetProductsDetailsQuery(seo?.id)?.data?.product;



  // const product = {
  //   name: 'Defiant men t-shirt',
  //   price: '80',
  //   oldPrice: '100',
  //   discount: '10',
  //   details:
  //     'Cupcake ipsum dolor sit amet jelly-o jujubes gummi bears. Dessert chupa chups bear claw sugar plum cheesecake pastry cheesecake danish. Croissant shortbread apple pie toffee candy croissant candy canes gingerbread.',
  //   colors: ["#E15959" ,'#383838', '#909090',"#3664DA"],
  //   metarials: ['soft cotton', 'medium cotton', 'fat cotton'],
  //   sizes: ['small', 'medium', 'Large'],
  // };
  // const { name, price, oldPrice, discount, details, colors, metarials, sizes } =
  //   product;
  return (
    <>
    hello</>
    // <Box sx={{ width: `${isSmallMobile?"100%":"48%"}` }}>
    //   <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }} variant='p'>
    //     {name}
    //   </Typography>
    //   <Paper
    //     sx={{
    //       boxShadow: 'none',
    //       display: 'flex',
    //       gap: '15px',
    //       alignItems: 'center',
    //       backgroundColor:"inherit"
    //     }}
    //   >
    //     <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }} variant='p'>
    //       $ {price}.00
    //     </Typography>
    //     {/* <Typography
    //       sx={{
    //         fontSize: '13px',
    //         fontWeight: '600',
    //         color: 'gray',
    //         textDecoration: 'line-through',
    //       }}
    //       variant='p'
    //     >
    //       $ {oldPrice}.00
    //     </Typography> */}
    //     {/* <Typography
    //       sx={{
    //         background: 'rgba(225, 89, 89, 0.1)',
    //         width: '50px',
    //         padding: '5px',
    //         fontSize: '9px',
    //         color: 'red',
    //       }}
    //       variant='div'
    //     >
    //       {discount}% OFF
    //     </Typography> */}
    //   </Paper>
    //   {/* <Typography sx={{ fontSize: '13px', fontWeight: '400' }} variant='p'>
    //     {details}
    //   </Typography> */}
    //   <hr className={classes.hr} />
    //   <Paper sx={{ backgroundColor:"inherit",boxShadow:"none"}}>
    //     <Typography sx={{ fontSize: '13px', fontWeight: 'bold' }} variant='p'>
    //       COLOR
    //     </Typography>
    //     <Box
    //       sx={{
    //         display: 'flex',
    //         alignItems: 'center',
    //         gap: '12px',
    //         margin: '13px 0 25px 0',
    //       }}
    //     >
    //       {colors?.map((color, i) => (
    //         <Box key={i}
    //           sx={{
    //             backgroundColor:`${color}` ,
    //             width: '30px',
    //             height: '30px',
    //             borderRadius: '5px',
    //           }}
       
    //         ></Box>
    //       ))}
    //     </Box>
    //   </Paper>
    //   <Paper sx={{ backgroundColor:"inherit",boxShadow:"none"}}>
    //     <Typography sx={{ fontSize: '13px', fontWeight: 'bold' }} variant='p'>
    //       METERIAL
    //     </Typography>
    //     <Box sx={{margin:"13px 0", display: 'flex', alignItems: 'center', gap: '12px' }}>
    //       {isMobile?metarials?.slice(0,2).map((metarial, i) => (
    //         <Button key={i}
    //           sx={{
    //             color: 'purple',
    //             fontSize: '13px',
    //             boxShadow: 'none',
    //             borderColor: 'purple',
    //             padding: '10px 15px',
    //           }}
    //           variant='outlined'
    //         >
    //           {metarial}
    //         </Button>
    //       )):metarials?.map((metarial, i) => (
    //         <Button key={i}
    //           sx={{
    //             color: 'purple',
    //             fontSize: '13px',
    //             boxShadow: 'none',
    //             borderColor: 'purple',
    //             padding: '10px 15px',
    //           }}
    //           variant='outlined'
    //         >
    //           {metarial}
    //         </Button>
    //       ))}
    //     </Box>
    //   </Paper>
    //   <Paper sx={{ backgroundColor:"inherit",boxShadow:"none"}}>
    //     <Typography sx={{ fontSize: '13px', fontWeight: 'bold' }} variant='p'>
    //       Sizes
    //     </Typography>
    //     <Box sx={{marginTop:"13px", display: 'flex', alignItems: 'center', gap: '12px' }}>
    //       {sizes?.slice(0,2).map((size, i) => (
    //         <Button key={i}
    //           sx={{
    //             color: 'purple',
    //             fontSize: '13px',
    //             boxShadow: 'none',
    //             borderColor: 'purple',
    //             padding: '10px 15px',
    //           }}
    //           variant='outlined'
    //         >
    //           {size}
    //         </Button>
    //       ))}
    //     </Box>
    //   </Paper>
    //   <hr className={classes.hr} />
    //   <Typography
    //     sx={{ fontSize: '30px', fontWeight: 'bold', }}
    //     variant='p'
    //   >
    //     $ {price}.00
    //   </Typography>
    //   <Box
    //     sx={{
    //       display: 'flex',

    //       gap: '12px',
    //       alignItems: 'center',
    //     }}
    //   >
    //     <Box
    //       sx={{
    //         padding: 'px',
    //         display: 'flex',
    //         alignItems: 'center',
    //         width: 'fit-content',
    //         border: (theme) => `1px solid ${theme.palette.divider}`,
    //         borderRadius: 1,
    //         borderColor: 'purple',
    //         height: '44px',
    //         //   bgcolor: 'background.paper',
    //         color: 'purple',
    //         '& svg': {
    //           m: 1.5,
    //         },
    //         '& hr': {
    //           mx: 0.5,
    //         },
    //       }}
    //     >
    //       <AddIcon sx={{ width: '15px', fontWeight: 'bold' }} />
    //       <Divider
    //         style={{ background: 'purple' }}
    //         orientation='vertical'
    //         variant='middle'
    //         flexItem
    //       />
    //       <Typography variant='div' sx={{ width: '20px', textAlign: 'center' }}>
    //         1
    //       </Typography>
    //       <Divider
    //         style={{ background: 'purple' }}
    //         orientation='vertical'
    //         variant='middle'
    //         flexItem
    //       />
    //       <RemoveIcon sx={{ width: '15px', fontWeight: 'bold' }} />
    //     </Box>
    //     <Paper
    //       sx={{
    //         boxShadow: 'none',
    //         display: 'flex',
    //         alignItems: 'center',
    //         gap: '10px',
    //         backgroundColor: 'purple',
    //         padding: '6px 40px',
    //         color: 'white',
    //       }}
    //     >
    //       <ShoppingCartIcon sx={{ fontSize: '10px' }} />
    //       <Button sx={{ fontSize: '13px', fontWeight: 'bold', color: 'white' }}>
    //         Add To Cart
    //       </Button>
    //     </Paper>
    //     {!isMobile && <IconButton
    //       sx={{
    //         borderRadius: '5px',
    //         border: '1px solid purple',
    //         //   backgroundColor: 'red',
    //         padding: '8px',
    //         width: '40px',
    //         height: '40px',
    //       }}
    //       aria-label='add'
    //     >
    //       <FavoriteBorderIcon
    //         sx={{
    //           //   border: '1px solid purple',
    //           color: 'purple',
    //           //   backgroundColor: 'red',
    //           height: '40px',
    //           width: '40px',
    //           padding: '10px',
    //         }}
    //       />
    //     </IconButton>}
    //   </Box>
    //   <hr className={classes.hr} />
    //   <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
    //     <Typography sx={{fontWeight:"bold",fontSize:"13px"}} variant='p'>Share</Typography>
    //     <Paper sx={{ backgroundColor:"inherit",boxShadow:"none",display:"flex",alignItems:"center",gap:"10px",color:"gray"}}>
    //       <WhatsAppIcon />
    //       <FacebookIcon />
    //       <TwitterIcon />
    //     </Paper>
    //   </Box>
    // </Box>
  );
};

export default ProductDetails;
