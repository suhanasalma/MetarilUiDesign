import logo from "./logo.svg";
import "./App.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/PrivateRoutes/PublicRoutes/router";
import { Box, Container, CssBaseline } from "@mui/material";

function App() {
  return (
    <Container style={{ maxWidth: "1750px" }}>
      <CssBaseline></CssBaseline>
      <RouterProvider router={router}></RouterProvider>
    </Container>
  );
}

export default App;
