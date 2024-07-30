import{createStore,combineReducers} from "redux"
import { tokenreducer } from "./Logins/reducer";



// export const store=createStore(reducer,{count:0,
// todo:[]})
const rootreducer=combineReducers({
    token:tokenreducer
})

export const store=createStore(
    rootreducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);