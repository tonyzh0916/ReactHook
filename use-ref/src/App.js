import React, {useState, useEffect, useRef} from 'react';


//simple use case-----------------------------------------------
// export default function App(){
//   const [name, setName] = useState();
//   const renderCount = useRef(0);
//  !!!!!!!!! useRef will return an object like {current: value}
  //useRef is very very similar with state and that you can store a previous value 
  //and it persistes between different renders but it does not cause you to re-render like state does
//   useEffect(()=>{
//     renderCount.current=renderCount.current+1;
//   })

//   return (
//     <>
//     <input value={name} onChange={e=>setName(e.target.value)}></input>
//     <div>My name is {name}</div>
//     <div>I rendered {renderCount.current} times </div>
//     </>
//   );
// }
//simple use case-----------------------------------------------



//simple use case 2---------------------------------------------
// export default function App(){
//   const [name, setName] = useState();
//   const inputRef = useRef(0);

//   const focus=()=>{
//     console.log(inputRef.current);
//     //inputRef.current.value = 'Some Value';
//   }

//   return (
//     <>
//     <input ref={inputRef} value={name} onChange={e=>setName(e.target.value)}></input>
//     <div>My name is {name}</div>
//     <button onClick={focus}>Focus</button>
//     </>
//   );
// }
//simple use case 2 ------------------------------------------------

//simple use case 3---------------------------- ref save prev value 
export default function App(){
  const [name, setName] = useState();
  const prevName = useRef('');

  useEffect(()=>{
    prevName.current = name;
  }, [name]);

  return (
    <>
    <input value={name} onChange={e=>setName(e.target.value)}></input>
    <div>My name is {name} and it used to be {prevName.current}</div>
    </>
  );
}
