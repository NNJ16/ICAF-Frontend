import React, {useState} from "react";
import Title from "../header/Title";
import {Button, Form, FormGroup, FormText, Input, Label} from "reactstrap";
import {useForm} from "react-hook-form";
import Footer from "../footer/Footer";
import API from "../api";
import axios from "axios";

const AddDocument = () => {
    const {register, handleSubmit} = useForm();
    const token = JSON.parse(sessionStorage.getItem("token"));
    let fileData = null;
    const handleData = (event) => {
        const {name, value} = event.target;
        if (name === "proposal") {
            fileData = event.target.files[0];
        }
    }
    const updateFile = (formData) =>{
        API.post("/download/upload", formData)
            .then();
    }
    const createData = (download) =>{
        API.post("/download/create", download)
            .then();
    }
    const handleWorkshopData = (data) => {
        const download = {
            type: data.type,
            description: data.description
          
        }
        if(fileData){
            const formData = new FormData();
            formData.append(
                "file",
                fileData,
                fileData.name
            )
            axios.all([updateFile(formData),setTimeout(()=>{createData(download)},2000)])
                .then(axios.spread((data1, data2) => {

                }));
        }
    };

    return (
        <div>
         
            <div className="workshop-proposal">
                <h3>Add Template</h3>
                <p>In addition to exciting technical symposia, tutorials, IEEE ICAC 2021 will feature a series of 3
                    hours of workshop.
                    We invite the submission of workshop proposals.
                    The aim of the conference workshops is to emphasize emerging topics not specifically covered in the
                    conference.
                    Workshops should highlight current topics related to technical and business issues in communications
                    and networking,
                    and should include a mix of regular papers, invited presentations,
                    and panels that encourage the participation of attendees in active discussion.</p>
            </div>
            <div className="workshop-submit">
                <h2>Template Document SUBMISSION</h2>
                <p>Proposal submissions should be submitted as a single PDF file online at the following link:</p>
                <Form className="workshop-from" onSubmit={handleSubmit(handleWorkshopData)}>
                    <FormGroup>
                        <Label>Type :</Label>
                        <Input type="text" name="type" {...register("type")} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Description :</Label>
                        <Input type="textarea" name="description" {...register("description")} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Proposal :</Label>
                        <Input type="file" name="proposal" encType="multipart/form-data" onChange={handleData} />
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

export default AddDocument;