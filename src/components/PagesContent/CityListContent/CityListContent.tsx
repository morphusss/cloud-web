import { ListOfCities } from "@components/CityListComponents/ListOfCities"
import { SearchBar } from "@components/CityListComponents/SearchBar"
import styles from "./CityListContent.module.scss"

export function CityListContent() {
    
    return(
        <>
        <section className={styles.root}>
            <section className={styles.upperWrapper}>
                <SearchBar/>
            </section>
            <section className={styles.lowerWrapper}>
                <ListOfCities/>
            </section>
        </section>
        </>
    )
}