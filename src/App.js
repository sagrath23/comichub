import React from 'react';
import { Route, Router } from 'react-router-dom';
import history from './routes/history';
import Layout from './pages/layout';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Route component={Layout} />
      </Router>
    </div>
  );
}

export default App;
