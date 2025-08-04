import { getCityForecastFailed, getCityForecastSuccess } from "../../../store/weatherForecast/weatherForecast.slice";
import { weatherForecastSelector } from "../../../store/weatherForecast/weatherForecast.selector";
import { cityGeoSelector } from "../../../store/cityGeoposition/cityGeoposition.selector";
import { getCityForecast } from "../../../api";
import { classicCityName } from "../MainContent";
import { Failed } from "../../Failed";
import { Map } from "../../Map";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import styles from "./MapContent.module.scss";


export function MapContent() {
    const dispatch = useDispatch();
    const cityGeolocationSelector = useSelector(cityGeoSelector);
    const cityForecastSelector = useSelector(weatherForecastSelector).cityForecast;
    const apiError = useSelector(weatherForecastSelector).errorResponse;
    const storedCityName = localStorage.getItem("city");

    function returnObjectOfGeoDetails() {
        if(cityGeolocationSelector) {
            return cityGeolocationSelector;
        } else {
            return {
                lon: cityForecastSelector?.location.lon,
                lat: cityForecastSelector?.location.lat,
                cityName: cityForecastSelector?.location.name,
            } 
        }
    }

    let cityName: string | null | undefined = null;
    async function checkIfGeoDataAvailable() {
        if (!cityForecastSelector && !cityGeolocationSelector) {
            const data = await getCityForecast(storedCityName ? storedCityName : classicCityName);
            if(axios.isAxiosError(data)) {
                dispatch(getCityForecastFailed(data));
            } else {
                dispatch(getCityForecastSuccess(data));
                localStorage.setItem("city", String(data?.location.name));
            }
        } else if(!cityForecastSelector) {
            cityName = cityGeolocationSelector?.cityName;
        } else if (!cityGeolocationSelector){
            cityName = cityForecastSelector?.location.name;
        } else {
            cityName = cityGeolocationSelector?.cityName;
        }
    }

    useEffect(() => {
        checkIfGeoDataAvailable();
    }, [])

    if(!cityForecastSelector || axios.isAxiosError(apiError)) {
        return(
            <>
            <section className={styles.root}>
                <Failed type="main"/>
            </section>
            </>
        )
    } else if (cityForecastSelector ) {
        checkIfGeoDataAvailable();
    } 

    return(
        <>
        <section className={styles.root}>
            <section className={styles.upperWrapper}>
                <section className={styles.cityNameWrapper}>
                    {cityName}
                </section>
            </section>
            <section className={styles.lowerWrapper}>
                <section className={styles.mapWrapper}>
                    <Map cityGeo={returnObjectOfGeoDetails()}/>
                </section>
            </section>
        </section>
        </>
    )
}
