import type { HourlyForecast } from "../../../types/types"
import styles from "./ChildFutureForecastForTheDayBlock.module.scss"

type Props = {
    hour: HourlyForecast,
    key: number,
}

export function ChildFutureForecastForTheDayBlock(props: Props) {

    function returnCorrectTime(time: string) {
        let reversedTime: string = "";
        let normalTime: string = "";
        for(let i = time.length - 1; i > time.length - 6; i--) {
            reversedTime += time[i];
        }

        for(let i = reversedTime.length - 1; i > -1; i--) {
            normalTime += reversedTime[i];
        }

        return normalTime;
    }

    return(
        <>
        <li className={styles.root} key={props.key}>
            <section className={styles.componentsWrapper}>
                <section className={styles.futureWeatherTypeWrapper}>
                    <section className={styles.futureWeatherTypeImageWrapper}>
                        <img src={props.hour.condition.icon} alt={props.hour.condition.text} />
                    </section>
                    <section className={styles.futureWeatherTypeTitle}>
                        {props.hour.condition.text}
                    </section>
                </section>
                <section className={styles.timeWrapper}>
                    {returnCorrectTime(props.hour.time)}    
                </section>
            </section>
        </li>
        </>
    )
}