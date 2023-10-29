import { useDispatch } from 'react-redux'
import { removeTodo, updateTodoStatus } from '../store/todoSlice'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { TiTick } from "react-icons/ti";
import { BiRun } from "react-icons/bi";
import { MdOutlinePendingActions } from "react-icons/md"
import { AiFillDelete } from "react-icons/ai"

function Todo({ title, description, status, id, index, dropId }) {
    const dispatch = useDispatch()
    const removeSingleTodo = () => {
        dispatch(removeTodo({ id }))
    }
    const updateStauts = (stat) => {
        dispatch(updateTodoStatus({ id, status: stat }))
    }
    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="bg-violet-50 m-3 p-4 flex shadow-lg border rounded-md px-5">
                    <div className='w-full'>
                        <h3 className={`text-violet-400 text-2xl font-bold my-3 ${status == 'COMPLETE' ? 'line-through' : ''}`}>
                            {title}
                        </h3>
                        <p className={`text-md my-3  ${status == 'COMPLETE' ? 'line-through' : ''}`}>{description}</p>
                        <div className='w-full flex gap-2'>
                            <button onClick={removeSingleTodo} className='bg-red-100 text-red-700 p-3 rounded-full w-10 h-10 shadow-sm hover:bg-red-200  hover:scale-110 duration-200'><AiFillDelete /></button>
                            <button onClick={() => updateStauts('WORKING')} className='bg-cyan-100 text-yellow-700 p-3 rounded-full w-10 h-10 shadow-sm hover:bg-cyan-200  hover:scale-110 duration-200'><BiRun /></button>
                            <button onClick={() => updateStauts('COMPLETE')} className='bg-green-100 rounded-full text-green-700 p-3  w-10 h-10 hover:bg-green-200 hover:scale-110 duration-200'><TiTick /></button>
                            <button onClick={() => updateStauts('PENDING')} className='bg-yellow-100 rounded-full text-yellow-700 p-3 w-10 h-10 shadow-sm hover:bg-yellow-200  hover:scale-110 duration-200'><MdOutlinePendingActions /></button>
                        </div>
                    </div>

                </div>)}
        </Draggable>
    )
}

export default Todo