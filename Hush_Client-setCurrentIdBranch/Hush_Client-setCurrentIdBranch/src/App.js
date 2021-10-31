import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'; //all components starts with caps.. 

import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

import memories from './images/memories.png';       //import image... 
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import useStyles from './styles';

const App = () => {

    const [currentId, setCurrentId] = useState(null);

    const dispatch = useDispatch();     //initialize the Dispatch...
    const classes = useStyles();

    useEffect(() => {
        dispatch(getPosts());       //call the get posts.. on load.
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center"> Memories </Typography>
                <img className={classes.image} src={memories} alt="memories" height="100" />
            </AppBar>

            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>

                            <Posts setCurrentId={setCurrentId} />

                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <Form currentId={currentId} setCurrentId={setCurrentId} />

                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App
