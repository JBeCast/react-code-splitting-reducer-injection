const initialState = {
  count: 42,
}

const aboutHandlers = {
  'ABOUT_ADD': state => ({ ...state, count: state.count + 1}),
  'ABOUT_SUB': state => ({ ...state, count: state.count - 1}),
};

const aboutReducer = (state = initialState, action) => (
  aboutHandlers[action.type]
    ? aboutHandlers[action.type](state, action)
    : state
);

export default aboutReducer;
