import { getStyleValue } from "../../store/themeStyle/themeStyle.slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import MoonImg from "@/svg/black/moon.svg";
import SunImg from "@/svg/white/sun_white.svg";
import styles from "./ThemeSwitcher.module.scss";

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