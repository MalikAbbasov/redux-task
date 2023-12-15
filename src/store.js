import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './components/counter/counterSlice'
import todoReducer from './components/todo/todoSlice'
import calculatorReducer from "./components/Calculator/calculatorSlice"
export default configureStore({
  reducer: {
    counter:counterReducer,
    todo:todoReducer,
    calculator:calculatorReducer
  }
})