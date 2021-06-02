import React,{useState} from "react";
import Title from "../../components/Header/Title";
import {Button, Form, FormGroup, FormText, Input, Label} from "reactstrap";
import {useForm} from "react-hook-form";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import API from "../../components/api";

const SubmitWorkshop =()=>{
    const {register, handleSubmit} = useForm();

    const handleData= (event)=>{
        const {name, value} = event.target;
        if(name === "proposal"){
            let fileData = event.target.files[0];
            const formData = new FormData();
            formData.append(
                "file",
                fileData,
                fileData.name
            )
            API.post("/workshop/upload",formData)
                .then((res)=>{
                    console.log(res);
                })
                .catch((err)=>{
                    console.log(err)
                });
        }
    }

    const handleRegistration = (data) => {
        const workshop = {
            topic : data.topic,
            description : data.description,
            approvalStatus : "pending",
            submitter : {
                userId : "0123456789",
                name: "Kamal",
                email : "Kamal@mail.com"
            }
        }
        API.post("/workshop/create",workshop)
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err)
            });
    };

    return(
        <div>
            <Header/>
            <Title title = "CALL FOR WORKSHOPS"/>
            <div className="workshop-proposal">
                <h3>CALL FOR WORKSHOP PROPOSALS</h3>
                <p>In addition to exciting technical symposia, tutorials, IEEE ICAC 2021 will feature a series of 3 hours of workshop.
                    We invite the submission of workshop proposals.
                    The aim of the conference workshops is to emphasize emerging topics not specifically covered in the conference.
                    Workshops should highlight current topics related to technical and business issues in communications and networking,
                    and should include a mix of regular papers, invited presentations,
                    and panels that encourage the participation of attendees in active discussion.</p>
            </div>
            <div className="workshop-submit">
                <h2>WORKSHOP PROPOSAL SUBMISSION</h2>
                <p>Proposal submissions should be submitted as a single PDF file online at the following link:</p>
                <Form className="workshop-from" onSubmit={handleSubmit(handleRegistration)}>
                    <FormGroup>
                        <Label>Topic :</Label>
                        <Input type="text" name="topic" {...register("topic")} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Description :</Label>
                        <Input type="textarea" name="description" {...register("description")} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Proposal :</Label>
                        <Input type="file" name="proposal" enctype="multipart/form-data"  onChange={handleData}/>
                        <FormText color="muted">
                            This is some placeholder block-level help text for the above input.
                            It's a bit lighter and easily wraps to a new line.
                        </FormText>
                    </FormGroup>
                    <Button color="secondary" size="lg">Submit</Button>
                </Form>
            </div>
            <Footer/>
        </div>
    );
}

export default SubmitWorkshop;