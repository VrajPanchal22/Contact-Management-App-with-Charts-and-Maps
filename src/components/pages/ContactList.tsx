import React, { useContext } from "react";
import ContactPageContext from "../../contexts/contactPage";
import { useNavigate } from "react-router";
import { DELETE_CONTACT, EDIT_CONTACT } from "../../actions";

export default function ContactList() {
  const { dispatch } = useContext(ContactPageContext);
  const navigate = useNavigate();
  const contactList = JSON.parse(localStorage.getItem("contacts")!);
  const contacts = contactList;
  if (contacts?.length !== 0) {
    return (
      <div className="mt-5  grid grid-cols-3 gap-2 ">
        {contacts?.map((contact: any) => (
          <div className=" h-80 w-80 items-center mx-10">
            <div className="bg-white flex flex-col p-5 justify-center items-center font-bold">
              <span className="my-3">FirstName: {contact.firstName}</span>
              <span className="my-3">LastName: {contact.lastName}</span>
              <span className="my-3">Status: {contact.status}</span>
            </div>
            <button
              onClick={() => navigate("/contact-form", { state: { contact } })}
              className="border border-black px-8 py-1 text-white bg-green-400  rounded-lg mt-6 m-auto flex font-bold"
            >
              Edit
            </button>
            <br />
            <button
              onClick={() =>
                dispatch({ type: DELETE_CONTACT, payload: contact.id })
              }
              className="border border-black px-6 py-1 text-white bg-red-400  rounded-lg  m-auto flex font-bold"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="flex border border-black m-auto mt-20 w-80 bg-btn-bgcolor">
        <div className="m-5 ">
          <img
            src="https://img.icons8.com/ios-filled/256/cancel.png"
            // width="100px"
            // height="100px"
          />
        </div>
        <div className="text-xl p-5">
          No Contact Found Please add Contact From Create Contact Button
        </div>
      </div>
    );
  }
}
