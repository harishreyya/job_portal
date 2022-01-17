import { Container } from "@chakra-ui/react";
import { useState } from "react";
import {Link} from "react-router-dom"

export const Dashboard2 = () => {
   
    const inistate = {
        Company : "",
        JobTitle : "",
        salary : "",
        jobDescription: "",
        location: "",

    }
    const [form, setForm] = useState(inistate);

    const handleChange = ({target : {name, value}}) => {
        setForm({...form, [name]: value})
    }

  
    return (
        <>
        <Container>
            <form>
                
                <input onChange={handleChange} placeholder="Company"/>
                <br />
                <input  onChange={handleChange} placeholder=" Job Title"/>
                <br />
                <input  onChange={handleChange} placeholder="salary"/>
                <br />
                <input  onChange={handleChange} placeholder="job description"/>
                <br />
                <input  onChange={handleChange} placeholder="job type"/>
                <br />
                <button type="submit"><Link to = "/Admin2">submit</Link></button>
            </form>
            <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202011/jobs_660_170820114745_061120105734.jpg?size=1200:675"/>
        </Container>
        </>
    )

}