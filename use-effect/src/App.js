import React, {useState, useEffect} from 'react';


const App =()=>{

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = ()=>{
    setWindowWidth(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize', handleResize)

    //每次run useEffect  return总是先run  避免多次添加listener
    return ()=>{
      window.removeEventListener('resize', handleResize);
    }
  },[])

  return (
    <div>
      {windowWidth}
    </div>

  )
}

export default App;

//this is the simple example 
// const App =()=>{

//   const [resourceType, setResoutceType] = useState('post');
//   const [items, setItems] = useState([])

//   useEffect(()=>{
//     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//     .then(response => response.json())
//     .then(json => setItems(json))
//   }, [resourceType])
//   return (
//     <>
//     <div>
//       <button onClick ={()=>setResoutceType('posts')}>post</button>
//       <button onClick={()=>setResoutceType('users')}>user</button>
//       <button onClick={()=>setResoutceType('comments')}>commend</button>
//     </div>
//     <h1>{resourceType}</h1>
//     {
//       items.map(item=>{
//         return <pre>{JSON.stringify(item)}</pre>
//       })
//     }
//     </>
//   )
// }

// export default App;