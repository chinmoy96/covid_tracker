import React from 'react';
import { Button, Card, CardActions, CardContent, Typography, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import CountUp from 'react-countup';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: { 
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default (props) => {
    const classes = useStyles();
    let { confirmed, deaths, recovered } = props;
    const bull = <span className={classes.bullet}>•</span>;
    return (<>
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card className={classes.root}>
                        <CardContent>
                            <LocalHospitalIcon color="secondary" fontSize="large"/>
                            <Typography variant="h5" component="h2">
                                Total number of Confirmed cases.
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">

                                <CountUp start={0} end={confirmed} duration={3} separator=',' />
                            </Typography>

                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className={classes.root}>
                        <CardContent>
                        <FavoriteIcon color="secondary" fontSize="large"/>
                            <Typography variant="h5" component="h2">
                                Total number of people recovered.
                    </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                <CountUp start={0} end={recovered} duration={3} separator=',' />

                            </Typography>

                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className={classes.root}>
                        <CardContent>
                        <SentimentDissatisfiedIcon color="secondary" fontSize="large"/>
                            <Typography variant="h5" component="h2">
                                Total number of Deaths.
                    </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                <CountUp start={0} end={deaths} duration={3} separator=',' />

                            </Typography>

                        </CardContent>

                    </Card>
                </Grid>
            </Grid>
        </div>

    </>)
}