import React from "react";
import LineGraph from "../organisms/LineGraph";
import Map from "../organisms/Map";
import { useState } from "react";

export default function ChartsandMapsPage() {
  const [activeComponent, setActiveComponent] = useState<"lineGraph" | "map">(
    "map"
  );

  const handleTabClick = (tab: "lineGraph" | "map") => {
    setActiveComponent(tab);
  };

  return (
    <div
      className="h-screen"
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "1",
        backgroundColor: "#ece9e4",
      }}
    >
      <nav className="flex justify-center mb-4">
        <button
          className={`m-3 px-4 py-2 rounded ${
            activeComponent === "map"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
          onClick={() => handleTabClick("map")}
        >
          Map
        </button>
        <button
          className={`m-3 px-4 py-2 rounded ${
            activeComponent === "lineGraph"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
          onClick={() => handleTabClick("lineGraph")}
        >
          Line Graph
        </button>
      </nav>
      <div
        style={{
          backgroundColor: "#ece9e4",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
        }}
        className="mx-auto"
      >
        {activeComponent === "map" && <Map />}
        {activeComponent === "lineGraph" && <LineGraph />}
      </div>
    </div>
  );
}
