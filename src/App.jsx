import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const About = lazy(() => import ("./components/About"));
const Home = lazy(() => import("./components/Home"));
const Topics = lazy(() => import ("./components/Topics"));

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr/>

        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" render={() => <Home />}/>
          <Route path="/about" render={() => <About />}/>
          <Route path="/topics" render={props => <Topics {...props} />}/>
        </Suspense>
        
      </div>
    </Router>
  );
}

export default App;
