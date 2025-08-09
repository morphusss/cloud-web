import { themeStyleSelector } from "@store/themeStyle/themeStyle.selector"
import { getCityName } from "@store/cityName/cityName.slice"
import type { DedicatedCity } from "@src/types/types"
import ArrowLink from "@svg/black/goTo.svg"
import ArrowLinkWhite from "@svg/white/goTo_white.svg"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import styles from "./DedicatedCityBlock.module.scss"

type Props = {
    data: DedicatedCity,
    key: number
}

export function DedicatedCityBlock(props: Props) {
    const dispatch = useDispatch();
    const isDarkSelector = useSelector(themeStyleSelector);
    const localStorageTheme = localStorage.getItem("isDark");

    function returnCorrectImg(blackLogo: string, whiteLogo: string) {
        if(isDarkSelector === "true" || localStorageTheme === "true") return whiteLogo;
        if(isDarkSelector === "false" || localStorageTheme === "false") return blackLogo;
    }

    return(
        <>
        <li key={props.key} className={styles.root}>
            <section className={styles.rootWrapper}>
                <section className={styles.cityTitleWrapper}>
                    {props.data.name}
                </section>
                <section className={styles.buttonWrapper}>
                    <Link to={"/"}> 
                    <section className={styles.ImgWrapper} onClick={() => dispatch(getCityName(props.data.name))}>
                        <img src={returnCorrectImg(ArrowLink, ArrowLinkWhite)} alt="go to home page" className={styles.goToImg}/>
                    </section>
                    </Link>
                </section>
            </section>
        </li>
        </>
    )
}