import { Container } from "@chakra-ui/react";
import { useState } from "react"

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
                <button type="submit">submit</button>
            </form>
        </Container>
        </>
    )

}