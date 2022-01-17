// @ts-ignore
import ymaps from 'ymaps';
import "./Map.scss"
import { useEffect } from "react";

interface MapIF {
    latitude: number,
    longitude: number
}

function Map ({ latitude, longitude }: MapIF) {
    useEffect(() => {
        ymaps
            .load()
            .then((maps: any) => {
                let container = document.querySelector(".yandex-map") as HTMLElement;
                container.innerHTML = "";

                // eslint-disable-next-line
                let map = new maps.Map(container, {
                    center: [latitude, longitude],
                    zoom: 16
                });
            })
            .catch((error: any) => {
                alert('Haritalara bağlanırken bir hata meydana geldi...')
            });
    }, [latitude, longitude]);

    return (
        <div className="map-container select-container">
            <div className="content-title-default">
                <span>Roketin Konumu</span>
            </div>
            <div className="yandex-map" />
        </div>
    )
}

export default Map;
