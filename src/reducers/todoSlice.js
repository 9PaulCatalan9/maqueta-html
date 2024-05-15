import {createSlice} from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:"todos", //estados de tareas
    initialState:{
        value:[]
    },

    // esctructura que se debe mantener
    reducers:{
        addTodo:(state,action)=>{
            state.value.push(action.payload)
            fetch("http://localhost:3001/tasks/addTask",{

                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"9MyAPIkey9"
                },
                body: JSON.stringify(action.payload)
            }).catch(err=>{
                console.log(err)
            })
        },
        deleteTodo:(state,action)=>{
            console.log(action)
           // const todoComplete=state.value.find((tarea)=>tarea.id===action.payload)
            state.value=state.value.filter((tarea)=>tarea.id!==action.payload)
            fetch("http://localhost:3001/tasks/removeTask/"+action.payload,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"9MyAPIkey9"
                },
            }).catch(err=>{
                console.log(err)
            })
          /*  if(!state.todoComplete){
                state.todoComplete=[]
            }
           state.todoComplete.push(todoComplete)*/
        },
        initAddTodo:(state,action)=>{
            console.log(action.payload)
            state.value.push(action.payload)
        }
    }
})

export const{addTodo,deleteTodo,initAddTodo}=todoSlice.actions; //exportar a todo el proyecto
export const selectTodo=(state)=>state.tarea.value
export default todoSlice.reducer; //Por default el reducer