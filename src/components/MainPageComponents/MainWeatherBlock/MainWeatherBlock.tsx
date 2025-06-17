import "./MainWeatherBlock.scss"

export function MainWeatherBlock() {

    return(
        <>
        <section className="main-weather-root">
            <section className="main-weather-root-container">
                <section className="main-weather-root-container-upper-wrapper">
                    <img src="" className="weather-type-img" />
                </section>
                <section className="main-weather-root-container-lower-wrapper">
                    <section className="weather-type-name">
                        Sunny
                    </section>
                    <section className="weather-type-temperature">
                        37.5
                    </section>
                </section>
            </section>
        </section>
        </>
    )
}