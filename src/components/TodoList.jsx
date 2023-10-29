import { useDispatch, useSelector } from "react-redux"
import Todo from "./Todo"
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { removeTodo, updateTodoStatus } from '../store/todoSlice'
import TodoCategory from "./TodoCategory";
import { combineReducers } from "@reduxjs/toolkit";
import toast, { Toaster } from 'react-hot-toast';

function TodoList() {
  const dispatch = useDispatch()
  const PendingTodos = useSelector(state => state.todos.filter((todo) => todo.status == 'PENDING'))
  const workingTodos = useSelector(state => state.todos.filter((todo) => todo.status == 'WORKING'))
  const CompleteTodos = useSelector(state => state.todos.filter((todo) => todo.status == 'COMPLETE'))

  const updateStauts = (id, stat) => {
    dispatch(updateTodoStatus({ id, status: stat ,read:true}))
  }

  const handleDragItem = (result) => {
    let message = ''
    if (result.destination.droppableId == 'PENDING') {
      message = 'Todo is added in Pending !'
      toast.success(message,{
        icon:'😒'
      });
    } else if (result.destination.droppableId == 'COMPLETE') {
      message = 'Todo is Completed !'
      toast.success(message,{
        icon: '👏😀',
      });
    } else if (result.destination.droppableId == 'WORKING') {
      message = 'Todo is Ongoing !'
      toast.success(message,{
        icon:'👷‍♂️'
      });
    }
    console.log(result)
    updateStauts(result.draggableId, result.destination.droppableId)
  }

  return (
    <DragDropContext onDragEnd={handleDragItem}>
      <div className='mt-10 flex md:flex-row flex-col w-3/4 m-auto md:justify-center gap-10 items-start min-h-screen'>
        <TodoCategory key={1} title='Pending' titleClass="bg-yellow-100 text-yellow-700" todos={PendingTodos} droppableId='PENDING' />
        <TodoCategory key={2} title='working' titleClass="bg-cyan-100 text-cyan-700" todos={workingTodos} droppableId='WORKING' />
        <TodoCategory key={3} title='Completed' titleClass="bg-green-200 text-green-700" todos={CompleteTodos} droppableId='COMPLETE' />
      </div>
    </DragDropContext>
  )
}

export default TodoList