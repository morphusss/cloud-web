import { useState, type ChangeEvent } from "react"
import SearchImg from "../../../assets/svg/black/search.svg"
import styles from "./SearchBar.module.scss"

export function SearchBar() {
    const [ searchCity, setSearchCity ] = useState("");

    function handleInputChange (e: ChangeEvent<HTMLInputElement>) {
        const searchItem = e.target.value;
        setSearchCity(searchItem);
    }

    return(
        <>
        <section className={styles.root}>
            <section className={styles.searchWrapper}>
                <input type="text"
                id="search-city"
                value={searchCity}
                onChange={handleInputChange}
                placeholder="Enter name of city..." />
                <img src={SearchImg} className="svg" />
            </section>
        </section>
        </>
    )
}