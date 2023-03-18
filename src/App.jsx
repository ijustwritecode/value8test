import { useState } from 'react';
import './App.css'
import "./Loading.css"

import Details from './components/Details';
import ListDays from './components/ListDays';
import NavBar from './components/NavBar'
import Search from './components/Search';
import { useFetch } from './hook/useFetch';

const API_URL = import.meta.env.VITE_URL;
const API_KEY = import.meta.env.VITE_URL_KEY;


function App() {

  

  const [DadosNome, setDadosName] = useState("Nairobi");
  const [userLocation, setUserLocation] = useState(null);
  const [unit, setUnit] = useState("celsius");

    const LoadingIndicator = () => (
      <div class="three-body">
        <div class="three-body__dot"></div>
        <div class="three-body__dot"></div>
        <div class="three-body__dot"></div>
      </div>
    );

  const apiUrl = userLocation
    ? `${API_URL}/current.json?${API_KEY}&q=${userLocation.latitude},${userLocation.longitude}&lang=en`
    : `${API_URL}/current.json?${API_KEY}&q=${DadosNome}&lang=en`;

  const apiUrlLastDays = userLocation
    ? `${API_URL}/forecast.json?${API_KEY}&q=${userLocation.latitude},${userLocation.longitude}&lang=en&days=5`
    : `${API_URL}/forecast.json?${API_KEY}&q=${DadosNome}&lang=en&days=5`;


  const {data, loading} = useFetch(apiUrl);
  const {data: days} = useFetch(apiUrlLastDays);
  const [showSearch, setShowSearch] = useState(false);

  // Buttons
  
  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleSearchClose = () => {
    setShowSearch(false);
  };

  const handleLocationClick = (locationName) => {
      setDadosName(locationName);

      setShowSearch(false);
  }

  const handleCurrentLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setDadosName(`${latitude},${longitude}`);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };  

  console.log(userLocation);

  return (
    <div className="App">
      {loading && (
        <div className="container-loading">
          <LoadingIndicator />
        </div>
      )}

      {
        !loading && (
          <>
          <div className="PanelLeft">
            <NavBar
              temp={unit}
              userLocationClick={handleCurrentLocationClick} 
              onLocationClick={handleSearchClick} 
              dados={data}/>
            {showSearch && 
            <Search
              onLocationClick={handleLocationClick} 
              onClose={handleSearchClose} />
            }
          </div>

          <div className="daysFollowing container">

            <div className="buttons-temp flex">
              <div className='hamburger'>
                <img
                        src="menu-hamburger-svgrepo-com.svg"
                        loading="lazy"
                        data-w-id="6cd9c47c-60a0-7b39-5ae3-20132817d402"
                        alt=""
                        width={24}
                        height={24}
                        className="image-6"
                />
              </div>
              <div className='button-wrap'>
              <button onClick={() => setUnit("celsius")}>°C</button>
              <button onClick={() => setUnit("fahrenheit")}>°F</button>
              </div>
              
            </div>

            <ListDays temp={unit} dados={days}/>

            <div className="details">

              <h2>Today's Highlights</h2>
              <Details dados={data}/>
            </div>

          </div>
          </>
        )
      }

    </div>
  )
}

export default App
