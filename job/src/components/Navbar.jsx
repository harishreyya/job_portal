
import { Link } from "react-router-dom"
export const Navbar = () => {
    return <div className="Navbar">
        <navbar>
            <button><Link to = "/Dashboard">Dashboard</Link></button>
            <button><Link to = "/Admin">Admin</Link></button>
            <button><Link to = "/Login">Login</Link></button>
        </navbar>
    </div>
}