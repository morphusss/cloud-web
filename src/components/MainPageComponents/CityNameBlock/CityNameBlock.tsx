import { useState } from "react"
import type { CityForecast } from "../../../types/types"
import styles from  "./CityNameBlock.module.scss"
import { useSelector } from "react-redux"
import { apiDataSelector } from "../../../store/weatherApiData/apiData.selector"

type Props = {
    data: CityForecast | null,
}



export function CityNameBlock(/*props: Props*/) {
    const selector = useSelector(apiDataSelector);
    const [ data, setData ] = useState<CityForecast | null>(null)


    function fillData() {
        

        setData(selector);
    }

    fillData()

    return(
        <>
        <section className={styles.root}>
            <section className={styles.nameWrapper}>
                {/* {props.data?.location.name} */}
                {data?.location.name}
            </section>
        </section>
        </>
    )
}