import { useEffect } from "react"
import { getCityForecast } from "../../../api"
import { MainWeatherBlock } from "../../MainPageComponents/MainWeatherBlock";
import { CityNameBlock } from "../../MainPageComponents/CityNameBlock";
import { FutureForecastBlock } from "../../MainPageComponents/FutureForecastBlock";
import { DayWeatherDetails } from "../../MainPageComponents/DayWeatherDetails";
import { MapButtonBlock } from "../../MainPageComponents/MapButtonBlock";
import { Loading } from "../../Loading";
import styles from "./MainContent.module.scss"
import { useSelector } from "react-redux";
import { weatherForecastSelector } from "../../../store/weatherForecast/weatherForecast.selector";
import { useDispatch } from "react-redux";
import { getCityForecastFailed, getCityForecastSuccess } from "../../../store/weatherForecast/weatherForecast.slice";
import { cityNameSelector } from "../../../store/cityName/cityName.selector";
import axios from "axios";
import { Failed } from "../../Failed";

export const classicCityName = "London";

export function MainContent() {
    const dispatch = useDispatch();
    const weatherForecast = useSelector(weatherForecastSelector).cityForecast;
    const apiError = useSelector(weatherForecastSelector).errorResponse;
    const cityName = useSelector(cityNameSelector);
    const storedCityName = localStorage.getItem("city");


    function returnCorrectCityName() {
        if(cityName) {
            return cityName;
        } else if (storedCityName){
            return storedCityName;
        } else {
            return classicCityName;
        }
    }

    useEffect(() => {
        async function getWeatherForecast() {
            const data = await getCityForecast(returnCorrectCityName()!);
            if(axios.isAxiosError(data)) {
                dispatch(getCityForecastFailed(data));
            } else {
                dispatch(getCityForecastSuccess(data));
                localStorage.setItem("city", String(data?.location.name));
            }
        }

        getWeatherForecast();
    }, [])

    if(axios.isAxiosError(apiError)){
        return(
            <>
            <section className={styles.root}>
                <Failed type="main"/>
            </section>
            </>
        )
    }

    if (!weatherForecast) {
        return(
            <>
            <section className={styles.root}>
                <Loading/>
            </section>
            </>
        )
    }

    return(
        <>
        <section className={styles.root}>
            <section className={styles.leftContainer}>
                <section className={styles.leftDetailWrapper}>
                    <CityNameBlock/>
                </section>
                <section className={styles.leftDetailWrapper}>
                    <FutureForecastBlock/>
                </section>
                <section className={styles.leftDetailWrapper}>
                    <DayWeatherDetails/>
                </section>
                <section className={styles.leftDetailWrapper}>
                    <MapButtonBlock/>
                </section>
            </section>
            <section className={styles.rightContainer}>
                <section className={styles.rightDetailWrapper}>
                    <MainWeatherBlock/>
                </section>
            </section>
        </section>
        </>
    )
}