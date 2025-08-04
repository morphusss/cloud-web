import { weatherForecastSelector } from "../../../store/weatherForecast/weatherForecast.selector"
import { useSelector } from "react-redux"
import { useState } from "react";
import styles from  "./CityNameBlock.module.scss"

export function CityNameBlock() {
    const selector = useSelector(weatherForecastSelector).cityForecast;
    const [ isHovered, setIsHovered ] = useState(false);

    function showCorrectContent() {
        if(isHovered === true) {
            return(
                <>
                {selector?.location.country}   
                </>
            )
        } else {
            return(
                <>
                {selector?.location.name}
                </>
            )
        }
    }

    return(
        <>
        <section className={styles.root}>
            <section className={styles.nameWrapper} 
                    onMouseOver={() => {setIsHovered((prev) => !prev)}} 
                    onMouseOut={() => {setIsHovered((prev) => !prev)}}>
                {showCorrectContent()}
            </section>
        </section>
        </>
    )
}