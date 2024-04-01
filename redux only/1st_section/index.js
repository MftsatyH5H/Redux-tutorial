const redux = require('redux');

//initial state
const initialState = {
    numberOfCakes: 10,
}

//naming types
const cakeOrdered = 'CAKE_ORDERED';
const cakeResupplied = 'CAKE_RESUPPLIED';

//action functions
function orderCake (amount) {
    return{
        type: cakeOrdered,
        payload: amount
    }
}

function resupplyCake (amount) {
    return {
        type: cakeResupplied,
        payload: amount
    }
}

// reducer functions
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case cakeOrdered:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - action.payload
            }
        case cakeResupplied:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes + action.payload
            }
        default:
            return state;
    }
}
//Create store
const store = redux.createStore(reducer);

console.log('initial state:', store.getState());

//Subscribe for more videos and hit the like button ;)
store.subscribe(() => console.log('updated state:', store.getState()));

store.dispatch(orderCake(3));

store.dispatch(resupplyCake(2));
