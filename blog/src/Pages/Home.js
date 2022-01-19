import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Home = () => {
    return (
        <div>
             <Container maxWidth="xl">  {/*main container grid */}
                <Grid container spacing={3}> {/*main container Spacing */}
                    <Grid container item xs={12} sm={12}> {/*main container Grid */}
                        <Grid container spacing={2}> {/*second container Spacing */}
                            <Grid item xs={6} sm={6}>
                                <h1>Hello Home Page</h1>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <h1>Hello Home Page 1</h1>
                            </Grid>
                        </Grid>
                        
                        <Grid container spacing={3}>
                            <Grid item xs={6} sm={4}>
                                <h1>Hello Home Page 4</h1>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <h1>Hello Home Page 4</h1>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <h1>Hello Home Page 4</h1>
                            </Grid>
                        </Grid>
                        
                        <Grid container spacing={3}>
                            <Grid item xs={6} sm={3}>
                                <h1>Hello Home Page 3</h1>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <h1>Hello Home Page 3</h1>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <h1>Hello Home Page 3</h1>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <h1>Hello Home Page 3</h1>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                    
                </Grid>
            </Container>
          
            
        </div>
    );
};

export default Home;