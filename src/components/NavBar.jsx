import style from "./NavBar.module.css"

import {BiCurrentLocation} from "react-icons/bi"
import {MdLocationOn} from "react-icons/md"

// Condições climaticas images
import Clear from "../images/Clear.png";
import LightCloud from "../images/LightCloud.png";
import HeavyCloud from "../images/HeavyCloud.png";
import LightRain from "../images/LightRain.png";
import HeavyRain from "../images/HeavyRain.png";
import Thunderstorm from "../images/Thunderstorm.png";
import Snow from "../images/Snow.png";
import Hail from "../images/Hail.png";
import Sleet from "../images/Sleet.png";

import { useEffect, useState } from "react";
import Search from "./Search";

const NavBar = ({dados, onLocationClick, userLocationClick, temp}) => {

    const [img, setImg] = useState(null);

      useEffect(() => {

        if (dados && dados.current) {
            switch (dados.current.condition.text) {
              case 'Clear Sky':
              case 'Sun':
                setImg(Clear);
                break;
              case 'Partly Cloudy':
                setImg(LightCloud);
                break;
              case 'Overcast':
              case 'Covered Up':
              case 'Fog':
              case 'Mist':
                setImg(HeavyCloud);
                break;
              case 'Light Rain':
              case 'Drizzle':
                setImg(LightRain);
                break;
              case 'Moderate Rain':
                setImg(HeavyRain);
                break;
              case 'Heavy Rain':
                setImg(Thunderstorm);
                break;
              case 'Light Snow':
              case 'Moderate Snow':
                setImg(Snow);
                break;
              case 'Heavy Snow':
              case 'Hail':
                setImg(Hail);
                break;
              case 'Freezing Rain':
              case 'Light Rain':
                setImg(Sleet);
                break;
              default:
                setImg(HeavyCloud);
                break;
            }
          }

      }, [dados]);

  return (
    <div className={style.NavBar}>
    {
        dados && (
            <>
                <div className={style.search}>
                <button onClick={onLocationClick} className={style.search_text}>Find Your City</button>

                <button onClick={userLocationClick} className={style.curso_location}>
                    <BiCurrentLocation/>
                </button>
                <img
                  src="close-square-svgrepo-com.svg"
                  loading="lazy"
                  data-w-id="79993b50-2b34-abd7-5ba5-5f44203bcbc5"
                  alt=""
                  width={24}
                  height={24}
                  className="image-6 close"
                />
                </div>

            <div className={style.img_weather}>
                <img className={style.img_center} src={img} alt={dados.current.condition.text} />
            </div>

                <div className={style.dados}>

                    <h2>
                      {temp === "celsius" ? dados.current.temp_c : dados.current.temp_f}
                      <span>{temp === "celsius" ? "°C" : "°F"}</span>
                    </h2>

                    <div className={style.day}>
                        <p>Today</p>
                    </div>
                    
                    <p>{dados.current.condition.text}</p>

                    <div className={style.location}>
                        <MdLocationOn/>
                        <p>{dados.location.name}</p>
                    </div>

                </div>
            </>
        )
    }
    </div>
  )
}

export default NavBar