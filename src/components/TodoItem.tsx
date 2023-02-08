import { ITodo } from "../type/data"

interface ITodoItem extends ITodo { }

const TodoItem: React.FC<ITodoItem> = (props) => { 

  const { id,title,complete } = props
  return <div></div>
}

export { TodoItem }