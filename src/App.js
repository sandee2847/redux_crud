import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Users from './components/Users';
import Counter from './components/Counter';

import store from './components/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <h1>This is The Redux CRUD Operation Project</h1>
        <Users />
        <Counter />
      </div>
    </Provider>
  )
}

export default App