import {useState} from 'react';
import styles from './App.css' ;

const App = (props)=>{

 const [item,setItem] = useState('');
 const [todolist,setTodoList] = useState([]);
 
 const handleSubmit = (e)=>{
   e.preventDefault();
   const list = [...todolist, item];
   setTodoList(list)
 }
 
const currentTodos = todolist.map((todo,index)=>
    <tr key={index}><td width='20%'><input type='checkbox' checked></input></td><td width='80%'>{todo}</td></tr>);
 
 return (
   <div className="contenedor">
    <form onSubmit={handleSubmit}>
        <label for="todoname">Tarea</label>
        <input type="text"
                id="todoitem"
                name="todoname"
                value={item}
                onChange={(e)=>{setItem(
                  e.target.value)}}
                placeholder="what to do?" />
        <button type="submit">Add</button>  
    </form>
    <div className='lista'>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>Actividades Realizadas</th>
          </tr>
        </thead>
        <tbody>
        {currentTodos} 
        </tbody>
      </table>
    </div> 
   </div>
 );  // return
}  // clase de función

export default App;