import { weatherForecastSelector } from "@store/weatherForecast/weatherForecast.selector"
import type { AirQualityIndex, IndexUV, WindSpeed } from "@src/types/types"
import uv_classification from "@src/json/uv_classification.json"
import wind_speed_classification from "@src/json/wind_speed_classification.json"
import aqi_classification from "@src/json/aqi_classification.json"
import { useSelector } from "react-redux"
import styles from "./DayWeatherDetailsComponent.module.scss"

type Props = {
    type: string
}

const listOfUVIndexes = uv_classification as IndexUV[];
const listOfWindSpeed = wind_speed_classification as WindSpeed[];
const listOfAqi = aqi_classification as AirQualityIndex[];

export function DayWeatherDetailsComponent(props: Props) {
    const preciseWeatherDetails = useSelector(weatherForecastSelector).cityForecast?.current;

    function setPreciseBackgroundColor() {
        function setLevelColor (list: IndexUV[] | WindSpeed[] | AirQualityIndex[], param: number | undefined) {
            let background: string = "#fff";

            if(param) {
                list.map((level) => {
                    if(param >= level.min_level && param <= level.max_level) {
                        background = level.level_color;
                    }
                })
            }
            
            return{
                background,
            }
        }

        switch(props.type) {
            case("uv"):
            return(
                <>
                    <section className={styles.backgroundColor} style={setLevelColor(listOfUVIndexes, preciseWeatherDetails?.uv)}></section>
                </>
            )
            case("wind_speed"): 
            return(
                <>
                    <section className={styles.backgroundColor} style={setLevelColor(listOfWindSpeed, preciseWeatherDetails?.wind_kph)}></section>
                </>
            )
            case("air_quality"):
            return(
                <>
                    <section className={styles.backgroundColor} style={setLevelColor(listOfAqi, preciseWeatherDetails?.air_quality.pm2_5)}></section>
                </>
            )
        }
    }

    function setPreciseStatisticsByType() {
        switch(props.type) {
            case("uv"):
            return(
                <>
                    {preciseWeatherDetails?.uv}
                </>
            )
            case("wind_speed"): 
            return(
                <>
                    {preciseWeatherDetails?.wind_kph}
                </>
            )
            case("air_quality"):
            return(
                <>
                    {preciseWeatherDetails?.air_quality.pm2_5}
                </>
            )
        }
    }

    function returnCorrectTitle() {
        switch(props.type) {
            case("uv"):
            return(
                <>
                    {"UV index:"}
                </>
            )
            case("wind_speed"): 
            return(
                <>
                    {"Wind Speed (km/h):"}
                </>
            )
            case("air_quality"):
            return(
                <>
                    {"Air quality index:"}
                </>
            )
        }
    }

    return(
        <>
        <section className={styles.root}>
            <section className={styles.detailWrapper}>
                <section className={styles.blockTitle}>
                    {returnCorrectTitle()}
                </section>
                <section className={styles.backgroundStatusBar}>
                    {setPreciseBackgroundColor()}
                </section>
                <section className={styles.foregroundNumberValue} style={{color: "black",}}>
                    {setPreciseStatisticsByType()}
                </section>
            </section>
        </section>
        </>
    )
}