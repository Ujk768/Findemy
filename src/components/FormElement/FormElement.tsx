import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "../FormElement/FormElement.css";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";    
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useEffect } from "react";
import { register as registerAction } from "../../features/auth/authSlice";

function FormElement() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isError, message, isRegister } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isRegister) {
      toast(`${message}`, { type: "success" });
      navigate("/login");
    }
  },  [isError, isRegister, message, navigate, dispatch]);

  const registerUser = (data) => {
    const userData = {
      name: data.name,
      password: data.password,
      email: data.email,
    };
    dispatch(registerAction(userData)); 
  };
  return (
    <>
      <Container className="mainFormContainer">
        <h3 className="form-title">Sign up and start learning</h3>
        <Form onSubmit={handleSubmit(registerUser)}>
          <FloatingLabel label="Full name" className="form-label">
            <Form.Control
              type="text"
              placeholder="Full name"
              className="form-control-label"
              {...register("name", { required: "This is required" })}
            />
          </FloatingLabel>
          <p className="text-danger">{errors.name?.message?.toString()}</p>

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
            Sign Up
          </Button>
        </Form>

        <div style={{ textAlign: "center" }}>
          Already have an account?{" "}
          <span style={{ color: "#5624d0" }}>
            {" "}
            <Link to="/login">Log in</Link>
          </span>
        </div>
      </Container>
    </>
  );
}

export default FormElement;
