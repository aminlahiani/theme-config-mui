import { Box, Container, Typography } from "@mui/material";

import React from "react";

function Team() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "background.paper",
          height: "50vh",
        }}
      >
        <Container
          sx={{
            alignItems: "center",
            display: "flex",

            justifyContent: "center",
            alignItems: { xs: "baseline", md: "center" },
          }}
          maxWidth="lg"
        >
          <Typography variant="contained" component="h1" gutterBottom>
            Create React App example
          </Typography>
        </Container>
      </Box>
    </div>
  );
}

export default Team;
