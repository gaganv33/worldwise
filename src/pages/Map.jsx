import styles from "./Map.module.css";
import { ContextProvider } from "../context/CitiesContext";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent } from "react-leaflet";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Map(){
    const context = ContextProvider();
    const state = context?.state;
    const location = context?.state?.location;

    const data = state.data;
    const currentCity = state.currentCity;
    const [mapPosition, setMapPosition] = useState([0, 0]);

    useEffect(function() {
        setMapPosition([location.latitude, location.longitude]);
    }, [location]);


    useEffect(function() {
        if(currentCity){
            let selectedCity = data.filter((singleCity) => singleCity.id === currentCity);
            selectedCity = selectedCity[0];
            setMapPosition([selectedCity?.position?.lat ? selectedCity?.position?.lat : 0, selectedCity?.position?.lng ? selectedCity?.position.lng : 0]);
        }
    }, [data, currentCity]);

    return (
        <div className={styles.map}>
            <MapContainer className={styles.mapLeaflet} center={mapPosition} zoom={6} scrollWheelZoom={true}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    data.map((singleData) => (
                    <div key={singleData.id}>
                        <Marker position={[singleData.position.lat, singleData.position.lng]}>
                            <Popup>
                                {singleData.emoji}<br />
                                {singleData.cityName}
                            </Popup>
                        </Marker>
                    </div>))
                }
                <ChangeCenter position={mapPosition} />
                <DetectClick />
            </MapContainer>
        </div>
    );
}

function ChangeCenter(props){
    const information = {...props};
    const position = information.position;
    const map = useMap();
    map.setView(position);
    return null;
}

function DetectClick(){
    const navigate = useNavigate();

    useMapEvent({
        click: (e) => {
            navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
        }
    })
}
