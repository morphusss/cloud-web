import type { ForecastPerDay, HourlyForecast } from "../../../types/types"
import type { Dispatch, SetStateAction } from "react";
import styles from "./ChildFutureForecastForDaysBlock.module.scss"

type Props = {
    day: ForecastPerDay;
    key: number,
    setParticularDayHours: Dispatch<SetStateAction<HourlyForecast[] | null>>,
    setIsForecastForDay: Dispatch<SetStateAction<boolean>>,
}

export function ChildFutureForecastForDaysBlock(props: Props) {

    function showCorrectDate(date: string) {
        let reverseDate: string = "";
        let normalDate: string = "";
        for(let i = date.length - 1; i > date.length - 6; i--) {
            if(date[i] !== "-"){
                reverseDate += date[i];
            } else {
                reverseDate += "."
            }
        }

        for(let i = reverseDate.length - 1; i > -1; i--) {
            normalDate += reverseDate[i];
        }

        return normalDate;
    }

    return(
        <>
        <li className={styles.root} key={props.key}>
            <section className={styles.componentsWrapper} onClick={() => {props.setParticularDayHours(props.day.hour); 
                                                                          props.setIsForecastForDay((prev) => !prev);}}>
                <section className={styles.futureDayWeatherTypeWrapper}>
                    <section className={styles.futureDayWeatherImageWrapper}>
                        <img src={props.day.day.condition.icon} alt={props.day.day.condition.text} />
                    </section>
                    <section className={styles.futureDayWeatherTitleWrapper}>
                        {props.day.day.condition.text}
                    </section>
                </section>
                <section className={styles.futureDayWeatherDateWrapper}>
                    {showCorrectDate(props.day.date)}
                </section>
            </section>
        </li>
        </>
    )
}