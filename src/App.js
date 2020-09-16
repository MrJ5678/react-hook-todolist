import React, { useState, useCallback, useEffect } from 'react';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    const _todoList = JSON.parse(localStorage.getItem('todoList') || '[]')
    setTodoList(_todoList)
  }, [])

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList])

  const addTodoItem = useCallback((todoItem) => {
    setTodoList(todoList => [todoItem, ...todoList])
  }, [])

  const setCompleted = useCallback((id) => {
    setTodoList(todoList => (
      todoList.map(item => {
        if(item.id === id) {
          item.completed = !item.completed
        }
        return item
      })
    ))
  }, [])

  const removeTodoItem = useCallback((id) => {
    setTodoList(todoList => (
      todoList.filter(item => item.id !== id)
    ))
  }, [])

  return (
    <div className="App">
      <TodoInput addTodoItem={addTodoItem} />
      <TodoList todoList={todoList} setCompleted={setCompleted} removeTodoItem={removeTodoItem}/>
    </div>
  );
}

export default App;
