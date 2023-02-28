import {createStore} from 'redux';

// Store Current State
const currentState: Store = {
  isPin: false,
  device: null,
};

// Store Reducer
const reducer = (state: Store = currentState, action: Dispatch): Store => {
  return {
    ...state,
    [action?.type]: action?.payload,
  };
};

// Create Store
const store = createStore(reducer);

// Store Export
export default store;
