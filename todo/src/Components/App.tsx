import { useState } from 'react'
import { ITodo } from '../Types/data'
import { TodoList } from '../Components/TodoList'
import '../App.css'

const App: React.FC = () => {
    const [text, setText] = useState('')
    const [todos, setTodos] = useState<ITodo[]>([])

    const addTodo = () => {
        setTodos([...todos, {
            id: Date.now(),
            title: text,
            complete: false,
        }])
        setText('')
    }

    const removeTodo = (id: number): void => {
        setTodos(todos.filter(item => item.id !== id))
    }
    const toggeleTodo = (id: number): void => {
        setTodos(todos.map(item => {
            if (item.id !== id) return item

            return {
                ...item,
                complete: !item.complete
            }
        }))
    }
    return (
        <>
            <div className='title'>
                <h3>Todo-list</h3>
            </div>
            <div className='wrapper'>
                <div className='content'>
                    <div>
                        <input value={text} onChange={(e) => setText(e.target.value)}></input>
                        <button onClick={addTodo}>add</button>
                    </div>
                    <div>
                        <TodoList items={todos} removeTodo={removeTodo} toggeleTodo={toggeleTodo} />
                    </div>
                </div>
            </div >
        </>
    )
}
export { App }