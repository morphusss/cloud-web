import { getStyleValue } from "@store/themeStyle/themeStyle.slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import MoonImg from "@svg/black/moon.svg";
import SunImg from "@svg/white/sun_white.svg";
import styles from "./ThemeSwitcher.module.scss";

export function ThemeSwitcher() {
    const dispatch = useDispatch();
    const [isDark, setIsDark] = useState( JSON.parse(localStorage.getItem("IsDark")!) ||false);
    const localStorageTheme = localStorage.getItem("isDark");
    
    function changeValue() {
        setIsDark((prev: boolean) => {
            dispatch(getStyleValue(String(!prev)));
            localStorage.setItem("isDark", String(!prev));
            return !prev
        });
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