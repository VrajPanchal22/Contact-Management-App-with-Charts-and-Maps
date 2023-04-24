import React from "react";
import { useNavigate } from "react-router";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div
      className="h-screen flex"
      style={{
        display: "flex",
        // flex: "0.20",
        flexDirection: "column",
        border: "2px solid black",
        // height: "100vh",
        fontSize: "22px",
        textDecoration: "underline",
        color: "blue",
        fontWeight: "bold",
        minWidth: "200px",
      }}
    >
      <div
        style={{
          cursor: "pointer",
          //   marginBottom: "10px",
          borderBottom: "1px solid black",
          textAlign: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
        onClick={() => navigate("/")}
      >
        Contact
      </div>
      <div
        style={{
          cursor: "pointer",
          borderBottom: "1px solid black",
          textAlign: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
        onClick={() => navigate("/charts-and-maps")}
      >
        Charts and Maps
      </div>
    </div>
  );
}
