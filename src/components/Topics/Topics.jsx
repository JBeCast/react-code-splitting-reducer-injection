import React from "react";
import {Route, Link} from "react-router-dom";
import {connect} from "react-redux";

import styles from "../../styles";

const Topics = ({match, dispatch, count}) => {
  const decrement = () => dispatch({type: 'TOPICS_SUB'});
  const increment = () => dispatch({type: 'TOPICS_ADD'});

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic}/>
      <Route exact path={match.path} render={() => <h3>Please select a topic.</h3>}/>

      <hr/>

      <h2>Counter</h2>
      <div style={styles}>
        <h4>{count}</h4>
        <div>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
};

const Topic = ({match}) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const mapStateToProps = ({ topics }) => ({count: topics.count});

export default connect(mapStateToProps)(Topics);
