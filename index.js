const redux = require("redux");
const createStore = redux.createStore;

//define constant that indicates type of action
const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAMES = "BUY_ICE_CREAMES";

//define action - object with type property
//define action creator - buyCake()

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action"
  };
}

function buyIceCreams() {
  return {
    type: BUY_ICE_CREAMES
  };
}

//Reducers

const initialState = {
  noOfCakes: 10,
  noOfIceCreams: 20
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1
      };
    case BUY_ICE_CREAMES:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams - 1
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
store.dispatch(buyIceCreams());
store.dispatch(buyIceCreams());

unsubscribe();
