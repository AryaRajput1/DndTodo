import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos:[],
}

const todo = createSlice({
    name:'Todo',
    initialState,
    reducers:{
        setTodos:(state,action)=>{
            state.todos=action.payload
        },
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                title:action.payload.title,
                description:action.payload.description,
                status:action.payload.status,
                read: action.payload.read
            }
            state.todos.push(todo);

        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter(todo=> todo.id!=action.payload.id)
        },
        updateTodo:(state,action)=>{

        },
        updateTodoStatus:(state,action)=>{
            const todos=[];
            console.log('action',action.payload)
            state.todos.forEach(todo => {
                if(todo.id==action.payload.id){
                    todo.status=action.payload.status
                    todo.read=action.payload.read
                }
                todos.push(todo)
            });
            state.todos = todos
        }
    }
})

export const {addTodo,removeTodo,updateTodoStatus,setTodos} = todo.actions
export default todo.reducer