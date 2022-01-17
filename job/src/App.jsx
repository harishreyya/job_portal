import { Route,Routes } from 'react-router-dom';
import './App.css';
import { Admin } from './components/Admin';
import { Dashboard } from './components/Dashboard';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path = "/Login" element = {<Login/>}></Route>
       <Route path = "/Admin" element = {<Admin/>}></Route>
       <Route path = "/Dashboard" element = {<Dashboard/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
