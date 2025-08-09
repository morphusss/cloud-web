import { weatherForecastSelector } from "@store/weatherForecast/weatherForecast.selector";
import { themeStyleSelector } from "@store/themeStyle/themeStyle.selector";
import { getCityGeo } from "@store/cityGeoposition/cityGeoposition.slice";
import type { GeoDetails } from "@src/types/types";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./MapButtonBlock.module.scss";

export function MapButtonBlock() {
    const dispatch = useDispatch();
    const weatherDetails = useSelector(weatherForecastSelector).cityForecast?.location;
    const isDarkSelector = useSelector(themeStyleSelector);
    const localStorageTheme = localStorage.getItem("isDark");

    function sendGeoToStore() {
        const details: GeoDetails = {
            lon: weatherDetails?.lon,
            lat: weatherDetails?.lat,
            cityName: weatherDetails?.name,
        }

        dispatch(getCityGeo(details));
    }

    function returnCorrectColor(){
        if(isDarkSelector === "true" || localStorageTheme === "true") return "white";
        if(isDarkSelector === "false" || localStorageTheme === "false") return "black";
    }

    return(
        <>
        <section className={styles.root}>
            <Link to={"/map"} className={styles.linkWrapper} onClick={sendGeoToStore} >
                <section className={styles.mapWrapper} style={{color: returnCorrectColor()}}>
                    Map
                </section>
            </Link>
        </section>
        </>
    )
}