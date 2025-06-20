export type CityWeather = {
    current: {
        air_quality: {
            co: number,
            no2: number,
            o3: number,
            pm2_5: number,
            pm10: number,
            so2: number,
        }, 
        cloud: number,
        condition: {
            code: number,
            icon: string,
            text: string,
        },
        dewpoint_c: number,
        dewpoint_f: number,
        feelslike_c: number,
        feelslike_f: number,
        gust_kph: number,
        gust_mph: number,
        heatindex_c: number,
        heatindex_f: number,
        humidity: number,
        is_day: number,
        last_updated: string,
        last_updated_epoch: number,
        precip_in: number,
        precip_mm: number,
        pressure_in: number,
        pressure_mb: number,
        temp_c: number,
        temp_f: number,
        uv: number,
        vis_km: number,
        vis_miles: number,
        wind_degree: number,
        wind_dir: string,
        wind_kph: number,
        wind_mph: number,
        windchill_c: number,
        windchill_f: number,
    }, 
    location: {
        country: string,
        lat: number,
        localtime: string,
        localtime_epoch: number,
        lon: number,
        name: string,
        region: string,
        tz_id: string,
    },
}

type ForecastPerDay = {
    astro: {
        is_moon_up: number,
        is_sun_up: number,
        moon_illumination: number,
        moon_phase: string,
        moonrise: string,
        moonset: string,
        sunrise: string,
        sunset: string,
    },
    date: string,
    date_epoch: number,
    day: {
        air_quality: {
            co: number,
            no2: number,
            o3: number,
            pm2_5: number,
            pm10: number,
            so2: number,
        }, 
        avghumidity: number,
        avgtemp_c: number,
        avgtemp_f: number,
        avgvis_km: number,
        avgvis_miles: number,
        condition: {
            code: number,
            icon: string,
            text: string,
        },
        daily_chance_of_rain: number,
        daily_chance_of_snow: number,
        daily_will_it_rain: number,
        daily_will_it_snow: number,
        maxtemp_c: number,
        maxtemp_f: number,
        maxwind_kph: number,
        maxwind_mph: number,
        mintemp_c: number,
        mintemp_f: number,
        totalprecip_in: number,
        totalprecip_mm: number,
        totalsnow_cm: number,
        uv: number,
    },
    hour: Object[],
}

export type CityForecast = {
    current: {
        air_quality: {
            co: number,
            no2: number,
            o3: number,
            pm2_5: number,
            pm10: number,
            so2: number,
        }, 
        cloud: number,
        condition: {
            code: number,
            icon: string,
            text: string,
        },
        dewpoint_c: number,
        dewpoint_f: number,
        feelslike_c: number,
        feelslike_f: number,
        gust_kph: number,
        gust_mph: number,
        heatindex_c: number,
        heatindex_f: number,
        humidity: number,
        is_day: number,
        last_updated: string,
        last_updated_epoch: number,
        precip_in: number,
        precip_mm: number,
        pressure_in: number,
        pressure_mb: number,
        temp_c: number,
        temp_f: number,
        uv: number,
        vis_km: number,
        vis_miles: number,
        wind_degree: number,
        wind_dir: string,
        wind_kph: number,
        wind_mph: number,
        windchill_c: number,
        windchill_f: number,
    }, 
    forecast: {
        forecastday: ForecastPerDay[],
    },
    location: {
        country: string,
        lat: number,
        localtime: string,
        localtime_epoch: number,
        lon: number,
        name: string,
        region: string,
        tz_id: string,
    },
}