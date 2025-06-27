import styles from "./DayWeatherDetails.module.scss"

export function DayWeatherDetails() {

    return(
        <>
        <section className={styles.root}>
            <section className={styles.detailBlock}></section>
            <section className={styles.detailBlock}></section>
            <section className={styles.detailBlock}></section>
        </section>
        </>
    )
}