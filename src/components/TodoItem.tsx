import { ITodo } from "../type/data"

interface ITodoItem extends ITodo { 

removeTodo: (id: number) => void 
toggleTodo: (id: number) => void 

}

const TodoItem: React.FC<ITodoItem> = (props) => { 

  const { id, title, complete, removeTodo, toggleTodo } = props;
  return (
    <div>
      <input type="checkbox" checked={complete} onChange={() => toggleTodo(id)} />
      {title}
      <button onClick={() => removeTodo(id)} style={{
        background: "transparent",
        border: "none",
        outline: "none",
        color: "red"
      }}>x</button>
    </div>
  );
}

export { TodoItem }