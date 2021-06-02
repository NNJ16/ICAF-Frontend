import React,{useState} from "react";
import Title from "../../components/Header/Title";
import {Button, Form, FormGroup, FormText, Input, Label} from "reactstrap";
import {useForm} from "react-hook-form";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const SubmitResearch =()=>{
    const {register, handleSubmit} = useForm();
    let fileData = null;

    const handleData= (event)=>{
        const {name, value} = event.target;
        if(name == "proposal"){
            fileData = event.target.files;
            console.log(fileData);
        }
    }

    const handleRegistration = (data) => {

    };

    return(
        <div>
            <Header/>
            <Title title = "CALL FOR PAPERS"/>
            <div className="workshop-proposal">
                <h3>CALL FOR PAPERS</h3>
                <p>The 2021 International Conference on Advancements in Computing (ICAC 2021) will be held in Sri Lanka from 9th to 11th December 2021.
                    The ICAC 2021 is themed “Empowering the society through innovation and invention.”
                    The conference organizers invite contributions from diverse computing areas including Computer Engineering,
                    Computer Science, Information Systems, Information Technology and Software Engineering, but not limited to.
                    ICAC 2021 will include attractive workshops and industry programs aimed at practitioners,
                    with keynotes and panels from both local and international researchers. </p>
            </div>
            <div className="workshop-submit">
                <h2>RESEARCH PAPER SUBMISSION</h2>
                <p>Paper submissions should be submitted as a single PDF file online at the following link:</p>
                <Form className="workshop-from" onSubmit={handleSubmit(handleRegistration)}>
                    <FormGroup>
                        <Input type="file" name="proposal" enctype="multipart/form-data"  onChange={handleData}/>
                    </FormGroup>
                    <Button color="secondary" size="lg">Submit</Button>
                </Form>
            </div>
            <Footer/>
        </div>
    );
}

export default SubmitResearch;