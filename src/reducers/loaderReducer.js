const defaultState = {
  loader: false,
}

export default function reducer(state = defaultState, action) {
    switch(action.type) {

      case 'LOADER': {
        const loader = action.payload;
        return {
          ...state, ...loader
        };
      }
      default:
        return state;
    }

  return state;
}
