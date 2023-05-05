import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const ErrorPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            {/* <h1 className="text-[150px]">404</h1> */}
            <Typography className="text-[300px]" variant="h1">
              404
            </Typography>
            <Typography variant="h4">oops! Page not found.</Typography>
            <p>
              Oops! The Page you are looking for does not exist. It might have
              been moved or deleted.
            </p>
            {/* <Typography variant="p">
              Oops! The Page you are looking for does not exist. It might have
              been moved or deleted.
            </Typography> */}
            <Button variant="contained">Back Home</Button>
          </Grid>
          <Grid xs={6}>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt=""
              width={500}
              height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ErrorPage;
