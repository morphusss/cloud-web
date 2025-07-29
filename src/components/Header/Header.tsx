import CloudLogo from "../../assets/svg/black/cloud.svg"
import HomeLogo from "../../assets/svg/black/home.svg"
import SearchImg from "../../assets/svg/black/search.svg"
import MapsLogo from "../../assets/svg/black/map.svg"
import { Link } from "react-router-dom"
import styles from  "./Header.module.scss"

export function Header() {

    return(
        <>
        <section className={styles.root}>
            <section className={styles.contentWrapper}>
                <section className={styles.logoWrapper}>
                    <img src={CloudLogo} />
                </section>
            </section>
            <section className={styles.contentWrapper}>
                <section className={styles.imgWrapper}>
                    <Link to="/"><img src={HomeLogo} className="svg" /></Link>
                    <Link to="/cityList"><img src={SearchImg} className="svg" /></Link>
                    <Link to="/map"><img src={MapsLogo} className="svg" /></Link>
                </section>
            </section>
            <section className={styles.contentWrapper}>
                {/* Here if gonna be switcher */}
            </section>
        </section>
        </>
    )
}