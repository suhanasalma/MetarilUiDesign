import logo from "./logo.svg";
import "./App.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/PrivateRoutes/PublicRoutes/router";
import { Box, CssBaseline } from "@mui/material";

function App() {
  return (
    <Box >
      <CssBaseline></CssBaseline>
      <RouterProvider router={router}></RouterProvider>
    </Box>
  );
}

export default App;
