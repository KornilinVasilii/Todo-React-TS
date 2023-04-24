import { ITodo } from "../type/data";
import { TodoItem } from "./TodoItem";

interface ITodoListProps {
  items: ITodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}
const TodoList: React.FC<ITodoListProps> = (props) => {

  const { items, toggleTodo, removeTodo } = props;
  return (
    <div>
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          {...todo}
        />
      ))}
    </div>
  );
};

export { TodoList };
