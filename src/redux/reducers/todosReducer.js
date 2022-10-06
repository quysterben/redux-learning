import { ADDTODO, DELETETODO, TOGGLETODO } from "../types";

const initialState = [
    { id: 0, content: "Hoc Redux", completed: false },
    { id: 1, content: "Hoc React", completed: false },
    { id: 2, content: "Hoc ExpressJS", completed: false },
];

const nextId = (initialState) => {
    const maxId = initialState.reduce(
        (maxId, todo) => Math.max(todo.id, maxId),
        -1
    );
    return maxId + 1;
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTODO: {
            return [
                ...state,
                {
                    id: nextId(state),
                    content: action.payload,
                    completed: false,
                },
            ];
        }
        case TOGGLETODO: {
            return state.map((todo) => {
                if (todo.id !== action.payload) {
                    return todo;
                } else {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
            });
        }
        case DELETETODO: {
            let result = [];
            state.forEach((todo) => {
                if (todo.id !== action.payload) {
                    result.push(todo);
                }
            });
            return result;
        }
        default:
            return state;
    }
};

export default todosReducer;
