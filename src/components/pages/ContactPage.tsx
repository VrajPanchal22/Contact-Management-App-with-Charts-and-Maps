import { useNavigate } from "react-router";
import ContactList from "../organisms/ContactList";

export default function ContactPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-page-bgcolor h-screen flex-1 bg-page-bgcolor overflow-auto">
        <button
          className="bg-btn-bgcolor text-black text-xl mx-auto flex items-center justify-center my-10 p-4 border-2 border-black font-bold
          "
          onClick={() => navigate("/contact-form")}
        >
          Create Contact
        </button>
        <ContactList />
      </div>
    </>
  );
}
