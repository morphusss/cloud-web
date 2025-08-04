import { useState, type ChangeEvent } from "react";
import SearchImg from "@/svg/black/search.svg";
import SearchImgWhite from "@/svg/white/search_white.svg";
import styles from "./SearchBar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSearchValue } from "../../../store/searchCity/searchCity.slice";
import { themeStyleSelector } from "../../../store/themeStyle/themeStyle.selector";

export function SearchBar() {
    const dispatch = useDispatch();
    const [ searchData, setSearchData ] = useState("");
    const isDarkSelector = useSelector(themeStyleSelector);
    const localStorageTheme = localStorage.getItem("isDark");


    function returnCorrectImg(blackLogo: string, whiteLogo: string) {
        if(isDarkSelector === "true" || localStorageTheme === "true") return whiteLogo;
        if(isDarkSelector === "false" || localStorageTheme === "false") return blackLogo;
    }

    function handleInputChange (e: ChangeEvent<HTMLInputElement>) {
        const searchItem = e.target.value;
        setSearchData(searchItem)
        dispatch(getSearchValue(searchItem));
    }

    return(
        <>
        <section className={styles.root}>
            <section className={styles.searchWrapper}>
                <img src={returnCorrectImg(SearchImg, SearchImgWhite)} className={styles.searchImg} />
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