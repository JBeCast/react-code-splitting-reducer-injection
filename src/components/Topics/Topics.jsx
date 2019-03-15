import React, { Component } from "react";
import {Route, Link} from "react-router-dom";
import {connect} from "react-redux";

import reducer from "./reducer";
import styles from "../../styles";
import Topic from "./Topic";

class Topics extends Component {
  componentDidMount() {
    this.props.injector('common', reducer);
  }

  render() {
    const { count, decrement, increment, match } = this.props;
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
  }
};

const mapState = ({ common }) =>
  common ? { count: common.count } : { count: 0 };

const mapDispatch = dispatch => ({
  decrement: () => dispatch({ type: "TOPICS_SUB" }),
  increment: () => dispatch({ type: "TOPICS_ADD" })
});

export default connect(mapState, mapDispatch)(Topics);
