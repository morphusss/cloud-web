import { useDispatch, useSelector } from "react-redux"
import { apiDataSelector } from "../../../store/weatherApiData/apiData.selector";
import { classicCityName } from "../MainContent";
import { Map } from "../../Map";
import styles from "./MapContent.module.scss"
import { cityGeoSelector } from "../../../store/cityGeoposition/cityGeoposition.selector";
import { useEffect } from "react";
import { getCityForecast } from "../../../api";
import { getCityForecastSuccess } from "../../../store/weatherApiData/apiData.slice";
import { Loading } from "../../Loading";


export function MapContent() {
    const dispatch = useDispatch();
    const cityGeolocationSelector = useSelector(cityGeoSelector);
    const cityForecastSelector = useSelector(apiDataSelector);
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
            dispatch(getCityForecastSuccess(data));
            localStorage.setItem("city", String(data?.location.name))
        } else if(!cityForecastSelector) {
            cityName = cityGeolocationSelector?.cityName;
        } else if (!cityGeolocationSelector){
            cityName = cityForecastSelector.location.name;
        } else {
            cityName = cityGeolocationSelector?.cityName;
        }
    }

    console.log(cityGeolocationSelector)

    useEffect(() => {
        checkIfGeoDataAvailable();
    }, [])

    if(!cityForecastSelector) {
        return(
            <>
            <section className={styles.root}>
                <Loading/>
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
