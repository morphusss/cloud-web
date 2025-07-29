import styles from  "./CityNameBlock.module.scss"
import { useSelector } from "react-redux"
import { apiDataSelector } from "../../../store/weatherApiData/apiData.selector"
import { useState } from "react";

export function CityNameBlock() {
    const selector = useSelector(apiDataSelector);
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