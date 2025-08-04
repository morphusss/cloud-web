import { weatherForecastSelector } from "../../../store/weatherForecast/weatherForecast.selector"
import { showCorrectIcon } from "./script"
import { useSelector } from "react-redux"
import styles from "./MainWeatherBlock.module.scss"


export function MainWeatherBlock() {
    const selector = useSelector(weatherForecastSelector)?.cityForecast;


    return(
        <>
        <section className={styles.root}>
            <section className={styles.upperWrapper}>
                <section className={styles.currentTypeOfWeatherImgWrapper}>
                    <img src={showCorrectIcon(selector?.current.condition.text)} className={styles.currentTypeOfWeatherImg}/>
                </section>
            </section>
            <section className={styles.lowerWrapper}>
                <section className={styles.weatherInfo}>
                    {selector?.current.condition.text}
                </section>
                <section className={styles.weatherInfo}>
                    <section className={styles.weatherTemperatureTitle}>Temperature:</section>
                    {selector?.current.temp_c}
                </section>
                <section className={styles.weatherInfo}>
                    <section className={styles.weatherFeelLikeTitle}>Feels like:</section>
                    {selector?.current.feelslike_c}
                </section>
            </section>
        </section>
        </>
    )
}