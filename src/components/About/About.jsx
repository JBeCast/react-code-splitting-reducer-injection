import React from "react";
import { connect } from "react-redux";

import styles from "../../styles";

const About = ({ dispatch, count }) => {
  const decrement = () => dispatch({type: 'ABOUT_SUB'});
  const increment = () => dispatch({type: 'ABOUT_ADD'});

  return (
    <div>
      <h2>About</h2>
      
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

const mapStateToProps = ({ about }) => ({ count: about.count });

// const mapDispatchToProps = {}

export default connect(mapStateToProps)(About);
