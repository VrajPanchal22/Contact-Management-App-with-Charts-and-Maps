import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Sidebar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative">

        {/* Burger icon */}
        <div className="fixed top-3 left-4 lg:hidden bg-slate-300">
          <button className="p-2 rounded-md" onClick={handleToggle}>
            <svg
              className="h-6 w-6 text-gray-600 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Sidebar */}

        <div
          className={`z-[100] fixed inset-0 lg:relative lg:flex lg:flex-col lg:h-screen w-64 lg:w-auto bg-white border-r  ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="p-4">
            <div className="font-bold text-xl mb-5">Menu</div>

            <div
              className="cursor-pointer mb-2 py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-300"
              onClick={() => {
                navigate("/");
                setIsOpen(false);
              }}
            >
              Contact
            </div>

            <div
              className="cursor-pointer mb-2 py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-300"
              onClick={() => {
                navigate("/charts-and-maps");
                setIsOpen(false);
              }}
            >
              Charts and Maps
            </div>
          </div>

          {/* Close icon */}

          <div
            className="lg:hidden absolute top-0 right-0 p-4 cursor-pointer"
            onClick={handleToggle}
          >
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
