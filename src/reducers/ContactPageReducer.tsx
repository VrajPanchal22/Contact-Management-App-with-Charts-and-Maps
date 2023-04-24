import React from "react";
import { ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT } from "../actions";
interface Action {
  type: string;
  payload?: any;
}

interface State {
  contacts: any[];
}
interface Contact {
  id: string;
  firstName: string;
  lastName: string;
}

const initialState: State = {
  contacts: JSON.parse(localStorage.getItem("contacts") ?? "[]"),
};

export default function ContactPageReducer(
  state: State = initialState,
  action: Action
) {
  console.log("State", state);
  switch (action.type) {
    case ADD_CONTACT:
      console.log("ADD_CONTACT");
      console.log("ADD payload", action.payload);
      const newContacts = [...state.contacts, action.payload];
      localStorage.setItem("contacts", JSON.stringify(newContacts));
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case DELETE_CONTACT:
      console.log("DELETE_CONTACT");
      console.log("DELETE payload", action.payload);

      const updatedContacts = state.contacts.filter(
        (contact: Contact) => contact.id !== action.payload
      );
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return {
        ...state,
        contacts: updatedContacts,
      };

    case EDIT_CONTACT:
      console.log("EDIT_CONTACT");
      console.log("EDIT payload", action.payload);

      const editedContacts = state.contacts.map((contact: Contact) => {
        if (contact.id === action.payload.id) {
          return {
            ...contact,
            ...action.payload.updatedContact,
          };
        }
        return contact;
      });
      localStorage.setItem("contacts", JSON.stringify(editedContacts));
      return {
        ...state,
        contacts: editedContacts,
      };

    default:
      return state;
  }
}
