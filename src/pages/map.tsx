import { Header } from "../components/Header";
import { MapContent } from "../components/PagesContent/MapContent";
import styles from "../styles/pages.module.scss"

export function Map() {

    return(
        <>
        <section className={styles.root}>
            <section className={styles.upperWrapper}>
                <Header/>
            </section>
            <section className={styles.lowerWrapper}>
                <MapContent/>
            </section>
        </section>
        </>
    )
}