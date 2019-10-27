import React from 'react';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';


import GlobalStyle from './style/global';


function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </>
  )
}

export default App;
