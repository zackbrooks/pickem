import React from "react";
import { Box, Typography, IconButton, Badge } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  SearchOutlined,
  MenuOutlined,
} from "@mui/icons-material";
import { shades } from "../theme";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      //   backgroundColor="rgba(255, 255, 255, 0.95)"
      backgroundColor={shades.primary[500]}
      color="white"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate("/")}
          sx={{ "&hover": { cursor: "pointer" } }}
          color={shades.primary[100]}
        >
          AnyPick'em Logo
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton sx={{ color: "white" }}>
            <PersonOutline />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <MenuOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
