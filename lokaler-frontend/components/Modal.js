// This is a Modal component
// The main purpose of every modal is to appear on top of the rest of the page
// Modal component with Next.js: https://devrecipes.net/modal-component-with-next-js/
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { FaTimes } from "react-icons/fa";

// -------------- The props children is the actual content --------------
export default function Modal({ show, onClose, children, title }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#000000b3] ">
      <div className=" bg-white w-[500px] h-[600px] rounded-[15px] p-[20px] z-40">
        <div className=" flex justify-end text-[25px] ">
          <a href="#" onClick={handleClose}>
            <FaTimes />
          </a>
        </div>
        {title && <div>{title}</div>}
        <div className=" pt-[10px] ">{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}
