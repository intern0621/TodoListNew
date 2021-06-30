import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider, useTodoState } from './TodoContext';
import { render } from '@testing-library/react';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;


function App() {    
      return (
        <TodoProvider>          
          <GlobalStyle />
          <TodoTemplate>
            <TodoHead />
            <TodoList />
            <TodoCreate />
          </TodoTemplate>
        </TodoProvider>
      );    
}

/*
class App extends Component {
  render() {
    const todos = useTodoState();
    window.localStorage.setItem('todo', JSON.stringify(todos));
    return (
      <TodoProvider>
          <GlobalStyle />
          <TodoTemplate>
            <TodoHead />
            <TodoList />
            <TodoCreate />
          </TodoTemplate>
        </TodoProvider>
    );
  }
}
*/
export default App;