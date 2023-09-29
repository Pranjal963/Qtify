import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import NavBar from './components/NavBar/NavBar';
import { useEffect, useState } from "react";
import { fetchTopAlbums } from "./api/api";
import Card from './components/Card/Card'

function App() {

  const [topAlbumsData, setTopAlbumData] = useState([]);

  const generateTopAlbumData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbumData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    generateTopAlbumData();
   
  }, []);


  return (
    <div className="App">
    <NavBar />
    <HeroSection />
    {topAlbumsData.map((item) => {


return (

<Card key={item.id} data={item} type="album"/>
    )

})}
    </div>
  );
}

export default App;
