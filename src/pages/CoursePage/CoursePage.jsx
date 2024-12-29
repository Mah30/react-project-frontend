import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2"; // Novo Grid2
import { Paper, Typography } from "@mui/material";



const CoursePage = () => {
  return (
    <Grid2 container spacing={3}>
      <Grid2 xs={12} sm={6} md={4}>
        <Paper>
          <Typography variant="h6">Curso 1</Typography>
        </Paper>
      </Grid2>
      <Grid2 xs={12} sm={6} md={4}>
        <Paper>
          <Typography variant="h6">Curso 2</Typography>
        </Paper>
      </Grid2>
    </Grid2>
  );
}

export default CoursePage;
