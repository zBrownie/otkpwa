import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import HomeOrganism from "../../components/Home/organism";
import Loading from "../../components/Loading";

import { getAnimes } from "../../services/firebase";

function Home() {
  const history = useHistory();
  const [animes, setanimes] = useState(null);

  const getData = React.useCallback(() => {
    getAnimes().then((resp) => {
      setanimes(resp);
    });
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleClick = (anime) => {
    history.push({
      pathname: "/anime",
      state: anime,
    });
  };
  if (animes != null) {
    return <HomeOrganism data={animes} callBack={handleClick} />;
  }

  return <Loading />;
}

export default Home;
