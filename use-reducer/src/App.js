import React, {useState, useReducer} from 'react';
import Todo from './Todo.js';

export const ACTIONS ={
  // INCREMENT:'increment',
  // DECREMENT:'decrement'
  ADD_TODO:"add-todo",
  TOGGLE_TODO:"toggle-todo",
  DELETE_TODO:"delete-todo"
}

function reducer(todos, action){
  // switch(action.type){
  //   case ACTIONS.INCREMENT:
  //     return {count:count+1}
  //   case ACTIONS.DECREMENT:
  //     return {count:count-1}
  //   default:
  //     return state;
  // }
  switch(action.type){
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo =>{
        if(todo.id === action.payload.id){
          return {...todo, complete:!todo.complete};
        }else{
          return todo;
        }
      })
      case ACTIONS.DELETE_TODO:
        return todos.filter(todo => todo.id!==action.payload.id)
      default:
        return todos
  }
}

function newTodo(name){
  return {id:Date.now(), name:name , complete:false}
}

const App=()=> {
  const [todos, dispatch] = useReducer(reducer,[])
  const [name, setName] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    dispatch({type: ACTIONS.ADD_TODO, payload:{name:name}})
    setName('');
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} />
      </form>
      {
        todos.map(todo =>{
         return  <Todo key={todo.id} todo={todo} dispatch ={dispatch}/>
        })
      }
    </>
  );
}

export default App;


/* 
if the init sate is an object
const App =()=>{
  const [state, setState] = useState({count:4, theme:"blue"})

  const decremenCount(){
    setState(preState =>{
      return {...prevState, count:prevState.count-1}  //setSate will overwrite the state if no ...prevSate
    })
  }
}
*/
