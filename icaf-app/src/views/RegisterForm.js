import React from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import API from "../components/api"
const bcrypt = require('bcryptjs')

const RegisterForm = () => {
    const history = useHistory();
    const {register, handleSubmit} = useForm();

    const handleRegistration = (data) => {
        //encrypted user password for better security
        const user ={
            name : data.name,
            email : data.email,
            password: bcrypt.hashSync(data.password, bcrypt.genSaltSync()),
            phone: data.phone,
            type:"user"
        }
        //send post request to add a new user to the db
        API.post('/addUser', user)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    //go to login form
    const loginForm =()=>{
        history.push("/login");
    };
    //go to seller form
    const sellerForm =()=>{
        history.push("/sellregister");
    };
    return (
        <div>
            <Header/>
            <div className="register">
                <Form className="reg-log-from" onSubmit={handleSubmit(handleRegistration)}>
                    <h1 className="reg-title">Register</h1>
                    <hr/>
                    <FormGroup className="input">
                        <Label>Name :</Label>
                        <Input size="sm" name="name" {...register("name")} />
                    </FormGroup>
                    <FormGroup className="input">
                        <Label>Email :</Label>
                        <Input size="sm" type="email" name="email" {...register("email")} />
                    </FormGroup>
                    <FormGroup className="input">
                        <Label>Phone :</Label>
                        <Input size="sm" type="text" name="phone" {...register("phone")} />
                    </FormGroup>
                    <FormGroup >
                        <Label>Password :</Label>
                        <Input size="sm" type="password" name="password" {...register("password")} />
                    </FormGroup>
                    <Button className="btnLog" color="primary">Register</Button>
                    <Button size="sm" onClick={()=>loginForm()} className="btnReg" color="secondary">Login</Button>
                    <Button size="sm" onClick={()=>sellerForm()}outline color="primary" className="btnReg">Become a seller</Button>
                </Form>
            </div>
            <Footer/>
        </div>
    );
};

export default RegisterForm;