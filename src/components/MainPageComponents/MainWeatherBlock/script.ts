import Sunny from "@/images/weatherTypes/sunny_icon.png"
import ClearMoon from "@/images/weatherTypes/moon_icon.png"
import Cloudy from "@/images/weatherTypes/clouds_icon.png"
import LightRain from "@/images/weatherTypes/light_rain_icon.png"
import MediumRain from "@/images/weatherTypes/medium_rain_icon.png"
import HeavyRain from "@/images/weatherTypes/heavy_rain_icon.png"
import Fog from "@/images/weatherTypes/fog_icon.png"
import Snow from "@/images/weatherTypes/snow_icon.png"
import Thunder from "@/images/weatherTypes/thunder_icon.png"

export function showCorrectIcon (type: string | undefined) {
    switch(type) {
        case("Sunny"):
        return Sunny;

        case("Clear"):
        return ClearMoon;

        case("Partly Cloudy"):
        case("Partly cloudy"):
        case("Cloudy"):
        case("Overcast"):
        case("Mist"):
        return Cloudy;

        case("Patchy rain possible"):
        case("Patchy rain nearby"):
        case("Patchy light drizzle"):
        case("Light drizzle"):
        case("Freezing drizzle"):
        case("Heavy freezing drizzle"):
        case("Patchy light rain"):
        case("Light rain"):
        case("Light freezing rain"):
        return LightRain;

        case("Patchy snow possible"):
        case("Patchy sleet possible"):
        case("Patchy freezing drizzle possible"):
        case("Blowing snow"):
        case("Blizzard"):
        case("Light sleet"):
        case("Moderate or heavy sleet"):
        case("Patchy light snow"):
        case("Light snow"):
        case("Patchy moderate snow"):
        case("Moderate snow"):
        case("Patchy heavy snow"):
        case("Heavy snow"):
        case("Ice pellets"):
        case("Light sleet showers"):
        case("Moderate or heavy sleet showers"):
        case("Light snow showers"):
        case("Moderate or heavy snow showers"):
        case("Light showers of ice pellets"):
        case("Moderate or heavy showers of ice pellets"):
        return Snow;

        case("Fog"):
        case("Freezing fog"):
        return Fog;
        
        case("Thundery outbreaks possible"):
        case("Patchy light rain with thunder"):
        case("Moderate or heavy rain with thunder"):
        case("Patchy light snow with thunder"):
        case("Moderate or heavy snow with thunder"):
        return Thunder;
    
        case("Moderate rain at times"):
        case("Moderate rain"):
        return MediumRain;

        case("Heavy rain at times"): 
        case("Heavy rain"):
        case("Moderate or heavy freezing rain"):
        case("Light rain shower"):
        case("Moderate or heavy rain shower"):
        case("Torrential rain shower"):
        return HeavyRain;

    }
}