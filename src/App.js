import React,{useEffect} from 'react';
import { Router } from 'react-router-dom';
import history from './services/History';
import Routes from './routes';

function App() {
  return (
    <Router history={history}>
      <Routes/>
    </Router>
  );
}

export default App;
