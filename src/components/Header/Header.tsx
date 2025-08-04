import CloudLogo from "@/svg/black/cloud.svg"
import CloudLogoWhite from "@/svg/white/cloud_white.svg"
import HomeLogo from "@/svg/black/home.svg"
import HomeLogoWhite from "@/svg/white/home_white.svg"
import SearchLogo from "@/svg/black/search.svg"
import SearchLogoWhite from "@/svg/white/search_white.svg"
import MapsLogo from "@/svg/black/map.svg"
import MapsLogoWhite from "@/svg/white/map_white.svg"
import { Link } from "react-router-dom"
import styles from  "./Header.module.scss"
import { ThemeSwitcher } from "../ThemeSwitcher"
import { useSelector } from "react-redux"
import { themeStyleSelector } from "../../store/themeStyle/themeStyle.selector"

export function Header() {
    const isDarkSelector = useSelector(themeStyleSelector);
    const localStorageTheme = localStorage.getItem("isDark");

    function returnCorrectImg(blackLogo: string, whiteLogo: string) {
        if(isDarkSelector === "true" || localStorageTheme === "true") return whiteLogo;
        if(isDarkSelector === "false" || localStorageTheme === "false") return blackLogo;
    }

    return(
        <>
        <section className={styles.root}>
            <section className={styles.contentWrapper}>
                <section className={styles.logoWrapper}>
                    <img src={returnCorrectImg(CloudLogo, CloudLogoWhite)} />
                </section>
            </section>
            <section className={styles.contentWrapper}>
                <section className={styles.imgWrapper}>
                    <Link to="/"><img src={returnCorrectImg(HomeLogo, HomeLogoWhite)} className="svg" /></Link>
                    <Link to="/cityList"><img src={returnCorrectImg(SearchLogo, SearchLogoWhite)} className="svg" /></Link>
                    <Link to="/map"><img src={returnCorrectImg(MapsLogo, MapsLogoWhite)} className="svg" /></Link>
                </section>
            </section>
            <section className={styles.contentWrapper}>
                <section className={styles.switcherWrapper}>
                    <ThemeSwitcher/>
                </section>
            </section>
        </section>
        </>
    )
}