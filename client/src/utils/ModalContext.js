import React, { useState, useContext, useEffect } from "react";

const ModalContext = React.createContext();

export const useModalsContext = () => useContext(ModalContext);

export const ModalProvider = (props) => {
  const [modalState, setModalState] = useState(false);
  const [BookmarksModalState, setBookmarksModalState] = useState(false);
  const [updateProfile, setUpdateProfile] = useState(false);

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

  const openUpdateProfileModal = () => {
    console.log("inside");
    setUpdateProfile((prev) => {
      return !prev;
    });
  };
  const closeUpdateProfileModal = (event) => {
    const isBoxClosed = event.target.getAttribute("value");
    setUpdateProfile((prev) => {
      return isBoxClosed === "CloseBox" ? !prev : prev;
    });
  };

  return (
    <ModalContext.Provider
      value={{
        modalState,
        BookmarksModalState,
        updateProfile,
        closeModal,
        openModal,
        openBookmarkModal,
        openUpdateProfileModal,
        closeBookmarkModal,
        closeUpdateProfileModal,
      }}
      {...props}
    />
  );
};
