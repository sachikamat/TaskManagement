import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
        <div className='Login'>
          <Login/>
        </div>
    </div>
  );
}

export default App;
