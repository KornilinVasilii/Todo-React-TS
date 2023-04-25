import { ITodo } from "../type/data"
import s from './style.module.css'
interface ITodoItem extends ITodo { 

removeTodo: (id: number) => void 
toggleTodo: (id: number) => void 

}

const TodoItem: React.FC<ITodoItem> = (props) => { 

  const { id, title, complete, removeTodo, toggleTodo } = props;
  return (
    <div className={ s.todo_item}>
      <input
        className={ s.checkbox }
        type="checkbox"
        checked={complete}
        onChange={() => toggleTodo(id)}
      />
      {title}
      <button
        onClick={() => removeTodo(id)}
        style={{
          background: "transparent",
          border: "none",
          outline: "none",
          color: "red",
        }}
      >
        ❌
      </button>
    </div>
  );
}

export { TodoItem }