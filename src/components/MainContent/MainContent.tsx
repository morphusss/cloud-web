import { useEffect, useState } from "react"
import "./MainContent.scss"
import { getCityForecast } from "../../api"
import type { CityForecast } from "../../types/types"
import { MainWeatherBlock } from "../MainPageComponents/MainWeatherBlock/MainWeatherBlock";
import { CityNameBlock } from "../MainPageComponents/CityNameBlock/CityNameBlock";
import { ForecastForDayBlock } from "../MainPageComponents/ForecastForDayBlock/ForecastForDayBlock";
import { FutureForecastBlock } from "../MainPageComponents/FutureForecastBlock/FutureForecastBlock";

export function MainContent() {
    const [ apiData, setApiData ] = useState<CityForecast[]>([]);

    useEffect(() => {
        getCityForecast({ apiData: apiData, setApiData: setApiData });

        setApiData([])
    }, [])

    console.log(apiData)
    console.log(typeof apiData)

    return(
        <>
        <section className="main-content-root">
            <section className="main-content-root-left-container">
                <section className="main-content-root-left-container-weather-detail-wrapper">
                        {/* {apiData.map((data) => (
                            <section>{data.location.name}</section>
                            
                            
                        ))} */}
                    
                    <CityNameBlock/>
                </section>
                <section className="main-content-root-left-container-weather-detail-wrapper">
                    <ForecastForDayBlock/>
                </section>
                <section className="main-content-root-left-container-weather-detail-wrapper">
                    <FutureForecastBlock/>
                </section>
            </section>
            <section className="main-content-root-right-container">
                <section className="main-content-root-right-container-weather-detail-wrapper">
                    <MainWeatherBlock/>
                </section>
            </section>
        </section>
        </>
    )
}