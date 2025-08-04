import { searchCitySelector } from "../../../store/searchCity/searchCity.selector"
import type { DedicatedCity } from "../../../types/types"
import { DedicatedCityBlock } from "../DedicatedCityBlock"
import { Failed } from "../../Failed"
import cities from "../../../json/cities.json"
import { useSelector } from "react-redux"
import styles from "./ListOfCities.module.scss"

const cityList = cities as DedicatedCity[]

const standardCitiesList = [
    { name: "New York City", id: 122795 },
    { name: "London", id: 50388 },
    { name: "Kyiv", id: 109897 },
    { name: "Auckland", id: 79773 },
    { name: "Tokyo", id: 64500 },
]

export function ListOfCities() {
    const selector = useSelector(searchCitySelector);

    let filteredList: DedicatedCity[] = [];
    if(selector) {
        filteredList = cityList.filter((city) => 
            city.name.toLocaleLowerCase().startsWith(selector.toLowerCase()));
    } else {
        filteredList = standardCitiesList;
    }

    if (filteredList.length === 0) {
        return(
            <>
            <section className={styles.root}>
                <Failed type="list"/>
            </section>
            </>
        )
    }

    return(
        <>
        <section className={styles.root}>
            <ul className={styles.cityTable}>
                {filteredList.map((city, key) => (
                    <DedicatedCityBlock data={city} key={key}/>
                ))}
            </ul>
        </section>
        </>
    )
}