import { useSelector } from "react-redux";
import { cityGeoSelector } from "../../store/cityGeoposition/cityGeoposition.selector";
import { apiDataSelector } from "../../store/weatherApiData/apiData.selector";
import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

import styles from "./Map.module.scss";
import type { GeoDetails } from "../../types/types";

type Props = {
    cityGeo: GeoDetails,
}

export function Map(props: Props) {
    const cityGeoDetails = useSelector(cityGeoSelector);
    const standardCityGeoDetails = useSelector(apiDataSelector)?.location;

    const mapRef = useRef<Map$1 | null>(null);
    const mapContainerRef = useRef<HTMLElement | string | null>(null);
  
    useEffect(() => {
      mapboxgl.accessToken = import.meta.env.VITE_MAP_ACCESS_TOKEN;
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        center: [Number(props.cityGeo.lon), Number(props.cityGeo.lat)],
        zoom: 9.5,
      });
  
      return () => {
        mapRef.current.remove()
      }
    }, [])

    return(
        <>
        <section className={styles.root}>
            <section className={styles.mapWrapper} ref={mapContainerRef}></section>
        </section>
        </>
    )
}