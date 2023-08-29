import {
  ADD_TODO,
  IS_ADDING,
  DELETE_TODO,
  MARK_AS_COMPLETED,
  IS_EDITING,
  UPDATE_TODO
} from "redux/actions/actionTypes"

export const initialState = {
  todoItems: [],
  visibilityFiler: "SHOW_ALL",
  isAdding: false,
  isEditing:false
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const { id, text, createdAt, completed } = action.payload
      return {
        ...state,
        todoItems: [
          ...state.todoItems,
          {
            id,
            text,
            createdAt,
            completed,
          },
        ],
      }
    case IS_ADDING:
      const { isAdding } = action.payload
      return {
        ...state,
        isAdding,
      }

    case IS_EDITING:
      const { isEditing } = action.payload
      return {
        ...state,
        isEditing,
      }
    
    case DELETE_TODO:
      const { deleteTodoId } = action.payload
      const newTodoList = state.todoItems.filter(
        (item) => item.id !== deleteTodoId
      )
      return {
        ...state,
        todoItems: newTodoList,
      }

    case MARK_AS_COMPLETED:
      const { markCompletedTodo } = action.payload
      const updatedTasks = state.todoItems.map((item) =>
        item.id === markCompletedTodo.id ? { ...item, completed: true } : item
      )
      return {
        ...state,
        todoItems: updatedTasks,
      }
    
    case UPDATE_TODO:
      const { updatedTodo ,taskTitle} = action.payload
      const editedTasks = state.todoItems.map((item) =>
        item.id === updatedTodo.id ? { ...item, text: taskTitle } : item
      )
      return {
        ...state,
        todoItems :editedTasks
      }
      
    default:
      return state
  }
  
}
