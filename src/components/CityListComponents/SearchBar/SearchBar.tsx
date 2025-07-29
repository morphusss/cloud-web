import { useState, type ChangeEvent } from "react"
import SearchImg from "../../../assets/svg/black/search.svg"
import styles from "./SearchBar.module.scss"
import { useDispatch } from "react-redux";
import { getSearchValue } from "../../../store/searchCity/searchCity.slice";

export function SearchBar() {
    const dispatch = useDispatch();
    const [ searchData, setSearchData ] = useState("");

    function handleInputChange (e: ChangeEvent<HTMLInputElement>) {
        const searchItem = e.target.value;
        setSearchData(searchItem)
        dispatch(getSearchValue(searchItem));
    }

    return(
        <>
        <section className={styles.root}>
            <section className={styles.searchWrapper}>
                <img src={SearchImg} className={styles.searchImg} />
                <input type="text"
                id="search-city"
                className={styles.searchField}
                value={searchData}
                onChange={handleInputChange}
                placeholder="Enter name of city..." />
            </section>
        </section>
        </>
    )
}