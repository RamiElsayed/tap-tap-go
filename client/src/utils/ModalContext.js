import React, { useState, useContext, useEffect } from "react";

const ModalContext = React.createContext();

export const useModalsContext = () => useContext(ModalContext);

export const ModalProvider = (props) => {
  const [modalState, setModalState] = useState(false);
  const [BookmarksModalState, setBookmarksModalState] = useState(false);

  const closeModal = (event) => {
    const isCloseBox = event.target.getAttribute("value");
    setModalState((prev) => {
      return isCloseBox === "CloseBox" ? !prev : prev;
    });
  };

  const openModal = () => {
    console.log("inside");
    setModalState((prev) => {
      return !prev;
    });
  };
  const openBookmarkModal = () => {
    console.log("inside");
    setBookmarksModalState((prev) => {
      return !prev;
    });
  };

  const closeBookmarkModal = (event) => {
    const isCloseBox = event.target.getAttribute("value");
    setBookmarksModalState((prev) => {
      return isCloseBox === "CloseBox" ? !prev : prev;
    });
  };

  return (
    <ModalContext.Provider
      value={{
        modalState,
        BookmarksModalState,
        closeModal,
        openModal,
        openBookmarkModal,
        closeBookmarkModal,
      }}
      {...props}
    />
  );
};
