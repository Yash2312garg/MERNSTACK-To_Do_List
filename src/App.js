
import './App.css';

// components
import Header from './components/header';
import TodoForm from './components/todoform';
import Todos from './components/todos';

function App() {
  return (
    <div>
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;