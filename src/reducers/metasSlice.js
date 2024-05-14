import {createSlice} from "@reduxjs/toolkit";

export const metaSlice = createSlice({
    name:"meta", //estados de tareas
    initialState:{
        value:[]
    },

    // esctructura que se debe mantener
    reducers:{
        addMeta:(state,action)=>{
            state.value.push(action.payload)
        },
        deleteMeta:(state,action)=>{
            console.log(action)
            const metaComplete=state.value.find((meta)=>meta.id===action.payload)
            state.value=state.value.filter((meta)=>meta.id!==action.payload)
            if(!state.todoComplete){
                state.todoComplete=[]
            }
            state.todoComplete.push(metaComplete)
        
        }

    }
})

export const{addMeta,deleteMeta}=metaSlice.actions; //exportar a todo el proyecto
export const selectMeta=(state)=>state.meta.value
export default metaSlice.reducer; //Por default el reducer