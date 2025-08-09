import { themeStyleSelector } from "@store/themeStyle/themeStyle.selector";
import { getSearchValue } from "@store/searchCity/searchCity.slice";
import SearchImg from "@svg/black/search.svg";
import SearchImgWhite from "@svg/white/search_white.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, type ChangeEvent } from "react";
import styles from "./SearchBar.module.scss";
import useDebounce from "@src/hooks/useDebounce";

export function SearchBar() {
    const dispatch = useDispatch();
    const [ searchData, setSearchData ] = useState("");
    const isDarkSelector = useSelector(themeStyleSelector);
    const localStorageTheme = localStorage.getItem("isDark");
    const debouncedSearchValue = useDebounce(searchData, 500);

    function returnCorrectImg(blackLogo: string, whiteLogo: string) {
        if(isDarkSelector === "true" || localStorageTheme === "true") return whiteLogo;
        if(isDarkSelector === "false" || localStorageTheme === "false") return blackLogo;
    }

    function handleInputChange (e: ChangeEvent<HTMLInputElement>) {
        const searchItem = e.target.value;
        setSearchData(searchItem);
    }
    
    useEffect(() => {
        console.log(searchData)
        dispatch(getSearchValue(searchData));
    }, [debouncedSearchValue])

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