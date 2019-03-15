import React, {Component} from "react";
import { connect } from "react-redux";

import reducer from "./reducer";
import styles from "../../styles";

class About extends Component {
  componentDidMount() {
    this.props.injector('about', reducer);
  }

  render() {
    const { count, decrement, increment } = this.props;
    return (
      <div>
        <h2>About</h2>
        <hr />
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

const mapState = ({ about }) =>
  about ? { count: about.count } : { count: 0 };

const mapDispatch = dispatch => ({
  decrement: () => dispatch({ type: "ABOUT_SUB" }),
  increment: () => dispatch({ type: "ABOUT_ADD" }),
});

export default connect(mapState, mapDispatch)(About);
