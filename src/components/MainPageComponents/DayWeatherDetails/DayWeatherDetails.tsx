import { DayWeatherDetailsComponent } from "../DayWeatherDetailsComponent"
import styles from "./DayWeatherDetails.module.scss"

const detailsList = [
    { type: "uv" },
    { type: "wind-speed" },
    { type: "air-quality" },
]

export function DayWeatherDetails() {

    return(
        <>
        <section className={styles.root}>
            {detailsList.map((elem) => (
                <section className={styles.typeBlock}>
                    <DayWeatherDetailsComponent type={elem.type}/>
                </section>
            ))}
        </section>
        </>
    )
}