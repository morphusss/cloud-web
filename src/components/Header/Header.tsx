import CloudLogo from "../../assets/svg/cloud.svg"
import HomeLogo from "../../assets/svg/home.svg"
import ListLogo from "../../assets/svg/list.svg"
import MapsLogo from "../../assets/svg/map.svg"
import { Link } from "react-router-dom"
import "./Header.scss"

export function Header() {

    return(
        <>
        <section className="header-root">
            <section className="header-root-content-wrapper">
                <section className="header-root-right-wrapper-logo-wrapper">
                    <img src={CloudLogo} />
                </section>
            </section>
            <section className="header-root-content-wrapper">
                <section className="header-root-content-wrapper-logos-wrapper">
                    <Link to="/"><img src={HomeLogo} className="svg" /></Link>
                    <Link to="/cityList"><img src={ListLogo} className="svg" /></Link>
                    <Link to="/map"><img src={MapsLogo} className="svg" /></Link>
                </section>
            </section>
            <section className="header-root-content-wrapper">
                {/* Here if gonna be switcher */}
            </section>
        </section>
        </>
    )
}