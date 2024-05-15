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
            fetch("http://localhost:3001/goals/addGoal",{

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
        deleteMeta:(state,action)=>{
            console.log(action)
           // const metaComplete=state.value.find((meta)=>meta.id===action.payload)
            state.value=state.value.filter((tarea)=>tarea.id!==action.payload)
            fetch("http://localhost:3001/goals/removeGoal/"+action.payload,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"9MyAPIkey9"
                },
            }).catch(err=>{
                console.log(err)
            })
          /*  if(!state.metaComplete){
                state.metaComplete=[]
            }
           state.metaComplete.push(metaComplete)*/
        },
        initAddMeta:(state,action)=>{
            console.log(action.payload)
            state.value.push(action.payload)
        }
    }
})

export const{addMeta,deleteMeta, initAddMeta}=metaSlice.actions; //exportar a todo el proyecto
export const selectMeta=(state)=>state.meta.value
export default metaSlice.reducer; //Por default el reducer