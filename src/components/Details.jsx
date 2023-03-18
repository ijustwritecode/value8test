import style from "./Details.module.css"

const Details = ({dados}) => {

  return (
    <div className="flex flex-wrap">
        {
            dados && (
                <>
                    <div className={style.details_card}>
                        <h2>UV Index</h2>
                        <p>{dados.current.uv}<span>nm</span></p>
                    </div>

                    <div className={style.details_card}>
                        <h2>Wind Status</h2>
                        <p>{dados.current.wind_kph}<span>kph</span></p>
                    </div>
                    
                    <div className={style.details_card}>
                        <h2>Sunrise & Sunset</h2>
                        <p>{dados.current.sunrise}<span>Sunrise</span></p>
                        <p>{dados.current.sunset}<span>Sunset</span></p>
                    </div>

                    <div className={style.details_card}>
                        <h2>Humidity</h2>
                        <p>{dados.current.humidity}<span>%</span></p>
                    </div>

                    <div className={style.details_card}>
                        <h2>Visibility</h2>
                        <p>{dados.current.vis_km}<span>Km</span></p>
                    </div>

                    <div className={style.details_card}>
                        <h2>Air Quality</h2>
                        <p>{dados.current.pressure_in}<span>in</span></p>
                    </div>

                </>
            )
        }
    </div>
  )
}

export default Details