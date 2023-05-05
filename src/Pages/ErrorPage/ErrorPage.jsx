import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="px-6">
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
              <Typography variant="h1">404</Typography>
              <Typography variant="h4">oops! Page not found.</Typography>
              <p className="my-5">
                Oops! The Page you are looking for does not exist. It might have
                been moved or deleted.
              </p>
              <button className="btn btn-primary">
                <Link to="/">Back to Home</Link>
              </button>
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
    </div>
  );
};

export default ErrorPage;
