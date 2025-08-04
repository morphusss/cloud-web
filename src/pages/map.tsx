import { useSelector } from "react-redux";
import { Header } from "../components/Header";
import { MapContent } from "../components/PagesContent/MapContent";
import { themeStyleSelector } from "../store/themeStyle/themeStyle.selector";
import styles from "@/src/styles/pages.module.scss"

export function Map() {
    const isDarkSelector = useSelector(themeStyleSelector);
    
    function returnProperTheme () {
        const isDark = localStorage.getItem("isDark")
        if(isDark === "true") {return "true";}
        else if(isDark === "false") {return "false";}
        else if(isDarkSelector) return isDarkSelector
    }

    return(
        <>
        <section className={styles.root} data-theme={returnProperTheme()}>
            <section className={styles.upperWrapper}>
                <Header/>
            </section>
            <section className={styles.lowerWrapper}>
                <MapContent/>
            </section>
        </section>
        </>
    )
}