import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Anime from "./pages/Anime";
import Home from "./pages/Home";

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/anime" component={Anime} />
    </Switch>
    <Footer />
  </Router>
);

export default Routes;
