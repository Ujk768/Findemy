import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "../FormElement/FormElement.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {  toast } from 'react-toastify';
import {useForm} from 'react-hook-form'
import axios from "axios"
function FormElement() {
 

const {register,handleSubmit, formState:{errors}} = useForm()

  async function registerUser(data){
    console.log(data)
   
    const userdata={
       name:data.name,
        email:data.email,
        password:data.password
     }
    await axios.post("http://localhost:5000/users/signup",userdata).then((response)=>{
    console.log(response.status)
    console.log(response.data)
    toast(`${response.data.message}`,{type:"success"})
   }).catch((error)=>{
      console.log(error)
      toast(`${error.response.data.message}`,{type: "error"})
   })

   
  }
  return (
    <>
      <Container className="mainFormContainer">
      <h3 className="form-title">Sign up and start learning</h3>
        <Form onSubmit={handleSubmit(registerUser)}>
    
        <FloatingLabel label="Full name" className="form-label">
          <Form.Control type="text" placeholder="Full name" className="form-control-label" {...register("name",{required:'This is required'})}  />       
        </FloatingLabel>
        <p className="text-danger">{errors.name?.message?.toString()}</p>
       
        <FloatingLabel label="Email" className="form-label">
          <Form.Control type="email" placeholder="name@example.com" className="form-control-label"  {...register("email",{required:'This is required'})}   />
        </FloatingLabel>
        <p className="text-danger">{ errors.email?.message?.toString()}</p>
        <FloatingLabel label="Password" className="form-label">
          <Form.Control type="password" placeholder="Password" className="form-control-label"  {...register("password",{required:'This is required', minLength:{value:8,message:"min Length of 8"}})}  />
        </FloatingLabel>
        <p className="text-danger">{errors.password?.message?.toString()}</p>
        <Button type="submit" className="formBtn">Sign Up</Button>
        </Form>
       
      
        <div style={{textAlign:"center"}}>Already have an account? <span style={{color:"#5624d0"}}> <Link to="/login">Log in</Link></span></div>
      </Container>
    </>
  );
}

export default FormElement;
