import './App.css';
import React, { useState } from 'react';
import FormLogin from './views/FormLogin';
import FormRegister from './views/FormRegister';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';


const App = () => {
  
  const [switchForm, setSwitchForm] = React.useState(true);

  const handleClick = () => {
    setSwitchForm(!switchForm)
  };
  if(switchForm){
    return (
      <ThemeProvider theme={theme}>
        <FormLogin 
          handleClick={handleClick}/>
      </ThemeProvider>
    );
  }
  else{
    return (
      <ThemeProvider theme={theme}>
        <FormRegister
          handleClick={handleClick}/>
      </ThemeProvider>
    );
  }
}

export default App;
