import style from "./Details.module.css"

const Details = ({dados}) => {

  return (
    <div className="flex flex-wrap">
        {
            dados && (
                <>
                            
                    <div className={style.details_card}>
                        <h2>Wind Speed</h2>
                        <p>{dados.current.wind_kph}<span>kph</span></p>
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
                        <h2>Air Pressure</h2>
                        <p>{dados.current.pressure_in}<span>in</span></p>
                    </div>

                </>
            )
        }
    </div>
  )
}

export default Details