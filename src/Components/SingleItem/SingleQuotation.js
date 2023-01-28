import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";

import comp from "./component.module.css";

const SingleQuotation = (props) => {
  const handleResponse = (data) => {};
  return (
    <Paper className={comp.container}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Typography variant="p">Product Information </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="p">{props?.data?.productInfo}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="p" style={{ color: "red" }}>
            Response Pending
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="p">Available Stocks </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="p">{props?.data?.vailableStock}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="p">Phone Number: </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="p">{props?.data?.phoneNumber}</Typography>
        </Grid>
        <Grid item xs={4} className={comp.responseBtn}>
          <button variant="contained" onClick={handleResponse(props?.data)}>
            Response Now
          </button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SingleQuotation;
