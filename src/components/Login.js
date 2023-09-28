import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Password from "./LogginPasword";
import './LoginStyles.css';

function Login() {
  const [formValues, setFormValues] = useState({ email: "", password: "", favClass: "1" });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const navigate = useNavigate();


  const handleEmailChange = (e) => {
    const email = e.target.value;
    setFormValues({ ...formValues, email })
    setIsEmailValid(true);
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setFormValues({ ...formValues, password });
    setIsPasswordValid(validatePassword(password));
  };

  const validatePassword = (password) => {
    return password.length >= 9;
  };

  const handleSelectChange = (e) => {
    const favClass = e.target.value;
    setFormValues({ ...formValues, favClass });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate("/home")
  };

  return (
    <div class="all">
      <div class="forms">
        <div class="title">Acceder</div>
        <div class="subtitle">Usa tu cuenta de unialpes</div>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleEmailChange}
            value={formValues.email}
            isInvalid={!isEmailValid}
          />
          <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={formValues.password}
            isInvalid={!isPasswordValid}
          />
          {!isPasswordValid && (
            <Form.Text className="text-muted">Your password should be at least 9 characters long</Form.Text>
          )}
          <Form.Control.Feedback type="invalid">Password should meet the criteria mentioned above.</Form.Control.Feedback>
        </Form.Group>
        <div class="footer">
          <a class="olvidaste">Olvidaste tu correo elctronico</a>
          <div class="wrapper-buttons">
          <div class="crearCuenta">
            Crear Cuenta
          </div>
          <Button variant="primary" type="submit">
            siguiente
          </Button>
          </div>
        </div>
      </Form>
      </div>
    </div>
  );
}

export default Login;