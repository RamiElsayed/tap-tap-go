import React, { useState } from "react";
import Sidebar from "./Sidebar";

function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <Sidebar
      isOpenSidebar={open}
      onCloseSidebar={() => setOpen(false)}
    ></Sidebar>
  );
}

export default Profile;
