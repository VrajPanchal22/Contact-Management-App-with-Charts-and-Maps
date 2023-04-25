import React, { useContext } from "react";
import ContactPageContext from "../../contexts/contactPage";
import { useNavigate } from "react-router";
import { DELETE_CONTACT } from "../../actions";

interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  status: string;
}

export default function ContactList(): JSX.Element {
  const { dispatch } = useContext(ContactPageContext);
  const navigate = useNavigate();
  const contactList: Contact[] | null = JSON.parse(
    localStorage.getItem("contacts")!
  );
  const contacts: Contact[] | null = contactList;
  if (contacts?.length !== 0) {
    return (
      <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4 m-5 ">
        {contacts?.map((contact: Contact) => (
          <div key={contact.id} className="h-auto">
            <div className="bg-white flex flex-col p-5 justify-center items-center font-bold">
              <span className="my-3">FirstName: {contact.firstName}</span>
              <span className="my-3">LastName: {contact.lastName}</span>
              <span className="my-3">Status: {contact.status}</span>
            </div>
            <button
              onClick={() => navigate("/contact-form", { state: { contact } })}
              className="border-2 border-black px-8 py-1 mb-2 text-white bg-green-400 rounded-lg mt-3 m-auto flex font-bold"
            >
              Edit
            </button>
            <button
              onClick={() =>
                dispatch({ type: DELETE_CONTACT, payload: contact.id })
              }
              className="border-2 border-black px-6 py-1 text-white bg-red-400 rounded-lg m-auto flex font-bold"
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
            alt="No Contact Found"
          />
        </div>
        <div className="text-xl p-5">
          No Contact Found Please add Contact From Create Contact Button
        </div>
      </div>
    );
  }
}
