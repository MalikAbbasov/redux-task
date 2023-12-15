
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addTodo, removeItem } from './components/todo/todoSlice';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Calculator from './components/Calculator/Calculator';
function App() {

const dispatch = useDispatch()


const [inputVal, setInputVal] = useState("")
const todo = useSelector((state)=>state.todo.value)


  return (
    <div className="App">

        <input type="text" value={inputVal} onChange={(e)=>setInputVal(e.target.value)}/>
        <button onClick={()=>dispatch(addTodo({value:inputVal,id:uuidv4()}))}>add</button>
        <div>
          {
            todo.map((x)=>(<li key={uuidv4()}>{x.value}</li>))
          }
        </div>
        <ul>
        {todo.map((x) => (
          <button key={x.id} onClick={() => dispatch(removeItem(x.id))}>
            del
          </button>
        ))}
      </ul>

        <hr /><br /><hr /><br /><hr /><br />

<Calculator/>
    </div>
    
  );
}

export default App;
