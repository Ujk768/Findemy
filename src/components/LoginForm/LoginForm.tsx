import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "../FormElement/FormElement.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../features/auth/authSlice";
import { ILoginUserData } from "../../features/auth/authType";
import { useAppDispatch, useAppSelector } from "../../store/store";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading, isLogin, isError, message } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }else if (isLogin) {
      navigate("/");
      toast(`${message}`,{type:"success"})
    }
  }, [ isError, isLogin, message, navigate, dispatch]);

  const onSubmit = (data) => {
    const userData = {
      email: data.email.toString(),
      password: data.password.toString(),
    };
    dispatch(login(userData));
  };

  handleSubmit(onSubmit);

  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <>
      <Container className="mainFormContainer">
        <h3 className="form-title">Login</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FloatingLabel label="Email" className="form-label">
            <Form.Control
              type="email"
              placeholder="name@example.com"
              className="form-control-label"
              {...register("email", { required: "This is required" })}
            />
          </FloatingLabel>
          <p className="text-danger">{errors.email?.message?.toString()}</p>
          <FloatingLabel label="Password" className="form-label">
            <Form.Control
              type="password"
              placeholder="Password"
              className="form-control-label"
              {...register("password", {
                required: "This is required",
                minLength: { value: 8, message: "min Length of 8" },
              })}
            />
          </FloatingLabel>
          <p className="text-danger">{errors.password?.message?.toString()}</p>
          <Button type="submit" className="formBtn">
            Log in
          </Button>
        </Form>

        <div style={{ textAlign: "center" }}>
          Already have an account?{" "}
          <span style={{ color: "#5624d0" }}>
            {" "}
            <Link to="/signup">Sign up</Link>
          </span>
        </div>
      </Container>
    </>
  );
}
