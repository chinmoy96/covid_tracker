import React from 'react';
import styles from './App.module.css';
import { Cards } from './components'
class App extends React.Component {
  
  
  
  
  render() {
    return (
      <div className={styles.container}>
        <Cards />
      </div>
    );
  }

}

export default App;
