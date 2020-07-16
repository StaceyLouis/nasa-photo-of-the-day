import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Header from './components/Header';
import ImageCard from "./components/ImageCard";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState([]);
  const [date] = useState(new Date());
  let todaysDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

     
  

  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=qzjerPoBW6VLh87EEOhC9MyjRxvS3NzhABdb5uh2&date=${todaysDate}`)
    .then(response => {
      console.log(response);
      setData(response.data);
    })
    .catch(error => {
      console.log("errors:", error)
    })
  }, [todaysDate]);

  return (
    <div className="App">
    <Header />
    <ImageCard data={data}/>
    <Footer />
    </div>
  );
}

export default App;
