 import React, {useState, useCallback} from 'react';
 import List from './List'

export default function App(){
  
  const [number, setNumber]= useState(1);
  const [dark, setDark] = useState(false);

  //useMemo just pass array 
  //useCallBack pass all function
  const getItems = useCallback(()=>{
    return [number, number+1, number+2]
  }, [number])

  const theme ={
    backgroundColor:dark?'#333' : '#FFF',
    color: dark?'#FFF':'#333'
  }

return (
  <div style = {theme}>
    <input 
     type="number"
     value={number}
     onChange={e=>setNumber(parseInt(e.target.value))}
    />
    <button onClick={()=>setDark(prevDark =>!prevDark)}>
      Toggle Theme
    </button>
    <List getItems={getItems}/>
  </div>
)
}
