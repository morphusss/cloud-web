import { getCityForecastFailed, getCityForecastSuccess } from "@store/weatherForecast/weatherForecast.slice";
import { weatherForecastSelector } from "@store/weatherForecast/weatherForecast.selector";
import { FutureForecastBlock } from "@components/MainPageComponents/FutureForecastBlock";
import { DayWeatherDetails } from "@components/MainPageComponents/DayWeatherDetails";
import { MainWeatherBlock } from "@components/MainPageComponents/MainWeatherBlock";
import { cityNameSelector } from "@store/cityName/cityName.selector";
import { MapButtonBlock } from "@components/MainPageComponents/MapButtonBlock";
import { CityNameBlock } from "@components/MainPageComponents/CityNameBlock";
import { Failed } from "@components/Failed";
import { Loading } from "@components/Loading";
import { getCityForecast } from "@src/api";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react"
import axios from "axios";
import styles from "./MainContent.module.scss";

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

    console.log(weatherForecast);

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