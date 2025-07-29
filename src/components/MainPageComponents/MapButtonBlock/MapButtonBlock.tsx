import { Link } from "react-router-dom"
import styles from "./MapButtonBlock.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { apiDataSelector } from "../../../store/weatherApiData/apiData.selector";
import type { GeoDetails } from "../../../types/types";
import { getCityGeo } from "../../../store/cityGeoposition/cityGeoposition.slice";

export function MapButtonBlock() {
    const dispatch = useDispatch();
    const weatherDetails = useSelector(apiDataSelector)?.location;

    function sendGeoToStore() {
        const details: GeoDetails = {
            lon: weatherDetails?.lon,
            lat: weatherDetails?.lat,
            cityName: weatherDetails?.name,
        }

        dispatch(getCityGeo(details));
    }

    return(
        <>
        <section className={styles.root}>
            <Link to={"/map"} className={styles.linkWrapper} onClick={sendGeoToStore}>
                <section className={styles.mapWrapper}>
                    Map
                </section>
            </Link>
        </section>
        </>
    )
}