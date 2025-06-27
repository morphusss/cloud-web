import { Header } from "../components/Header";
import { CityListContent } from "../components/PagesContent/CityListContent";
import styles from "../styles/pages.module.scss"

export function ListPage() {

    return(
        <>
        <section className={styles.root}>
            <section className={styles.upperWrapper}>
                <Header/>
            </section>
            <section className={styles.lowerWrapper}>
                <CityListContent/>
            </section>
        </section>        
        </>
    )
}