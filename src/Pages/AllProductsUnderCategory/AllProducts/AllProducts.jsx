import { Box } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductsByCategoryQuery } from '../../../Redux/ProductApi/productsApiSlice';
import CommonProdctCard from '../../SharedPages/CommonProdctCarts/CommonProdctCard';


const AllProducts = () => {

 const id =  useParams()
   const allProducts = useGetProductsByCategoryQuery(id.id);
   let products = allProducts?.data?.best_products.data;

   return (
     <Box
       sx={{
         backgroundColor: "",
         display: "grid",
         gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
         gap:"20px",
         
       }}
     >
       {products?.map((item,i) => (
        
         <CommonProdctCard i={i} key={item.id} item={item} />
       ))}
     </Box>
   );
};

export default AllProducts;