import { weatherForecastSelector } from "@store/weatherForecast/weatherForecast.selector";
import { ChildFutureForecastForTheDayBlock } from "@components/MainPageComponents/ChildFutureForecastForTheDayBLock";
import { ChildFutureForecastForDaysBlock } from "@components/MainPageComponents/ChildFutureForecastForDaysBlock";
import { themeStyleSelector } from "@store/themeStyle/themeStyle.selector";
import type { ForecastPerDay, HourlyForecast } from "@src/types/types";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState, type MouseEvent } from "react"
import styles from "./FutureForecastBlock.module.scss"

export function FutureForecastBlock() {
    const slider = useRef<HTMLUListElement>(null);
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
                        <ChildFutureForecastForDaysBlock 
                            day={day} 
                            setParticularDayHours={setParticularDayHours} 
                            setIsForecastForDay={setIsForecastForDay} key={key}
                        />
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

    function handleMouseDown(event: MouseEvent<HTMLUListElement>) {
        setIsMouseDown(true);
        setStartX(event.pageX - - (slider.current?.offsetLeft || 0));
        setScrollLeft(slider.current?.scrollLeft || 0)
    }

    function handleMouseLeave() {
        setIsMouseDown(false);
    }

    function handleMouseUp() {
        setIsMouseDown(false);
    }

    function handleMouseMove(event: MouseEvent<HTMLUListElement>) {
        if(!isMouseDown) return;
        event.preventDefault();
        const x = event.pageX - (slider.current?.offsetLeft || 0);
        const walk = (x - startX) * 1;
        if(slider.current) slider.current.scrollLeft = scrollLeft - walk;

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