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
  <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202011/jobs_660_170820114745_061120105734.jpg?size=1200:675"/>
    </div>
}