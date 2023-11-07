
import './App.css';

import Navbar from "./components/Navbar/Navbar"
import Hero from './components/Hero/Hero';
import { useEffect, useState } from 'react';
import { fetchTopAlbum } from './components/Api/api';
import Card from "./components/Card/Card";

function App() {

  const [topAlbumsData, setTopAlbumsData] = useState([]);

  const getTopAlbumsData = async()=>{

    const data =  await fetchTopAlbum();
    console.log(data,"data");
    setTopAlbumsData(data);

  }

  useEffect(()=>{
    getTopAlbumsData();
  },[])
  return (
    <>
   <Navbar/>
   <Hero/>
   <div className='wrapper'>
   {
    topAlbumsData.map((item)=>{
      return (
      <Card data= {item} type={'album'}/>
      )
    })
   }
   </div>
   </>
  );
}

export default App;
