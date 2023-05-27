import "./listItem.css"
import { TbCheck } from 'react-icons/tb';
import { TbTrash } from 'react-icons/tb';

const ListItem = ({text, deleteTodo, isChecked, toggleChecked}) => {
  return (
    <div className="todo">
        <div className={`${isChecked ? "todo_circle" : "todo_circle_unchecked" }`} onClick={toggleChecked}>
            {isChecked && <TbCheck />}
        </div>
        <div className={` ${isChecked ? "todo_text_checked" : "todo_text"}`}>
            {text}
        </div>

        <div className="todo_delete" onClick={deleteTodo}>
            <TbTrash />
        </div>
    </div>
  )
}

export default ListItem