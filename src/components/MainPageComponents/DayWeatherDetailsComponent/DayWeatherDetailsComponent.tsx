import styles from "./DayWeatherDetailsComponent.module.scss"

type Props = {
    type: string
}

export function DayWeatherDetailsComponent(props: Props) {


    function checkTypeOfDetail() {
        switch(props.type) {
            case("uv"):
            return(
                <>
                    <section className={styles.detailWrapper}></section>
                </>
            )
            break;
            case("wind-speed"):
            return(
                <>
                    <section className={styles.detailWrapper}></section>
                </>
            )
            break;
            case("air-quality"):
            return(
                <>
                    <section className={styles.detailWrapper}></section>
                </>
            )
            break;
        }
    }



    return(
        <>
        <section className={styles.root}>
            {checkTypeOfDetail()}
        </section>
        </>
    )
}