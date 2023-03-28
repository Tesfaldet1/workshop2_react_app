import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const React = () => {
  return (
    <div className="container">
      <h4>Welcome Page </h4>
    </div>
  );
};
const Home = () => {
  return (
    <div className="container">
      <h4>Home component! </h4>
    </div>
  );
};
const Person = () => {
  return (
    <div className="container">
      <h4>Person component! </h4>
    </div>
  );
};

const About = () => {
  return (
    <div className="container">
      <h4>About US </h4>
    </div>
  );
};
const ComponentNotFound = () => {
  return (
    <div className="container">
      <h4>Component not found! </h4>
    </div>
  );
};
const DemoRouter = () => {
  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={React} />
          <Route path="/home" component={Home} />
          <Route path="/person" component={Person} />
          <Route path="/about" component={About} />
          <Route component={ComponentNotFound} />
        </Switch>
      </Router>
    </div>
  );
};
const Header = () => {
  return (
    <nav>
      <ul className="nav nav-pills nav-fill bg-dark text-whight">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            React
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/home">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/person">
            Person
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DemoRouter;
