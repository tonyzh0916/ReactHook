// import React from 'react';
// import FunctionContextComponent from './FunctionContextComponent';
// import {ThemeProvider} from './ThemeContext';

// const App =()=> {

//   return (
//     <>
//       <ThemeProvider>
//         <FunctionContextComponent/>
//       </ThemeProvider>
//     </>

//     );
//   } 
// export default App;
//---------------------------------------------------------------------------------

import React, {useState} from 'react';
import FunctionContextComponent from './FunctionContextComponent';
import ClassContextComponent from './ClassContextComponent';
import dataInform from './data.json'
import DataContext from './DataContext'
  export const ThemeContext = React.createContext();

  export default function App(){
  const[darkTheme, setDarkTheme] =  useState(true)

  const toggleTheme=()=>{
    setDarkTheme(prevDarkTheme =>!prevDarkTheme);
  }

  return (
    <>
      <ThemeContext.Provider value = {darkTheme}>
      <DataContext.Provider value={dataInform}>
        <button onClick={toggleTheme}> Toggle Theme</button>
        <FunctionContextComponent/>
        <ClassContextComponent/>
      </DataContext.Provider>  
      </ThemeContext.Provider>
    </>

  );
}




