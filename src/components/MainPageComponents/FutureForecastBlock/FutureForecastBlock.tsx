import { useEffect, useRef, useState } from "react"
import styles from "./FutureForecastBlock.module.scss"
import { useSelector } from "react-redux";
import { weatherForecastSelector } from "../../../store/weatherForecast/weatherForecast.selector";
import type { ForecastPerDay, HourlyForecast } from "../../../types/types";
import { ChildFutureForecastForTheDayBlock } from "../ChildFutureForecastForTheDayBLock";
import { ChildFutureForecastForDaysBlock } from "../ChildFutureForecastForDaysBlock";
import { themeStyleSelector } from "../../../store/themeStyle/themeStyle.selector";

export function FutureForecastBlock() {
    const slider = useRef(null);
    const [ isMouseDown , setIsMouseDown ] = useState(false);
    const [ startX, setStartX ] = useState(0);
    const [ scrollLeft, setScrollLeft ] = useState(0)
    const [ isForecastForDays, setIsForecastForDay ] = useState(false);
    const [ hourList, setHourList ] = useState<HourlyForecast[]>([]);
    const [ dayList, setDayList ] = useState<ForecastPerDay[]>([]);
    const [ particularDayHours, setParticularDayHours ] = useState<HourlyForecast[] | null>(null);
    const weatherForecast = useSelector(weatherForecastSelector).cityForecast;
    const isDarkSelector = useSelector(themeStyleSelector);
    const localStorageTheme = localStorage.getItem("isDark");


    function returnCorrectTitle() {
        if(isForecastForDays) {
            return "See forecast for the day";
        } else {
            return "See forecast for days";
        }
    }

    function showCorrectForecastTable() {
        if(isForecastForDays) {
            return(
                <>
                <ul className={styles.forecastTableForDays}  ref={slider} 
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}>
                    {dayList.map((day, key) => (
                        <ChildFutureForecastForDaysBlock day={day} setParticularDayHours={setParticularDayHours} setIsForecastForDay={setIsForecastForDay} key={key}/>
                    ))}
                </ul>  
                </>
            )
        } else {
            if(!particularDayHours) {
                return (
                    <>
                    <ul className={styles.forecastTable} ref={slider} 
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}>
                        {hourList.map((hour, key) => (
                            <ChildFutureForecastForTheDayBlock hour={hour} key={key}/>
                        ))}
                    </ul>
                    </>
                )
            } else {
                return(
                    <>
                    <ul className={styles.forecastTable} ref={slider} 
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}>
                        {particularDayHours.map((hour, key) => (
                            <ChildFutureForecastForTheDayBlock hour={hour} key={key}/>
                        ))}
                    </ul>
                    </>
                )
            }
        }
    }

    function handleMouseDown(e: any) {
        setIsMouseDown(true);
        setStartX(e.pageX - - slider.current.offsetLeft);
        setScrollLeft(slider.current.scrollLeft)
    }

    function handleMouseLeave() {
        setIsMouseDown(false);
    }

    function handleMouseUp() {
        setIsMouseDown(false);
    }

    function handleMouseMove(e: any) {
        if(!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - slider.current.offsetLeft;
        const walk = (x - startX) * 1;
        slider.current.scrollLeft = scrollLeft - walk;

    }

    function returnCorrectTitleColor(){
        if(isDarkSelector === "true" || localStorageTheme === "true") return "white";
        if(isDarkSelector === "false" || localStorageTheme === "false") return "black";
    }

    useEffect(() => {
        if (weatherForecast) {
            setHourList(weatherForecast.forecast.forecastday[0].hour);
            setDayList(weatherForecast.forecast.forecastday);
        }
    }, [])

    return(
        <>
        <section className={styles.root}>  
            <section className={styles.componentsWrapper}>
                <section className={styles.buttonWrapper}>
                    <button className={styles.button}  style={{color: returnCorrectTitleColor(),}} onClick={() => setIsForecastForDay((prev) => !prev)}>{returnCorrectTitle()}</button>
                </section>
                <section className={styles.forecastTableWrapper} >
                    {showCorrectForecastTable()}
                </section>
            </section>
        </section>
        </>
    )
}