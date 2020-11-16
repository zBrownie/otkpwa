import React from "react";

// import { Container } from './styles';
import FlatList from "flatlist-react";

function FlatListAnime({ data, callBack }) {
  const renderList = (renderItem) => {
    return (
      <div
        className="anime-container"
        key={renderItem.id}
        onClick={() => callBack(renderItem)}
      >
        <img src={renderItem.imgUrl} alt={renderItem.title} />
      </div>
    );
  };
  return (
    <div className="container-flat">
      <ul>
        <FlatList
          list={data}
          renderItem={renderList}
          renderWhenEmpty={() => <div>List is empty!</div>}
          displayGrid
          sortBy="title"
        />
      </ul>
    </div>
  );
}

export default FlatListAnime;
