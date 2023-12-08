import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        {" "}
        <NavBar onSearch={() => console.log(`onSearch...`)}></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside"></GridItem>
      </Show>
      <GridItem area="main">
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default Layout;
