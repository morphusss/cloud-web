import FailedFace from "@/svg/black/failed.svg"
import FailedFaceWhite from "@/svg/white/failed_white.svg"
import styles from "./Failed.module.scss"
import { useSelector } from "react-redux";
import { themeStyleSelector } from "../../store/themeStyle/themeStyle.selector";

type Props = {
    type: string,
}

export function Failed(props: Props) {
    const isDarkSelector = useSelector(themeStyleSelector);
    const localStorageTheme = localStorage.getItem("isDark");


    function returnCorrectImg(blackLogo: string, whiteLogo: string) {
        if(isDarkSelector === "true" || localStorageTheme === "true") return whiteLogo;
        if(isDarkSelector === "false" || localStorageTheme === "false") return blackLogo;
    }
    
    function returnCorrectText() {
        switch(props.type){
            case("list"):
            return "Something went wrong! Try to rewrite your request or reload the page";
            case("main"):
            return "Something went wrong! Try to reload the page";
            case("not-found"):
            return "Oops... You reached the end of the site. Please come back";
        }
    }

    return(
        <>
        <section className={styles.root}>
            <section className={styles.upperWrapper}> 
                <img src={returnCorrectImg(FailedFace, FailedFaceWhite)} alt="Failed face" className={styles.failedImg}/>
            </section>
            <section className={styles.lowerWrapper}>
                {returnCorrectText()}
            </section>
        </section>
        </>
    )
}