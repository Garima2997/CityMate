import React, { useState } from 'react';
import { Form, Button, Card, Col } from 'react-bootstrap';
import AuthService from "../../Services/auth.service";
import Footer from '../Footer/Footer.js';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
// import Login from './login.component';

function LoginPage() {

    // const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const { register, handleSubmit, errors , getValues } = useForm();
    const handleError = (errors) => { };

    const validation = {
        username: { required: "Username is Required" },
        password: { required: "Password is Required" }
    };

    const history = useHistory();
    
    console.log(getValues("username"));
    const Login = (data) => {
        
        AuthService.login(getValues("username"), getValues("password")).then(
            () => {
                const user = AuthService.getCurrentUser();
                if (user.roles[0] === "ROLE_EVENT") {
                    history.push("/admin_event");
                } else if (user.roles[0] === "ROLE_EDUCATION") {
                    history.push("/admin_education");
                } else if (user.roles[0] === "ROLE_FUNNDINE") {
                    history.push("/admin_funndine");
                } else if (user.roles[0] === "ROLE_TOURISM") {
                    history.push("/admin_tourism");
                }else if (user.roles[0] === "ROLE_HEALTH") {
                    history.push("/admin_health");
                } else {
                    history.push("/admin_login")
                }
                window.location.reload();
            },
            error => {
                const resMessage =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                    error.toString();
                
                console.log(error.response.data)
                // setLoading(false);
                setMessage(resMessage);
              }
        )
    }

    const onSubmit = (data) => {
        Login(data);
    }


    return (
        <>
        <h1 className="text-center mt-5"> <b>Login</b></h1>
        <Card style={{ width: '30rem' }} className="mx-auto mt-5 mb-5 rounded">
        <Card.Body>
        <Form noValidate onSubmit={handleSubmit(onSubmit, handleError)}>
        
        <Form.Group as={ Col}>
        <Form.Label>Username</Form.Label>
        <Form.Control
                                name="username"
                                type="text"
                                placeholder="Username"
                                ref = {register(validation.username)} 
                            />
        <small className="text-danger"><strong>{errors.username && errors.username.message}</strong></small>
        </Form.Group>
                        
        <Form.Group as={Col}  >
        <Form.Label>Password</Form.Label>
                            <Form.Control
                                name="password"
                                type="password"
                                placeholder="Password"
                                ref={register(validation.password)}
        />
        <small className="text-danger"><strong>{errors.password && errors.password.message}</strong></small>
        </Form.Group>

        {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
        )}
                        
       <Button type="submit" className="ml-3" variant="info" >Login</Button>
       </Form>
       </Card.Body>
       </Card>
       <Footer />
        </>
    )
}

export default LoginPage
