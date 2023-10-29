import { useSelector } from "react-redux"
import { TodoList, Todos } from "./components"
import { DragDropContext } from 'react-beautiful-dnd';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
    <Todos/>
    </>
  )
}

export default App
