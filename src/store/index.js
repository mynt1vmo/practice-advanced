import { createStore, combineReducers } from "redux";
import reducerTodo from "../reducer/Todo";
import reducerQuote from "../reducer/Quote";

const store = createStore(combineReducers({
        todo: reducerTodo,
        quote: reducerQuote

    })

);

export default store;