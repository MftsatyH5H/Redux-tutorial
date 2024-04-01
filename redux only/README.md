# Redux Revision
## Main Principles
- redux have 3 main principles: action -> reducer -> store.
- action: holds the action itself that changes the state, and returns an object, this object is sent to the reducer.
- reducer: takes the object from the action and changes the application from the old state to the new state.
- store: holds the entire application state in one object, allows access to current state using getState(), and allows method dispatch
- basically its like a cake shop, if you want to buy a cake, you order one, this is called an action, you talk to the shop owner and he takes one cake from the shelf, the shop owner is the reducer, and the shelf or the general store is the "store".
## Basic Redux(1st folder)

### Initial state
- First, you create an initial state, where you put the first state of your javascript application.

### Naming types
- Secondly, you create type names for your action function to use the later, you can use strings only, but to avoid error when calling these types, we put them in constants.


### Action functions
- You create functions that return objects that have a type inside, and a payload if its quantity, or any value tbh.
- These action functions are the order you make to the cake shop, you make an action function for each action you want to make in your application

### Reducer functions
- You then make a reducer function that takes the initial state of the application that you made, and the action function reference as a parameter.
- Handle the different types of action states inside the reducer, using a switch case is the default, for each type, return a object.
- for better handling, for each object you return use ...state, to not change the entire state each time you make an action for the state.

### Store
- To create a store, use createStore() function, and then pass the reducer function to it. 
- DO NOT PASS THE ACTION FUNCTION ITSELF, PASS THE FUNCTION REFERENCE, (bad ex: createStore(reducer()), good ex: createStore(reducer)).


