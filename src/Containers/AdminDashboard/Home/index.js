import React from "react";
import { Grid } from "@material-ui/core";

import Complaints from "./complaints/Complaints";
import Quotations from "./quotations/Quotations";
import ServiceRequest from "./ServiceRequests/ServiceRequest";

export default function PersistentDrawerLeft() {

  return (
      <Grid container justifyContent="center" spacing={2}>
        <Grid item md={6} xs={12}>
          <Complaints />
        </Grid>
        <Grid item md={6} xs={6}>
          <Quotations />
          <ServiceRequest />
        </Grid>
      </Grid>
  );
}
