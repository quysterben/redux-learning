import AddComponent from "./components/AddComponent";
import TodosList from "./components/TodosList";

function App() {
    return (
        <div
            style={{
                margin: "80px",
                width: "800px",
                height: "800px",
                backgroundColor: "lightblue",
            }}
        >
            <AddComponent></AddComponent>
            <hr></hr>
            <TodosList></TodosList>
        </div>
    );
}

export default App;
