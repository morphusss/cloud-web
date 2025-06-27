import { Header } from "../components/Header";
import { MainContent } from "../components/PagesContent/MainContent";
import styles from "../styles/pages.module.scss"

export function Home() {

    return(
        <>
        <section className={styles.root}>
            <section className={styles.upperWrapper}>
                <Header/>
            </section>
            <section className={styles.lowerWrapper}>
                <MainContent/>
            </section>
        </section>
        </>
    )
}