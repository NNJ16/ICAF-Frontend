import React from "react";
import {useForm} from "react-hook-form";
import { useHistory } from 'react-router-dom';
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import API from "../components/api";
import Title from "../components/Header/Title";
const bcrypt = require('bcryptjs');

const LoginForm = () => {
    const history = useHistory();
    const {register, handleSubmit} = useForm();
    const handleRegistration = (data) => {

    };

    const goToRegister = ()=>{
        history.push("/workshop/submit");
    }

    return (
        <div className="register">
            <Header/>
            <Title/>
            <Form className="reg-log-from" onSubmit={handleSubmit(handleRegistration)}>
                <h1 className="reg-title">Login</h1>
                <hr/>
                <FormGroup className="input">
                    <Label>Email :</Label>
                    <Input size="sm" type="email" name="email" {...register("email")} />
                </FormGroup>
                <FormGroup>
                    <Label>Password :</Label>
                    <Input size="sm" type="password" name="password" {...register("password")} />
                </FormGroup>
                <Button className="btnLog" color="primary">Login</Button>
                <Button onClick={goToRegister} size="sm" className="btnReg" color="secondary">Register</Button>
            </Form>
            <Footer/>
        </div>
    );
};

export default LoginForm;