import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";

import comp from "./component.module.css";

const SingleServiceRequest = (props) => {
  const handleResponse = (data) => {};
  return (
    <Paper className={comp.container}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Typography variant="p">Category: </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="p">{props?.data?.category}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="p" style={{ color: "red" }}>
            Response Pending
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="p">Phone Number: </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="p">{props?.data?.phoneNumber}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="p">Brand: </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="p">{props?.data?.brand}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="p">Product Info.: </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="p">{props?.data?.productInfo}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="p">Message: </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="p">{props?.data?.message}</Typography>
        </Grid>
        <div className={comp.responseBtn}>
          <button variant="contained" onClick={handleResponse(props?.data)}>
            Response Now
          </button>
        </div>
      </Grid>
    </Paper>
  );
};

export default SingleServiceRequest;
