import CardHome from "../molecules/CardHome";
import FlatListAnime from "../molecules/FlatListAnime";
import "./styles.css";
// import { Container } from './styles';

function HomeOrganism({ data, callBack }) {
  return (
    <div className="container">
      <div className="container-home">
        <CardHome title="Passando Hoje">
          <FlatListAnime data={data.today} callBack={callBack} />
        </CardHome>
        <CardHome title="Season">
          <FlatListAnime data={data.season} callBack={callBack} />
        </CardHome>
      </div>
    </div>
  );
}

export default HomeOrganism;
