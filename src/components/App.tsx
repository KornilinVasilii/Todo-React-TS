import { useState, useEffect, useRef } from "react";
import { ITodo } from "../type/data";
import { TodoList } from "./TodoList";
import s from './style.module.css'

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => { 

    setValue(e.target.value);
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if(e.key === 'Enter') addTodo()
  };

  const addTodo = () => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          complete: false,
        },
      ]);
      setValue("");
    }
  };

  const removeTodo = (id: number): void => { 
    setTodos(todos.filter(todos => todos.id !== id))
  }
  

  const toggleTodo = (id: number): void => {
    setTodos(todos.map(todo => { 
      if (todo.id !== id) return todo
      
      return {
        ...todo,
        complete: !todo.complete
      }
    }))
  };





  useEffect(() => { 
    if (inputRef.current) inputRef.current.focus();
  },[])

  return (
    <div className={s.wrapper } >
      <div >
        <input
          placeholder="Введите задачу"
          className={ s.input}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        <button
          
          className={ s.button }
          onClick={addTodo}
        >
          Добавить
        </button>
      </div>
      <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
};
export { App };
