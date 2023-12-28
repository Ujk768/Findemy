import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "../FormElement/FormElement.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";
import {useForm} from 'react-hook-form';
import {  toast } from 'react-toastify';
import axios from "axios"

import { useAppDispatch } from "../../redux/store/store";
import { loginTrue } from "../../redux/reducers/LoginReducer";
import { loggedInData } from "../../redux/reducers/LoginDataReducer";


export default function LoginForm() {
  const {register,handleSubmit,formState:{errors}} = useForm()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  async function loginUser(data){
    console.log('inside login')

    const userdata={
      email:data.email,
      password:data.password
    }
    await axios.post("http://localhost:5000/users/login",userdata).then((response)=>{
    console.log(response.status)
   
    toast(`${response.data.message}`,{type:"success"})
    console.log(response)
    dispatch(loginTrue())
    dispatch(loggedInData(response.data.data))
    navigate('/')
   }).catch((error)=>{
      console.log(error.response.data.message)
      toast(`${error.response.data.message}`,{type: "error"})
   })
  }

  return (
    <>
      <Container className="mainFormContainer">
      <h3 className="form-title">Login</h3>
        <Form onSubmit={handleSubmit(loginUser)}>
    
       
        <FloatingLabel label="Email" className="form-label">
          <Form.Control type="email" placeholder="name@example.com" className="form-control-label"  {...register("email",{required:'This is required'})}   />
        </FloatingLabel>
        <p className="text-danger">{ errors.email?.message?.toString()}</p>
        <FloatingLabel label="Password" className="form-label">
          <Form.Control type="password" placeholder="Password" className="form-control-label"  {...register("password",{required:'This is required', minLength:{value:8,message:"min Length of 8"}})}  />
        </FloatingLabel>
        <p className="text-danger">{errors.password?.message?.toString()}</p>
        <Button type="submit" className="formBtn">Log in</Button>
        </Form>
       
      
        <div style={{textAlign:"center"}}>Already have an account? <span style={{color:"#5624d0"}}> <Link to="/signup">Sign up</Link></span></div>
      </Container>
  
    </>
  );
}
