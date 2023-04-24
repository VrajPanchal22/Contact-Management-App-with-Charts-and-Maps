import { createContext } from "react";
import React from "react";

const ContactPageContext = createContext<{
  store: any;
  dispatch: React.Dispatch<any>;
}>({
  store: JSON.parse(localStorage.getItem("contacts") ?? "[]"),
  dispatch: () => null,
});

export default ContactPageContext;
