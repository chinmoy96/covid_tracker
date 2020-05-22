import React from 'react';
import styles from './App.module.css';
import { Cards } from './components'
import {fetchdata} from './APIs'
class App extends React.Component {
  
  state={
    confirmed:0,
    deaths:0,
    recovered:0
  }

  async componentDidMount()
  {
      const data=await fetchdata();
      console.log(data);
      let confirmed=data.confirmed.value;
      let deaths=data.deaths.value;
      let recovered=data.recovered.value;
      this.setState({confirmed,deaths,recovered})
  }
  
  render() {
    let {confirmed,deaths,recovered}=this.state;
    return (
      <div className={styles.container}>
        <Cards confirmed={confirmed} deaths={deaths} recovered={recovered} />
      </div>
    );
  }

}

export default App;
