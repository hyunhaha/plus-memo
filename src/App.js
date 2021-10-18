
import './App.css';
import List from './components/list';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TodoTemplate>
        <List />
      </TodoTemplate>

    </div>
  );
}

export default App;
