import { ADD, EDIT, REMOVE } from "../actions";

const initialState = {
    todos: [],
    count: 0
}

//reducer

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return Object.assign({}, state, state.todos.push(action.value, state.count), state.count++);
        case EDIT:
            return Object.assign({}, state, state.todos[action.id] = action.value);
        case REMOVE:
            return Object.assign({}, state, state.todos.splice(action.id, 1));
        default:
            return state;
    }
}