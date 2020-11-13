import React, { useEffect, useState } from "react";
import HomeOrganism from "../../components/Home/organism";
import Loading from "../../components/Loading";

import { getAnimes } from "../../services/firebase";

import "./styles.css";

function Home() {
  const [animes, setanimes] = useState([]);
  useEffect(() => {
    getAnimes().then((resp) => {
      setanimes(resp);
    });
  }, []);

  const handleClick = () => {};
  if (animes.length > 0) {
    return <HomeOrganism data={animes} callBack={handleClick} />;
  }

  return <Loading />;
}

export default Home;
