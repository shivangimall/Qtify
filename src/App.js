
import './App.css';

import Navbar from "./components/Navbar/Navbar"
import Hero from './components/Hero/Hero';
import { useEffect, useState } from 'react';
import { fetchTopAlbum ,fetchNewAlbum, fetchAllSongs} from './components/Api/api';
// import Card from "./components/Card/Card";
import Section from "./components/Section/Section"

function App() {

  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState(0);
  const [songsData , setSongsData] = useState([]);
  const [filteredDataValues, setFiltereddatavalues] = useState([]);

  const handleToggle=()=>{
    setToggle(!toggle)
  }
  // function to handle change
  const handleChange = (event, newValue)=>{
    setValue(newValue);
  }

  const generateSongs=(value)=>{
    let key;
    if(value ===0)
    {
      filteredData(songsData);
    }
    else if(value===1)
    {
      key="rock";
    }
    else{
        key= "pop";
    }

    const res = songsData.filter((item)=>item.genre.key===key);
    filteredData(res);

  }

  const generateAllSongs = async()=>{
    try{
      const res = await fetchAllSongs();
      setSongsData(res);
      setFiltereddatavalues(res);
    }
    catch(e)
    {
      console.log(e);
    }
  }

  useEffect(()=>{
    generateAllSongs();
  },[])

  useEffect(()=>{
    console.log(value,"val");
    generateSongs(value);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[value])

  const filteredData =(val)=>{
    setFiltereddatavalues(val);
  }

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
     <Section data={songsData} type="song" title="Songs" value ={value} filteredData={filteredData} filteredDataValues={filteredDataValues} handleToggle={handleToggle} handleChange={handleChange}/> 
     </div>
      
    </div>

   </>
  )
}

export default App;
