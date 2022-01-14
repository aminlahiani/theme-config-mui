import * as React from 'react';
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Toolbar,
} from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';
import { Logo } from './Logo';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@emotion/react";
import { ColorModeContext } from "../context/ColorModeContext";

export const MainNavbar = (props) => {
  const { onOpenSidebar } = props;
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: "background.paper",
        borderBottomColor: "divider",
        borderBottomStyle: "solid",
        borderBottomWidth: 1,
        color: "text.secondary",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 64 }}>
          <RouterLink to="/">
        
              <Logo
                sx={{
                  display: {
                    md: "inline",
                    xs: "none",
                  },
                  height: 40,
                  width: 40,
                }}
              />
           
          </RouterLink>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            color="inherit"
            onClick={onOpenSidebar}
            sx={{
              display: {
                md: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Box
            sx={{
              alignItems: "center",
              display: {
                md: "flex",
                xs: "none",
              },
            }}
          >
            <RouterLink to="/" style={{ textDecoration: 'none' }}>
              <Link color="textSecondary" underline="none" variant="subtitle2">
                Home
              </Link>
            </RouterLink>
            <RouterLink to="team" style={{ textDecoration: 'none' }}>
              <Link color="textSecondary"   sx={{ ml: 2 }} underline="none" variant="subtitle2">
                Team
              </Link>
            </RouterLink>
            <RouterLink to="/browse" style={{ textDecoration: 'none' }}>
              <Link
                color="textSecondary"
                sx={{ ml: 2 }}
                underline="none"
                variant="subtitle2"
              >
                Components
              </Link>
            </RouterLink>
            <RouterLink to="/reservation" style={{ textDecoration: 'none' }}>
              <Link
                color="textSecondary"
                component="a"
                sx={{ ml: 2 }}
                underline="none"
                variant="subtitle2"
              >
                Reservation
              </Link>
            </RouterLink>
            <Button
              component="a"
              href="https://material-ui.com/store/items/devias-kit-pro"
              size="medium"
              sx={{ ml: 2 }}
              target="_blank"
              variant="contained"
            >
              Buy Now
            </Button>
            <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
