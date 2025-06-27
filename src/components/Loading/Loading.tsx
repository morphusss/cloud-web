import LoadingSpinner from "../../assets/svg/loading.svg"
import styles from "./Loading.module.scss"

export function Loading() {
    return(
        <>
        <section className={styles.root}>
            <section className={styles.spinnerWrapper}>
                <img src={LoadingSpinner} className={styles.loadingSpinner} />
            </section>
            <section className={styles.textWrapper}>
                Loading... Please wait!
            </section>
        </section>
        </>
    )
}