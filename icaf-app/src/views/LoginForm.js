import React from "react";
import {useForm} from "react-hook-form";
import { useHistory } from 'react-router-dom';
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import API from "../components/api";
const bcrypt = require('bcryptjs');

const LoginForm = () => {
    const history = useHistory();
    const {register, handleSubmit} = useForm();
    const handleRegistration = (data) => {
        //send post request to get user details with provided email
        API.post("/login",{email: data.email}).then(res=>{
            console.log(res.data);
            //check whether data is available or not
            if(res.data.length > 0){
                //set the users data to the variables
                const userId = res.data[0].userId;
                const userType = res.data[0].type;
                const hashPass = res.data[0].password;
                const email = res.data[0].email;
                //set userType, userid and userMail to future use
                localStorage.setItem("userType",userType);
                localStorage.setItem("userId",userId);
                localStorage.setItem("userMail",email);
                //check the user given password and db password is matched or not
                const isValid = bcrypt.compareSync(data.password, hashPass);
                if(isValid){
                    //send user to the home
                    if(userType==="user"){
                        viewHome();
                        window.location.reload ()
                    }else{
                        //send seller to the seller dashboard
                        viewDashboard();
                        window.location.reload ()
                    }
                }
            }
        });
    };
    //go to register form
    const registerForm =()=>{
        history.push("/register");
    }
    //go to home
    const viewHome =()=>{
        history.push("/");
    }
    //go to dashboard
    const viewDashboard =()=>{
        history.push("/dashboard");
    }
    return (
        <div className="register">
            <Header/>
            <Form onSubmit={handleSubmit(handleRegistration)}>
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
                <Button size="sm" onClick={()=>registerForm()} className="btnReg" color="secondary">Register</Button>
            </Form>
            <Footer/>
        </div>
    );
};

export default LoginForm;