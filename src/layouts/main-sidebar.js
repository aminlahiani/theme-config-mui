import { useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Button, Drawer, Link, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink, useLocation } from "react-router-dom";

const MainSidebarLink = styled(Link)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  display: "block",
  padding: theme.spacing(1.5),
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const MainSidebar = (props) => {
  const { onClose, open } = props;
  const location = useLocation();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const handlePathChange = () => {
    if (open) {
      onClose?.();
    }
  };

  useEffect(
    handlePathChange,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [location.pathname]
  );
  return (
    <Drawer
      anchor="right"
      onClose={onClose}
      open={!lgUp && open}
      PaperProps={{ sx: { width: 256 } }}
      sx={{
        zIndex: (theme) => theme.zIndex.appBar + 100,
      }}
      variant="temporary"
    >
      <Box sx={{ p: 2 }}>
        <RouterLink to="/dashboard"  style={{ textDecoration: 'none' }}>
          <MainSidebarLink
            color="textSecondary"
            underline="none"
            variant="subtitle2"
          >
            Live Demo
          </MainSidebarLink>
        </RouterLink>
        <RouterLink to="/browse"  style={{ textDecoration: 'none' }}>
          <MainSidebarLink
            color="textSecondary"
            underline="none"
            variant="subtitle2"
          >
            Components
          </MainSidebarLink>
        </RouterLink>
        <RouterLink to="/docs/welcome"  style={{ textDecoration: 'none' }}>
          <MainSidebarLink
            color="textSecondary"
            underline="none"
            variant="subtitle2"
          >
            Documentation
          </MainSidebarLink>
        </RouterLink>

        <Button
          component="a"
          fullWidth
          href="https://material-ui.com/store/items/devias-kit-pro"
          sx={{ mt: 1.5 }}
          target="_blank"
          variant="contained"
        >
          Buy Now
        </Button>
      </Box>
    </Drawer>
  );
};

MainSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
