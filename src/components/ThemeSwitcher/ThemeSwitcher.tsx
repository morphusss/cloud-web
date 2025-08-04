import MoonImg from "../../assets/svg/black/moon.svg"
import SunImg from "../../assets/svg/white/sun_white.svg"
import { useState } from "react"
import styles from "./ThemeSwitcher.module.scss"
import { useDispatch } from "react-redux"
import { getStyleValue } from "../../store/themeStyle/themeStyle.slice"

export function ThemeSwitcher() {
    const dispatch = useDispatch();
    const [isDark, setIsDark] = useState(false);
    const localStorageTheme = localStorage.getItem("isDark");

    function changeValue() {
        setIsDark((prev) => !prev);
        dispatch(getStyleValue(String(isDark)));
        localStorage.setItem("isDark", String(isDark));
    }

    function returnProperImg() {
        if (localStorageTheme === "true") {
            return SunImg;
        } else if (localStorageTheme === "false") {
            return MoonImg;
        } else if(!localStorageTheme) {
            return isDark ? SunImg : MoonImg;
        }
    }

    return(
        <>
        <section className={styles.root}>
            <section className={styles.themeImageWrapper} onClick={changeValue}>
                <img src={returnProperImg()} alt="theme image" />
            </section>
        </section>
        </>
    )
}