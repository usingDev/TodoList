import React from 'react'
import {createGlobalStyle} from 'styled-components';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoTemplelate from './components/TodoTemplelate';
import { TodoProvider } from './TodoContext';
import TodoCreate from './TodoCreate';

const GlobalStyle = createGlobalStyle`
body {
  background : #e9ecef;
}
`;


function App() {

  return (
    <TodoProvider>
      <GlobalStyle/>
      <TodoTemplelate>
        <TodoHead/>
        <TodoList/>
        <TodoCreate/>
      </TodoTemplelate>
      </TodoProvider>
  )
}

export default App;