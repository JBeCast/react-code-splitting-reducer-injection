import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";

import configStore, { injectorCreator } from "./reduxUtils";

const store = configStore({});
const injector = injectorCreator(store);

const About = lazy(() =>
  import(/* webpackChunkName: "about" */ "./components/About/About")
);
const Home = lazy(() =>
  import(/* webpackChunkName: "home" */ "./components/Home/Home")
);
const Topics = lazy(() =>
  import(/* webpackChunkName: "topics" */ "./components/Topics/Topics")
);

const App = () => {
  return (
    <Provider store={store}>
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

          <hr />

          <Suspense fallback={<div> Loading ...</div>}>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/about" render={() => <About injector={injector} />} />
            <Route
              path="/topics"
              render={props => <Topics injector={injector} {...props} />}
            />
          </Suspense>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
