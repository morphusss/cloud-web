import { Header } from "../components/Header/Header";
import { MainContent } from "../components/MainContent/MainContent";

export function Home() {

    return(
        <>
        <section className="home-root">
            <section className="home-root-upper-wrapper">
                <Header/>
            </section>
            <section className="home-root-lower-wrapper">
                <MainContent/>
            </section>
        </section>
        </>
    )
}