// initial commit comment

import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Title from './Title';
import Image from './Image';
import Details from './Details';

const BASE_URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = "uArUx2tPhRo4ezLobrD3YvM1Og1KqLz9peKfrzsw";



function App() {
  //state of API data
  const [apiData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setAPIData(res.data);
      }).catch(err => {
        console.error(err);
      })
  }, [])


  return (
    <div className="App">
      {<h1>Nasa Photo Of The Day</h1>}
      <Title title={apiData}/>
      {<Image image={apiData}/>}
      {<Details details={apiData}/>}
     
      
    </div>
  );
}

export default App;

