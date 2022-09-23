import { UserForms } from "../UserForms";
import BookMark from "../bookmark";
import { useModalsContext } from "../../utils/ModalContext";

function Modals() {
  const { modalState, BookmarksModalState } = useModalsContext();

  return (
    <>
      {modalState && <UserForms />}
      {BookmarksModalState && <BookMark />}
    </>
  );
}

export default Modals;
