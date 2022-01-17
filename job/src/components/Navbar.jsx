
import { Link } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {
    return <div className="Navbar">
        <navbar>
           <h2> <Link to = "/Dashboard">Dashboard</Link></h2>
           <h2>  <Link to = "/Admin">Admin</Link></h2>
           <h2>  <Link to = "/Login">Login</Link></h2>
        </navbar>
    </div>
}