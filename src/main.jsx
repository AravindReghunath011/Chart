import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

export let MyContext = createContext(null);

const Main = () => {
  const [state, setState] = useState( [{name:'Home',link:'/'}]);

  return (
    <React.StrictMode>
      <MyContext.Provider value={{ state, setState }}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MyContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);


