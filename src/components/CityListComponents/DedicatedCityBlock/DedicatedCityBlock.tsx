import { Link } from "react-router-dom"
import type { DedicatedCity } from "../../../types/types"
import ArrowLink from "../../../assets/svg/black/goTo.svg"
import styles from "./DedicatedCityBlock.module.scss"
import { useDispatch } from "react-redux"
import { getCityName } from "../../../store/cityName/cityName.slice"

type Props = {
    data: DedicatedCity,
    key: number
}

export function DedicatedCityBlock(props: Props) {
    const dispatch = useDispatch();


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
                        <img src={ArrowLink} alt="go to home page" className={styles.goToImg}/>
                    </section>
                    </Link>
                </section>
            </section>
        </li>
        </>
    )
}