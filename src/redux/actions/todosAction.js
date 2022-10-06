import { ADDTODO, TOGGLETODO, DELETETODO } from "../types";

export const addTodo = (content) => {
    return {
        type: ADDTODO,
        payload: content,
    };
};

export const toggleTodo = (id) => {
    return {
        type: TOGGLETODO,
        payload: id,
    };
};

export const deleteTodo = (id) => {
    return {
        type: DELETETODO,
        payload: id,
    };
};
