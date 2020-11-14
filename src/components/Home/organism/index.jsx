import React, { useCallback, useEffect, useState } from "react";
import CardHome from "../molecules/CardHome";
import FlatListAnime from "../molecules/FlatListAnime";
import "./styles.css";
// import { Container } from './styles';

function HomeOrganism({ data, callBack }) {
  const [day, setDay] = useState([]);
  const [season, setSeason] = useState([]);

  const handleToDay = useCallback(() => {
    setDay(
      data.filter(
        (anime) => anime.pos === new Date().getDay() && anime.streaming === 1
      )
    );
  }, [data]);

  const handleSeason = useCallback(() => {
    setSeason(data.filter((anime) => anime.streaming === 1));
  }, [data]);

  useEffect(() => {
    handleToDay();
    handleSeason();
  }, [handleToDay, handleSeason]);

  return (
    <div className="container">
      <div className="container-home">
        <CardHome title="Passando Hoje">
          <FlatListAnime data={day} />
        </CardHome>
        <CardHome title="Season">
          <FlatListAnime data={season} />
        </CardHome>
      </div>
    </div>
  );
}

export default HomeOrganism;
