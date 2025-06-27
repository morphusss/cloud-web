import { useEffect, useState } from "react"
import { getCityForecast } from "../../../api"
import type { CityForecast } from "../../../types/types"
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
// import { changeData } from "../../../store/weatherApiData/apiData.slice";

// const dispatch = useDispatch()

export function MainContent() {
    const [ apiData, setApiData ] = useState<CityForecast | null>(null);

    // function requestDataFromStore() {
    //     const testData = useSelector(apiDataSelector)

    //     return(testData)
    // }
    


    
    useEffect(() => {
        async function getData() {
            const data = await getCityForecast("London");
            data && setApiData(data);
        }

        !apiData && getData()
        // dispatch(changeData(apiData))
    }, [])

    // console.log(apiData)
    // console.log(typeof apiData)
    
    // console.log(requestDataFromStore())

    if (!apiData) {
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