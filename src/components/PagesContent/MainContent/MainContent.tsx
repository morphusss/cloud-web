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
import { apiDataSelector } from "../../../store/weatherApiData/apiData.selector";
import { useDispatch } from "react-redux";
import { getCityForecastSuccess } from "../../../store/weatherApiData/apiData.slice";
import { cityNameSelector } from "../../../store/cityName/cityName.selector";

export const classicCityName = "London";

export function MainContent() {
    const dispatch = useDispatch();
    const weatherForecast = useSelector(apiDataSelector);
    const cityName = useSelector(cityNameSelector);
    const storedCityName = localStorage.getItem("city");

    function returnCorrectCityName() {
        if(storedCityName !== "null") {
            return storedCityName;
        } else if (storedCityName === "null" || null) {
            if(cityName) {
                return cityName;
            } else {
                return classicCityName;
            }
        }
    }

    useEffect(() => {
        async function getWeatherForecast() {
            const data = await getCityForecast(returnCorrectCityName()!);
            dispatch(getCityForecastSuccess(data));
            localStorage.setItem("city", String(cityName));
        }

        getWeatherForecast();
    }, [])

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