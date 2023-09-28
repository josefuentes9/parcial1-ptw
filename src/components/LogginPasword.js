import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LogginPasword() {
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
    <Form>
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
                <Form.Text className="text-muted">Your password should be at least 6 characters long</Form.Text>
            )}
            <Form.Control.Feedback type="invalid">Password should meet the criteria mentioned above.</Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
            Submit
            </Button>
    </Form>
  )
}

export default LogginPasword