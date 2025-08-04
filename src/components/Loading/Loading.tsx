import { themeStyleSelector } from "../../store/themeStyle/themeStyle.selector";
import LoadingSpinner from "@/svg/black/loading.svg"
import LoadingSpinnerWhite from "@/svg/white/loading_white.svg"
import { useSelector } from "react-redux";
import styles from "./Loading.module.scss"

export function Loading() {
    const isDarkSelector = useSelector(themeStyleSelector);
    const localStorageTheme = localStorage.getItem("isDark");


    function returnCorrectImg(blackLogo: string, whiteLogo: string) {
        if(isDarkSelector === "true" || localStorageTheme === "true") return whiteLogo;
        if(isDarkSelector === "false" || localStorageTheme === "false") return blackLogo;
    }
    
    return(
        <>
        <section className={styles.root}>
            <section className={styles.spinnerWrapper}>
                <img src={returnCorrectImg(LoadingSpinner, LoadingSpinnerWhite)} className={styles.loadingSpinner} />
            </section>
            <section className={styles.textWrapper}>
                Loading... Please wait!
            </section>
        </section>
        </>
    )
}