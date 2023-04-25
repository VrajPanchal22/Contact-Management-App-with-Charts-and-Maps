import React, { ChangeEvent, FormEvent, useState } from "react";
import { ADD_CONTACT, EDIT_CONTACT } from "../../actions";
import { useContext } from "react";
import ContactPageContext from "../../contexts/contactPage";
import { useEffect } from "react";
import { useLocation } from "react-router";

interface ContactFormProps {
  contact?: {
    id: string;
    firstName: string;
    lastName: string;
    status: string;
  };
}

export default function ContactForm(props: ContactFormProps) {
  const location = useLocation();
  console.log(location);
  const state = location?.state?.contact;
  console.log("state", state);
  const { dispatch } = useContext(ContactPageContext);
  const [status, setStatus] = useState(state ? state.status : "");
  const [formData, setFormData] = useState(() => {
    if (state) {
      return {
        id: state.id,
        firstName: state.firstName,
        lastName: state.lastName,
        status: state.status,
      };
    } else {
      return {
        id: `${Date.now()}`,
        firstName: "",
        lastName: "",
        status: "",
      };
    }
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "status") {
      setStatus(value);
      setFormData({
        ...formData,
        status: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // console.log(formData);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (state) {
      dispatch({
        type: EDIT_CONTACT,
        payload: {
          id: formData.id, // replace with the id of the contact you want to edit
          updatedContact: formData,
        },
      });
    } else {
      dispatch({ type: ADD_CONTACT, payload: formData });
    }

    setFormData({
      id: `${Date.now()}`,
      firstName: "",
      lastName: "",
      status: "",
    });

    setStatus(""); // Clear the radio button selection
  };

  return (
    <div
      className="align-middle border border-sky-500 pt-20 bg-page-bgcolor h-screen"
      style={{
        // flex: "0.80",
        flex: "1  ",
        // backgroundColor: "#ece9e4",
      }}
    >
      <form onSubmit={handleSubmit} style={{ fontSize: "20px" }}>
        <h2
          className="font-bold"
          style={{ textAlign: "center", margin: "20px" }}
        >
          {state ? "Edit Contact" : "Create Contact Form"}
        </h2>
        <div
          className="mx-40 py-10 "
          style={{
            border: "2px solid black",
            textAlign: "center",
            backgroundColor: "white",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="firstName" style={{ paddingRight: "10px" }}>
              First Name:
              <input
                onChange={handleInputChange}
                className="border border-black pl-2 ml-2"
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                required
              />
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="lastName" style={{ paddingRight: "10px" }}>
              Last Name:
              <input
                onChange={handleInputChange}
                className="border border-black pl-2 ml-2"
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                required
              />
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label className="mr-10">
              {" "}
              Status:
              {/* <span style={{ paddingLeft: "20px" }}>   */}
              <label className="ml-2" style={{ paddingRight: "10px" }}>
                <input
                  onChange={handleInputChange}
                  style={{ margin: "3px" }}
                  type="radio"
                  id="Active"
                  name="status"
                  value={"Active"}
                  checked={status === "Active"}
                  required
                />
                Active
              </label>
              <label>
                <input
                  onChange={handleInputChange}
                  style={{ margin: "3px" }}
                  type="radio"
                  id="Inactive"
                  name="status"
                  value={"Inactive"}
                  checked={status === "Inactive"}
                  required
                />
                Inactive
              </label>
            </label>
          </div>
        </div>
        <button
          type="submit"
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
        >
          Save Contact
        </button>
      </form>
    </div>
  );
}
