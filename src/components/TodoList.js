import React from 'react'

function TodoList(props) {
  const {todoList, setCompleted, removeTodoItem } = props

  return (
    <ul>
      {
        todoList.map((item, index) => (
          <li key={index}>
            <input 
              type="checkbox"
              checked={item.completed}
              onChange={() => setCompleted(item.id)}
            />
            <span style={{ textDecoration: item.completed ? 'line-through' : "none" }}>{item.content}</span>
            <button onClick={() => removeTodoItem(item.id)}>删除</button>
          </li>
        ))
      }
    </ul>
  )
}

export default TodoList