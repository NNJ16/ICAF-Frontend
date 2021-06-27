import React from "react";
import Header from "../../components/header/Header";
import Title from "../../components/header/Title";
import {Button, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import Footer from "../../components/footer/Footer";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useAlert} from "react-alert";
import API from "../../components/api";

const SubmitForm =() =>{
    const history = useHistory();
    const {register, handleSubmit} = useForm();
    const alert = useAlert();
    const handleRegistration = (data) => {

    };

    return(
        <div>
            <Header/>
            <Title title="CONFERENCE REGISTRATION"/>
            <div className="register">
                <Form className="conference-from" onSubmit={handleSubmit(handleRegistration)}>
                    <h2 className="reg-title">Registration</h2>
                    <hr/>
                    <FormGroup className="input">
                        <Label>Name :</Label>
                        <Input name="name" {...register("lname")} required/>
                    </FormGroup>
                    <FormGroup className="input">
                        <Label>Email :</Label>
                        <Input type="email" name="email" {...register("email")} required/>
                    </FormGroup>
                    <FormGroup className="input">
                        <Label>Phone :</Label>
                        <Input type="text" name="phone" {...register("phone")} required/>
                    </FormGroup>
                    <FormGroup >
                        <Label>Address :</Label>
                        <Input type="textarea" rows="4" name="address" {...register("address")} required/>
                    </FormGroup>
                    <Button className="btnLog" color="primary">Submit</Button>
                    <Button className="btnReg" color="secondary">Cancel</Button>
                </Form>
            </div>
            <Footer/>
        </div>
    );
}

export default SubmitForm;