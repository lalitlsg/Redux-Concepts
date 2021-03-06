const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const logger = reduxLogger.createLogger();

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

// const initialState = {
//   noOfCakes: 10,
//   noOfIceCreams: 20
// };

const initialCakeState = {
  noOfCakes: 10
};

const initialIceCreameState = {
  noOfIceCreams: 20
};

//Reducers

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         noOfCakes: state.noOfCakes - 1
//       };
//     case BUY_ICE_CREAMES:
//       return {
//         ...state,
//         noOfIceCreams: state.noOfIceCreams - 1
//       };
//     default:
//       return state;
//   }
// };

const cakeReducer = (state = initialCakeState, action) => {
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

const iceCreameReducer = (state = initialIceCreameState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAMES:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams - 1
      };

    default:
      return state;
  }
};

//combine reducers

const rootReducers = combineReducers({
  cake: cakeReducer,
  iceCreame: iceCreameReducer
});

//create store

const store = createStore(rootReducers, applyMiddleware(logger));

console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCreams());
store.dispatch(buyIceCreams());

unsubscribe();
