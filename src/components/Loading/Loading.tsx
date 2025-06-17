import LoadingSpinner from "../../assets/svg/loading.svg"
import "./Loading.scss"

export function Loading() {
    return(
        <>
        <section className="loading-root">
            <section className="loading-root-spinner-wrapper">
                <img src={LoadingSpinner} className="loading-spinner" />
            </section>
            <section className="loading-root-text-wrapper">
                Loading... Please wait!
            </section>
        </section>
        </>
    )
}