import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useQuery } from "react-query";
import axios from "axios";

interface Country {
  country: string;
  active: number;
  recovered: number;
  deaths: number;
  countryInfo: {
    lat: number;
    long: number;
    flag: string;
  };
}

export default function Map() {
  const { data, isLoading, error } = useQuery("countries", async () => {
    const { data } = await axios.get(
      "https://disease.sh/v3/covid-19/countries"
    );
    return data;
  });

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div>Error: {(error as Error)?.message}</div>;
  }
  const customIcon = new Icon({
    iconUrl: "https://img.icons8.com/ios-filled/256/google-maps-new.png",
    iconSize: [25, 25],
  });

  return (
    <MapContainer
      className="z-[50] border border-black bg-white flex m-auto w-10/12 h-[32rem] "
      center={[20.5937, 78.9629]}
      zoom={4}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup>
        {data?.map((country: Country) => (
          <Marker
            key={country?.country}
            position={[country?.countryInfo?.lat, country?.countryInfo?.long]}
            icon={customIcon}
          >
            <Popup>
              <div>
                <img
                  src={country?.countryInfo?.flag}
                  alt={country?.country}
                  className="w-12 mb-1"
                />
                <h3>{country?.country}</h3>
                <p>Active: {country?.active}</p>
                <p>Recovered: {country?.recovered}</p>
                <p>Deaths: {country?.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
