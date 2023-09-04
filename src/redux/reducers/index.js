import { combineReducers } from "redux"
import todosReducer from "redux/reducers/todosReducer"

const rootReducer = combineReducers({
  todos: todosReducer,
})

export default rootReducer
