import { Route,Routes } from 'react-router-dom';
import './App.css';
import { Admin } from './components/Admin';
import { Admin2 } from './components/Admin2';
import { Dashboard } from './components/Dashboard';
import { Dashboard2 } from './components/Dashboard2'
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
       <Route path = "/Dashboard2" element = {<Dashboard2/>}></Route>
       <Route path = "/Admin2" element = {<Admin2/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
