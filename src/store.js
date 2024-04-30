// maneja todos los estados de nuestro proyecto
import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./reducers/todoSlice"
import metasReducer from "./reducers/metasSlice"
export default configureStore({
    reducer:{
        todos:todoReducer,
        metas:metasReducer
    }

})