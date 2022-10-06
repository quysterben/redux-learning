import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../../../redux/actions/todosAction";
import Button from "react-bootstrap/Button";

function TodoComponent({ data }) {
    const dispatch = useDispatch();

    return (
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            onClick={() => dispatch(toggleTodo(data.id))}
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">
                    <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => dispatch(deleteTodo(data.id))}
                    >
                        delete
                    </Button>
                    {data.content}{" "}
                </div>
            </div>
            {data.completed === true ? (
                <Badge bg="success" pill>
                    DONE
                </Badge>
            ) : (
                <Badge bg="warning" pill>
                    IN PROGRESS
                </Badge>
            )}
            <Badge bg="primary" pill></Badge>
        </ListGroup.Item>
    );
}

export default TodoComponent;
