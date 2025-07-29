import { useState } from "react"
import styles from "./ListOfCities.module.scss"
import cities from "../../../json/cities.json"
import type { DedicatedCity } from "../../../types/types"

const cityList = cities as DedicatedCity[]

const standartCitiesList = [
    { city: "New York City", id: 122795 },
    { city: "London", id: 50388 },
    { city: "Kyiv", id: 109897 },
    { city: "Auckland", id: 79773 },
    { city: "Tokyo", id: 64500 },
]

export function ListOfCities() {
    const [ list, setList ] = useState<DedicatedCity[]>([])


    return(
        <>
        <section className={styles.root}>
            {standartCitiesList.map((item) => (
                <section>{item.city}</section>
            ))}
        </section>
        </>
    )
}