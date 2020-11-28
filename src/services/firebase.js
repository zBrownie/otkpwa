import firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxSaRtixSzs9SkuTyhKT8L5DGa-h9FZww",
  authDomain: "otakulist-2e5c0.firebaseapp.com",
  databaseURL: "https://otakulist-2e5c0.firebaseio.com",
  projectId: "otakulist-2e5c0",
  storageBucket: "otakulist-2e5c0.appspot.com",
  messagingSenderId: "1044762241083",
  appId: "1:1044762241083:web:9b66c2b6e86585e381941e",
  measurementId: "G-CET524P744",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const getAnimes = async () => {
  const resp = await firebase
    .firestore()
    .collection("animes")
    .get()
    .then((query) =>
      query.docs.map((docs) => ({ id: docs.id, ...docs.data() }))
    );

  return {
    todos: resp,
    today: filterAnimeDay(resp),
    season: filterAnimeSeason(resp),
  };
};

const filterAnimeDay = (resp) =>
  resp.filter(
    (anime) => anime.pos === new Date().getDay() && anime.streaming === 1
  );

const filterAnimeSeason = (resp) =>
  resp.filter((anime) => anime.streaming === 1);
