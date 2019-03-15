const initialState = {
  count: 42,
}

const aboutHandlers = {
  'ADD': state => ({ ...state, count: state.count + 1}),
  'SUB': state => ({ ...state, count: state.count - 1}),
};

const aboutReducer = (state = initialState, action) => (
  aboutHandlers[action.type]
    ? aboutHandlers[action.type](state, action)
    : state
);

export default aboutReducer;
