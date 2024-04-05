import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "../reducer/rootReducer";
import thunk from 'redux-thunk';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware(thunk)) 
    // composeEnhancers: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
)