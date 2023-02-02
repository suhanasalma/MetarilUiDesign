import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetProductsByCategoryQuery } from '../../../Redux/ProductApi/productsApiSlice';
import FeaturedProduct from '../../Home/FeaturedProduct/FeaturedProduct';
import FeaturedProducts from '../../Home/FeaturedProduct/FeaturedProducts';
import ShopByCategory from '../../Home/ShopByCategory/ShopByCategory';
import SpecialOffer from '../../Home/SpecialOffer/SpecialOffer';


const AllProducts = () => {

 const id =  useParams()
 console.log(id);
   const allProducts = useGetProductsByCategoryQuery(id.id);
   let products = allProducts?.data?.best_products.data;

 const cartItem = useSelector((state) => state.CartItems);
 console.log(cartItem);



   return (
     <Box
       sx={{
         backgroundColor: "",
         display: "grid",
         gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
       }}
     >
       {products?.map((item,i) => (
         <SpecialOffer i={i} key={item.id} item={item} />
       ))}
     </Box>
   );
};

export default AllProducts;