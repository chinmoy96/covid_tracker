import React, { useState, useEffect } from 'react';
import { Grid ,FormControl ,Select ,MenuItem,InputLabel} from '@material-ui/core';
import { Bar} from 'react-chartjs-2';

export default (props) => {
   
    const {confirmed,deaths,recovered} =props;
    return (<>
        <div>
            <Grid container spacing={3} style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
                <Grid item item xs={12} md={10}>
                
                <Bar
                
                options={{
                    maintainAspectRatio: false ,responsive: true,
                    layout: {
                        padding: {
                            top: 5,
                            left: 15,
                            right: 15,
                            bottom: 15
                        }
                }
            
            }} 
                    data={{
                        labels: ["confirmed","deaths","recovered"],
                        datasets: [{
                            label: 'Cases',
                            
                            fill: false,
                            lineTension: 1,
                            backgroundColor: ['rgba(235, 146, 52,0.8)','rgba(255, 94, 94,1)','rgba(52, 235, 104,0.8)'],
                            
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            data: [confirmed,deaths,recovered]
                        }
                    ]


                    }}
                    options={{
                        title: {
                            display: true,
                            text: 'Cases per day',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
                </Grid>
               

            </Grid>
        </div>

    </>)
}