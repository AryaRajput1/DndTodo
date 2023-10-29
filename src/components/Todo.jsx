import { useDispatch } from 'react-redux'
import { removeTodo, updateTodoStatus } from '../store/todoSlice'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { TiTick } from "react-icons/ti";
import { BiRun } from "react-icons/bi";
import { MdOutlinePendingActions } from "react-icons/md"
import { AiFillDelete } from "react-icons/ai"
import toast from 'react-hot-toast';

function Todo({ title, description, status, id, index, dropId, read ,customMessage='New'}) {
    const dispatch = useDispatch()
    const removeSingleTodo = () => {
       const message = 'Todo is Deleted Successfully !'
      toast.error(message,{
        icon:'😒'
      });
        dispatch(removeTodo({ id }))
    }
    const updateStauts = (stat) => {
        dispatch(updateTodoStatus({ id, status: stat,read:true }))
        let message = ''
    if (stat!=status && stat == 'PENDING') {
      message = 'Todo is added in Pending !'
      toast.success(message,{
        icon:'😒'
      });
    } else if (stat!=status && stat == 'COMPLETE') {
      message = 'Todo is Completed !'
      toast.success(message,{
        icon: '👏😀',
      });
    } else if (stat!=status && stat == 'WORKING') {
      message = 'Todo is Ongoing !'
      toast.success(message,{
        icon:'👷‍♂️'
      });
    }
    }
    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="bg-violet-50 m-3 p-4 flex shadow-lg border rounded-md px-5 relative max-w-md break-all">
                    <div className='w-full'>
                        {read}
                    {!read && <p className="bg-pink-200 text-pink-800 p-1 font-bold -right-2 rounded-md absolute -top-2">{customMessage}</p>}
                        
                        <h3 className={`text-violet-400 text-2xl font-bold my-3 ${status == 'COMPLETE' ? 'line-through' : ''}`}>
                            {title} 
                        </h3>
                        <p className={`text-md my-3  ${status == 'COMPLETE' ? 'line-through' : ''}`}>{description}</p>
                        <div className='w-full flex gap-2'>
                            <button onClick={removeSingleTodo} className='bg-red-100 text-red-700 p-3 rounded-full w-10 h-10 shadow-sm hover:bg-red-200  hover:scale-110 duration-200'><AiFillDelete /></button>
                            <button onClick={() => updateStauts('PENDING')} className='bg-yellow-100 rounded-full text-yellow-700 p-3 w-10 h-10 shadow-sm hover:bg-yellow-200  hover:scale-110 duration-200'><MdOutlinePendingActions /></button>
                            <button onClick={() => updateStauts('WORKING')} className='bg-cyan-100 text-cyan-700 p-3 rounded-full w-10 h-10 shadow-sm hover:bg-cyan-200  hover:scale-110 duration-200'><BiRun /></button>
                            <button onClick={() => updateStauts('COMPLETE')} className='bg-green-100 rounded-full text-green-700 p-3  w-10 h-10 hover:bg-green-200 hover:scale-110 duration-200'><TiTick /></button>
                        </div>
                    </div>

                </div>)}
        </Draggable>
    )
}

export default Todo