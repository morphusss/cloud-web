import styles from "./DayWeatherDetails.module.scss";
import { DayWeatherDetailsComponent } from "../DayWeatherDetailsComponent";

const detailsList = [
    { type: "uv" },
    { type: "wind_speed" },
    { type: "air_quality" },
]

export function DayWeatherDetails() {
    return(
        <>
        <section className={styles.root}>
            {detailsList.map((data) => (
                <section className={styles.detailWrapper}>
                    <DayWeatherDetailsComponent type={data.type}/>
                </section>
            ))}
        </section>
        </>
    )
}