import { useEffect, useState } from "react";
import { SignForms } from "../SignForms";
import BookMark from "../bookmark";
import { useModalsContext } from "../../utils/ModalContext";

function Modals() {
  const { modalState, BookmarksModalState } = useModalsContext();

  return (
    <>
      {modalState && <SignForms />}
      {BookmarksModalState && <BookMark />}
    </>
  );
}

export default Modals;
