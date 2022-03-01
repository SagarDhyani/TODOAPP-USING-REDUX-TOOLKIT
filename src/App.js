import logo from './logo.svg';
import './App.css';
import { AddTodoForm } from './Components/AddTodoForm';

import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      
     <AddTodoForm />
     {/* <TodoList /> */}
    </div>
  );
}

export default App;
