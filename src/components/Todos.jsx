import { useEffect } from 'react';
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import { useDispatch, useSelector } from 'react-redux';
import { setTodos } from '../store/todoSlice';

function Todos() {
    const dispatch = useDispatch()
    const todos= useSelector(state=>state.todos)
    useEffect(() => {
        const todosData =  localStorage.getItem('todos') || '[]'
        dispatch(setTodos(JSON.parse(todosData)))
      }, []);
    useEffect(() => {
        console.log('item set')
        localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos]);
      
    return (
        <div className='bg-violet-50'>
            <h2 className='bg-violet-50 text-center font-sans text-4xl text-violet-700 p-12 font-bold'>Todo</h2>
            <AddTodo />
            <TodoList />
        </div>
    )
}

export default Todos