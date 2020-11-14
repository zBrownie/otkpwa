import { useCallback, useEffect } from "react";
import Routes from "./routes";
import "./styles/global.css";
function App() {
  const requestNotify = useCallback(() => {
    Notification.requestPermission(function (status) {
      if (status === "denied") {
      } else {
        console.log("Status notificação: ", status);
      }
    });
  }, []);

  useEffect(() => {
    requestNotify();
  }, [requestNotify]);
  return (
    <>
      <Routes />
    </>
  );
}

export default App;
