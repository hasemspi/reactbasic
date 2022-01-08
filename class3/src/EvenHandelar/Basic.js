import React, { useState } from "react";
import 
{ 
Button,
Grid,
Paper,
} 
from "@mui/material";

const Basic = () => {


    return (
        <>
      <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
        <Grid item xs={12} sm container>
        <Button variant="contained" >Click me</Button>

        
        </Grid>
    </Paper>
        </>
    )
}
export default Basic;