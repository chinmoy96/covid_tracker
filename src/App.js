import React from 'react';
import styles from './App.module.css';
import { Cards,Charts,Country } from './components'
import {fetchdata,fetchcountry} from './APIs'
import { Grid ,FormControl ,Select ,MenuItem,InputLabel,NativeSelect } from '@material-ui/core';
class App extends React.Component {
  
  state={
    country:[],
    selectedCountry:'',
    confirmed:0,
    deaths:0,
    recovered:0
  }

  async componentDidMount()
  {
      const data=await fetchdata();
      const country= await fetchcountry();
    //this.setState({country});
      //console.log(data);
      let confirmed=data.confirmed.value;
      let deaths=data.deaths.value;
      let recovered=data.recovered.value;
      this.setState({confirmed,deaths,recovered,country})
  }

  handleChange= async (e)=>{
    //const country= await fetchcountry();
    //this.setState({country});
    let ndata=await fetchdata(e.target.value);
    let confirmed=ndata.confirmed.value;
    let deaths=ndata.deaths.value;
    let recovered=ndata.recovered.value;
    //this.setState({confirmed,deaths,recovered,country})
    console.log("saa"+deaths)
    this.setState({selectedCountry:e.target.value,confirmed,deaths,recovered})
  }
  
  render() {
    let {confirmed,deaths,recovered,country,selectedCountry}=this.state;
    return (
      <div className={styles.container}>
        <Cards confirmed={confirmed} deaths={deaths} recovered={recovered} />
        <FormControl >
                
                <Select 
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedCountry}  
                  onChange={this.handleChange}
                  style={{width:"230%"}}
                >
                  
                  <MenuItem value="">World</MenuItem>
                  {country.map((item,i)=>{
                    return (<MenuItem value={item} key={i}>{item}</MenuItem>)})}
                </Select>
              </FormControl>
        {selectedCountry.length==0?
          <Charts/>:
          <Country confirmed={confirmed} deaths={deaths} recovered={recovered}/>
        }
            
      </div>
    );
  }

}

export default App;
