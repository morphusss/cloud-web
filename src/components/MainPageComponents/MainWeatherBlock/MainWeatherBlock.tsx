import styles from "./MainWeatherBlock.module.scss"

export function MainWeatherBlock() {

    return(
        <>
        <section className={styles.root}>
            <section className={styles.upperWrapper}>
                <img src='' className={styles.weatherImg} />
            </section>
            <section className={styles.lowerWrapper}>
                <section className={styles.weatherTitle}>
                    
                </section>
                <section className={styles.weatherTemperature}>
                    
                </section>
                <section className={styles.weatherFeelLike}>

                </section>
            </section>
        </section>
        </>
    )
}