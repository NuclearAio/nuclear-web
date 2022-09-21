import React from "react";
import { discord } from "../../socials";

const JoinDiscordModal = ({setShowModal}) => {
  return (
    <div>
      <div
        id="popup-modal"
        tabindex="-1"
        className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center"
        aria-hidden="true"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto md:ml-96">
          <div className="relative bg-base rounded-lg shadow border-2 border-primary">
            <button
            onClick={()=>setShowModal(false)}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-hover transition delay-100 ease-in rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="popup-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center">
              <svg
                aria-hidden="true"
                className="mx-auto mb-4 w-14 h-14 text-text-color"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="mb-5 text-xl font-bold tracking-tighter">
                Pre Launch is not started yet !
              </h3>
              <button
                data-modal-toggle="popup-modal"
                type="button"
                className=" bg-primary hover:bg-hover  delay-100 transition ease-in font-medium rounded-xl border-2 border-primary text-sm inline-flex items-center px-5 py-3.5 text-center mr-2 shadow"
              >
                <a href={discord} target="_blank">
                GET NOTIFIED
                </a>
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinDiscordModal;
