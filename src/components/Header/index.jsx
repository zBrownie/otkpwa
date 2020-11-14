import React, { useState } from "react";

import { FiMenu } from "react-icons/fi";
import "./styles.css";
import DrawerMenu from "../DrawerMenu";

function Header() {
  // function displayNotification() {
  //   if (Notification.permission === "granted") {
  //     navigator.serviceWorker.getRegistration().then(function (reg) {
  //       var options = {
  //         body: "Here is a notification body!",
  //         icon: "logo192.png",
  //         vibrate: [100, 50, 100],
  //         data: {
  //           dateOfArrival: Date.now(),
  //           primaryKey: 1,
  //         },
  //       };
  //       reg.showNotification("Hello world!", options);
  //     });
  //   }
  // }
  const [drawerState, setDrawerState] = useState(false);

  const showDrawer = () => setDrawerState(!drawerState);

  return (
    <div className="container-header">
      <DrawerMenu state={drawerState} callBack={showDrawer} />
      <div className="header-menu">
        <FiMenu size={26} color="#fff" onClick={() => showDrawer()} />
      </div>
      <div className="header-logo">
        <h2>Otaku List</h2>
      </div>
    </div>
  );
}

export default Header;
