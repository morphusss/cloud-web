import FailedFace from "../../assets/svg/black/failed.svg"
import styles from "./Failed.module.scss"

type Props = {
    type: string,
}

export function Failed(props: Props) {
    
    function returnCorrectText() {
        switch(props.type){
            case("list"):
            return "Something went wrong! Try to rewrite your request or reload the page";
            case("main"):
            return "Something went wrong! Try to reload the page";
        }
    }

    return(
        <>
        <section className={styles.root}>
            <section className={styles.upperWrapper}> 
                <img src={FailedFace} alt="Failed face" className={styles.failedImg}/>
            </section>
            <section className={styles.lowerWrapper}>
                {returnCorrectText()}
            </section>
        </section>
        </>
    )
}