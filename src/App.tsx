import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChartsandMaps from "./components/pages/ChartsandMapsPage";
import Contact from "./components/pages/ContactPage";
import Layout from "./components/pages/Layout";
import ContactForm from "./components/organisms/ContactForm";
import React, { useReducer } from "react";
import ContactPageReducer from "./reducers/ContactPageReducer";
import ContactPageContext from "./contexts/contactPage";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const [store, dispatch] = useReducer(ContactPageReducer, {
    contacts: [],
  });
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ContactPageContext.Provider value={{ store: store, dispatch: dispatch }}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<Contact />}></Route>
                <Route
                  path="/charts-and-maps"
                  element={<ChartsandMaps />}
                ></Route>
                <Route path="/contact-form" element={<ContactForm />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </ContactPageContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
