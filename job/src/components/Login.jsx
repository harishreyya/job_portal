import {Link} from "react-router-dom"

export const Login = () => {
    return <div className="Login">
     <form>
         <input  placeholder="Email"/>
         <input  placeholder="password"/>
         <button> <Link to = "/Dashboard">Login</Link></button>
     </form>

    </div>
}