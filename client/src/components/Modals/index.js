import { UserForms } from "../UserForms";
import BookMark from "../bookmark";
import { useModalsContext } from "../../utils/ModalContext";
import { UpdateProfile } from "../../Pages/Profile/UpdateProfile";

function Modals() {
  const { modalState, BookmarksModalState, updateProfile } = useModalsContext();

  return (
    <>
      {modalState && <UserForms />}
      {BookmarksModalState && <BookMark />}
      {updateProfile && <UpdateProfile />}
    </>
  );
}

export default Modals;
