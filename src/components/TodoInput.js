import React, { useRef } from 'react'

function TodoInput(props) {
  const {addTodoItem} = props
  const inputRef = useRef()

  const addTodo = () => {
    const _val = inputRef.current.value.trim()

    if(_val.length === 0) {return}

    addTodoItem({
      id: new Date().getTime(),
      completed: false,
      content: _val
    })

    inputRef.current.value = ''
  }

  return (
    <div>
      <input type="text" ref={inputRef}/>
      <button onClick={addTodo}>增加</button>
    </div>
  )
}

export default TodoInput