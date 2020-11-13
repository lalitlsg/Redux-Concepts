const redux = require("redux");
const createStore = redux.createStore;

//define constant that indicates type of action
const BUY_CAKE = "BUY_CAKE";

//define action - object with type property
//define action creator - buyCake()

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action"
  };
}

//Reducers

const initialState = {
  noOfCakes: 10
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1
      };
    default:
      return state;
  }
};

//create store

const store = createStore(reducer);

console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe();
