// import React from 'react';
// import { useTheme, useThemeUpdate} from './ThemeContext'

// const FunctionContextComponent =()=>{
//   const darkTheme = useTheme();
//   const toggleTheme =useThemeUpdate();

//   const themeStyles={
//       backgroundColor:darkTheme?'#333' :'#CCC',
//       color: darkTheme?'#CCC':'#333',
//       padding:'2rem',
//       margin:'2rem'
//   }
//   return (
//     <>
//     <button onClick={toggleTheme}>Toggle Theme </button>
//     <div style ={themeStyles}>Function Theme</div>
//     </>
//   )
// }

// export default FunctionContextComponent;

//-------------------------------------------------------------------------
import React, {useContext} from 'react'
import {ThemeContext} from './App'
// import {DataInform} from './App'
import DataContext from './DataContext'

export default function FunctionContextComponent(){
  const darkTheme = useContext(ThemeContext);
  const dataInform = useContext(DataContext);
  console.log(dataInform);
  const themeStyles={
    backgroundColor:darkTheme?'#333' :'#CCC',
    color: darkTheme?'#CCC':'#333',
    padding:'2rem',
    margin:'2rem'
}
  console.log()
  return (
    <div  style ={themeStyles}>Function Theme, </div>
  )
}

