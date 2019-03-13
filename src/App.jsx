import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore, combineReducers} from "redux";

import aboutReducer from "./components/About/reducer";
import topicsReducer from "./components/Topics/reducer";

const store = createStore(
  combineReducers({
    about: aboutReducer,
    topics: topicsReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const About = lazy(() =>
  import(/* webpackChunkName: "about" */ "./components/About/About"));
const Home = lazy(() =>
  import(/* webpackChunkName: "home" */ "./components/Home/Home"));
const Topics = lazy(() =>
  import(/* webpackChunkName: "topics" */ "./components/Topics/Topics"));

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

          <hr/>

          <Suspense fallback={< div > Loading ...</div>}>
            <Route exact path="/" render={() => <Home/>}/>
            <Route path="/about" render={() => <About/>}/>
            <Route path="/topics" render={props => <Topics {...props}/>}/>
          </Suspense>

        </div>
      </Router>
    </Provider>
  );
}

export default App;
