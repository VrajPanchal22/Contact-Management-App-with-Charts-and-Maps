import React, { ChangeEvent, FormEvent, useState } from "react";
import { ADD_CONTACT, EDIT_CONTACT } from "../../actions";
import { useContext } from "react";
import ContactPageContext from "../../contexts/contactPage";
import { useLocation } from "react-router";

interface State {
  id: string;
  firstName: string;
  lastName: string;
  status: string;
}

interface FormData {
  id: string;
  firstName: string;
  lastName: string;
  status: string;
}

export default function ContactForm() {
  const location = useLocation();
  const state: State | undefined = location?.state?.contact;
  const { dispatch } = useContext(ContactPageContext);
  const [status, setStatus] = useState<string>(state ? state.status : "");
  const [formData, setFormData] = useState<FormData>(() => {
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
    <div className="align-middle pt-20 bg-page-bgcolor h-screen  flex-1">
      <form className="text-xl" onSubmit={handleSubmit}>
        <h2 className="font-bold text-center m-5">
          {state ? "Edit Contact" : "Create Contact Form"}
        </h2>
        <div className="py-10 xl:mx-40 lg:mx-40 md:mx-20 sm:mx-10 mx-5 border-2 border-black text-center bg-white">
          <div className="mb-2.5">
            <label className="pr-2.5" htmlFor="firstName">
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
          <div className="mb-2.5">
            <label className="pr-2.5" htmlFor="lastName">
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
          <div className="mb-2.5">
            <label className="mr-10">
              {" "}
              Status:
              <label className="ml-2 pr-2.5">
                <input
                  onChange={handleInputChange}
                  className="m-1"
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
                  className="m-1"
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
          className="bg-btn-bgcolor text-black text-xl mx-auto flex items-center justify-center mt-20 p-4 border-2 border-black font-bold
          "
        >
          Save Contact
        </button>
      </form>
    </div>
  );
}
