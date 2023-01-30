import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import logo from "../../../Assests/Logo/logo.png";
const Footer = () => {
   const isMobile = useMediaQuery("(max-width:600px)")
   const collections = [
     { link: "", name: "Men" },
     { link: "", name: "Women" },
     { link: "", name: "Kids" },
  
   ];

   const contacts = [
 
     "Contact - +1 336668682",
     "Email - defiant@gmail.com",
     "Address - Oakland Ave, 206",
   ];
   return (
     <Box sx={{ backgroundColor: "#EBEBEB", p: 4 }}>
       <Box
         sx={{
           display: "flex",
           justifyContent: `${!isMobile && "space-between"}`,
         }}
       >
         <Paper
           sx={{
             backgroundColor: "inherit",
             boxShadow: "none",
           }}
         >
           <Box
             sx={{
               display: "flex",
               alignItems: "center",
               gap: "10px",
               marginBottom: "25px",
             }}
           >
             <img src={logo} alt="" />
             <Typography
               sx={{ fontWeight: "bold", fontSize: "34px" }}
               variant="h6"
             >
               Defiant
             </Typography>
           </Box>
           <Typography
             sx={{ fontWeight: "bold", fontSize: "18px" }}
             variant="p"
           >
             For quiries and help
           </Typography>
           <br />
           {contacts.map((contact,i) => (
             <div key={i}>
               <Typography
                 sx={{ fontWeight: "", fontSize: "16px" }}
                 variant="p"
               >
                 {contact}
               </Typography>
               <br />
             </div>
           ))}
         </Paper>
         {!isMobile && (
           <Paper sx={{ backgroundColor: "inherit", boxShadow: "none" }}>
             <Typography
               sx={{
                 fontWeight: "bold",
                 fontSize: "18px",
               }}
               variant="p"
             >
               Collections
             </Typography>
             <List sx={{ marginTop: "25px" }}>
               {collections.map((item,i) => (
                 <ListItem key={i}>
                   <Typography
                     variant="p"
                     sx={{ fontWeight: "bold", fontSize: "13px" }}
                   >
                     {item.name}
                   </Typography>
                 </ListItem>
               ))}
             </List>
           </Paper>
         )}
         {!isMobile && (
           <Paper sx={{ backgroundColor: "inherit", boxShadow: "none" }}>
             <Typography
               sx={{ fontWeight: "bold", fontSize: "18px" }}
               variant="p"
             >
               Links
             </Typography>
             <List sx={{ marginTop: "25px" }}>
               {collections.map((item,i) => (
                 <ListItem key={i}>
                   <Typography
                     variant="p"
                     sx={{ fontWeight: "bold", fontSize: "13px" }}
                   >
                     {item.name}
                   </Typography>
                 </ListItem>
               ))}
             </List>
           </Paper>
         )}
       </Box>
     </Box>
   );
};

export default Footer;