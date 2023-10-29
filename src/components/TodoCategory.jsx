import { useDispatch, useSelector } from "react-redux"
import Todo from "./Todo"
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { removeTodo, updateTodoStatus } from '../store/todoSlice'
import { useState } from "react";

function TodoCategory({title,titleClass,todos=[],droppableId}) {
  return (
    <div className="capitalize w-full flex flex-col bg-white shadow-md rounded-md">
          <h2 className={`text-xl font-bold mx-5 my-3 text-center  p-3 rounded-2xl  ${titleClass}`}>{title} ({todos.length})</h2>
          <Droppable droppableId={droppableId}>
            {(provided,snapshot) => (
              <div  {...provided.droppableProps} ref={provided.innerRef} className={`${snapshot.isDraggingOver?'bg-gray-100':''}`}>
                {
                 todos.map((todo, index) => {
                    return <Todo index={index} read={todo.read} key={todo.id} title={todo.title} description={todo.description} id={todo.id} status={todo.status} />
                  })
                }
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
  )
}

export default TodoCategory