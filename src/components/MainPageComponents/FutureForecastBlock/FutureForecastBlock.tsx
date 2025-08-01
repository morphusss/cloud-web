import { useState } from "react"
import styles from "./FutureForecastBlock.module.scss"

export function FutureForecastBlock() {
    const [ isForecastForDay, setIsForecastForDay ] = useState(false);

    function returnCorrectTitle() {
        if(isForecastForDay) {
            return "See forecast for the day";
        } else {
            return "See forecast for days";
        }
    }

    return(
        <>
        <section className={styles.root}>  
            <section className={styles.componentsWrapper}>
                <section className={styles.buttonWrapper}>
                    <button className={styles.button} onClick={() => setIsForecastForDay((prev) => !prev)}>{returnCorrectTitle()}</button>
                </section>
                <section className={styles.forecastTableWrapper}>

                </section>
            </section>
        </section>
        </>
    )
}