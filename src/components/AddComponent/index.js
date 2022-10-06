import { useDispatch } from "react-redux";
import React from "react";
import { addTodo } from "../../redux/actions/todosAction";

function AddComponent() {
    const dispatch = useDispatch();
    let inputVal = React.createRef();
    let handleSubmit = (e) => {
        dispatch(addTodo(inputVal.current.value));
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputVal} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default AddComponent;
