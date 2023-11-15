
import './App.css';

import Navbar from "./components/Navbar/Navbar"
import Hero from './components/Hero/Hero';
import { useEffect, useState } from 'react';
import { fetchTopAlbum ,fetchNewAlbum} from './components/Api/api';
// import Card from "./components/Card/Card";
import Section from "./components/Section/Section"

function App() {

  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);

  const getTopAlbumsData = async()=>{

    const data =  await fetchTopAlbum();
    console.log(data,"data");
    setTopAlbumsData(data);

  }

  const getNewAlbumsData =async()=>{
    const data = await fetchNewAlbum();
    setNewAlbumsData(data);
  }

  useEffect(()=>{
    getTopAlbumsData();
  },[])

  useEffect(()=>{
    getNewAlbumsData();
  },[])

  return (
    <>
   <Navbar/>
   <Hero/>
    <div className="wrapSec">
    <div>
    <Section data={topAlbumsData} type="album" title="Top Albums"/>
    </div>
    <div>
    <Section data={newAlbumsData} type="album" title="New Albums"/>
    </div>
     <div>
     <Section data={newAlbumsData} type="album" title="Songs"/> 
     </div>
      
    </div>

   </>
  )
}

export default App;
