import React from "react";
import { Container, Grid } from "@material-ui/core";

const Dashboard = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <Grid container>
        <Grid item>
          <h1>Hello.</h1>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
