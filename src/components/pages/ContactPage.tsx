import React, { useReducer } from "react";
import { useNavigate } from "react-router";
import ContactList from "./ContactList";
import ContactPageReducer from "../../reducers/ContactPageReducer";

export default function ContactPage() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="bg-page-bgcolor h-screen "
        style={{
          //  flex: "0.80",
          flex: "1",
          backgroundColor: "#ece9e4",
          overflow: "auto",
        }}
      >
        <button
          style={{
            backgroundColor: "#cccccc",
            fontSize: "20px",
            margin: "auto ",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
            padding: "10px",
            border: "2px solid black",
            fontWeight: "bold",
          }}
          onClick={() => navigate("/contact-form")}
        >
          Create Contact
        </button>
        <ContactList />
      </div>
    </>
  );
}
