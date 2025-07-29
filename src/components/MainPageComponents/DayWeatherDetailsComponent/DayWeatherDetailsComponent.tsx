import { useSelector } from "react-redux"
import styles from "./DayWeatherDetailsComponent.module.scss"
import { apiDataSelector } from "../../../store/weatherApiData/apiData.selector"
import uv_classification from "../../../json/uv_classification.json"
import wind_speed_classification from "../../../json/wind_speed_classification.json"
import aqi_classification from "../../../json/aqi_classification.json"
import type { AirQualityIndex, IndexUV, WindSpeed } from "../../../types/types"

type Props = {
    type: string
}

const listOfUVIndexes = uv_classification as IndexUV[];
const listOfWindSpeed = wind_speed_classification as WindSpeed[];
const listOfAqi = aqi_classification as AirQualityIndex[];

export function DayWeatherDetailsComponent(props: Props) {
    const preciseWeatherDetails = useSelector(apiDataSelector)?.current;

    function setPreciseBackgroundColor() {
        function setLevelColor (list: IndexUV[] | WindSpeed[] | AirQualityIndex[], param: number | undefined) {
            let color: string = "";

            if(param) {
                list.map((level) => {
                    if(param >= level.min_level && param <= level.max_level) {
                        color = level.level_color;
                    }
                })
            }
            
            return{
                backgroundColor: color,
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

    return(
        <>
        <section className={styles.root}>
            <section className={styles.detailWrapper}>
                <section className={styles.backgroundStatusBar}>
                    {setPreciseBackgroundColor()}
                </section>
                <section className={styles.foregroundNumberValue}>
                    {setPreciseStatisticsByType()}
                </section>
            </section>
        </section>
        </>
    )
}