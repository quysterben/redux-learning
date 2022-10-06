import TodoComponent from "./TodoComponent";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";

function TodosList() {
    const todos = useSelector((state) => state.todos);

    return (
        <ListGroup as="ol" numbered>
            {todos.map((todo, index) => (
                <TodoComponent key={todo.id} data={todo} />
            ))}
        </ListGroup>
    );
}

export default TodosList;
