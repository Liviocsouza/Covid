import React from 'react';

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImag from './img/image.png';

class App extends React.Component{
  state = {
    data:{},
    country:"",
  }

  async componentDidMount(){
    const fetchDat = await fetchData();
    this.setState({data:fetchDat});
   // console.log(this.state.data);

  }

  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData, country:country});
    
  }

  render(){
    const { data, country } = this.state;
    
    return(
      <div className={styles.container}>
        <img className={styles.image} src={coronaImag} alt="COVID-19"/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country} />  
      </div>
    )
  }

}

export default App;

