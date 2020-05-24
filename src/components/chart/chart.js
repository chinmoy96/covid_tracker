import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core'
import { fetchDailyData } from './../../APIs'
import { Bar} from 'react-chartjs-2';

export default (props) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());

        }
        //
        fetchAPI();

    },[])
    return (<>
        <div>
            <Grid container spacing={3} style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
                <Grid item xs={12} md={10} >
                
                
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
                        labels: dailyData.map((item,id) =>{
                            if(id%4==0)
                            return item.date;
                            else
                            return "";

                        } ),
                        datasets: [{
                            label: 'Cases',
                            
                            fill: false,
                            lineTension: 1,
                            backgroundColor: 'rgba(75,192,192,0.8)',
                            
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            data: dailyData.map((item) => (item.confirmed))
                        },
                        {
                            label: 'Deaths',
                            fill: false,
                            lineTension: 0.5,
                            backgroundColor: 'rgba(250,192,192,1)',
                            borderCapStyle: 'butt',
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            data: dailyData.map((item) => (item.deaths))
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