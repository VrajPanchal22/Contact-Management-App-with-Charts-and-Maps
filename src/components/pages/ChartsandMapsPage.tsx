import React from "react";
import LineGraph from "../organisms/LineGraph";
import Map from "../organisms/Map";
import { useState } from "react";

export default function ChartsandMapsPage():JSX.Element {
  const [activeComponent, setActiveComponent] = useState<"lineGraph" | "map">(
    "map"
  );

  const handleTabClick = (tab: "lineGraph" | "map") => {
    setActiveComponent(tab);
  };

  return (
    <div
      className="h-screen flex-1 flex-col bg-page-bgcolor"
     
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
        className="mx-auto justify-center flex flex-col w-full bg-page-bgcolor"
      >
        {activeComponent === "map" && <Map />}
        {activeComponent === "lineGraph" && <LineGraph />}
      </div>
    </div>
  );
}
