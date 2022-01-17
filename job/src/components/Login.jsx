import {Link} from "react-router-dom"

export const Login = () => {
    return <div className="Login">
     <form>
         <h1>Login to Apply for jobs</h1>
         <input  placeholder="Email"/>
         <br />
         <input  placeholder="password"/>
         <br />
         <button> <Link to = "/Dashboard">Login</Link></button>
     </form>

    </div>
}