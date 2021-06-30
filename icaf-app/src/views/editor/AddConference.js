import React from "react";
// import "../../conferenceStyles.css";
import {useHistory} from "react-router-dom";
import Header from "../../components/header/Header";
import { useAlert } from "react-alert";
import {useForm} from "react-hook-form";
import API from "../../components/api";
import axios from "axios";
import { useEffect, useState } from "react";

const AddConference = (props) => {
        const history = useHistory();
        const alert = useAlert();
        const {register, handleSubmit} = useForm();
        const token = JSON.parse(sessionStorage.getItem("token"));
        
      
           
        
        const handleConferenceData = (data) => {
                
               
            const conference = {
                topic: data.title,
                desc: data.desc,
                status: "pending",
                venue: data.venue,
                startDate: data.startDate,
                endDate: data.endDate,
                organizer: data.organizers,
        
       
            }
          
                           //send post request to add a new conference to the db
                           API.post('/conference/create', conference)
                           .then(function (response) {
                               console.log(response.data);
                               if(response.data.message){
                                   alert.info(response.data.message);
                               }else{
                                  history.push("/editor");
                               }
                           })
                           .catch(function (error) {
                               console.log(error);
                           });
        };


        
return (

        


        <div>          
                
                        <Header/>
                <div  className="addConf1">
                <div className="addConf">
                <h1>Add New Conference</h1>
                <br/> <br/>
                <div className="addConf2">
                <form className="addconf-form" onSubmit={handleSubmit(handleConferenceData)} >
                   
              

                <label className="conf-label">Title</label><br/>
                <label id="icon" for="name"><i className="icon-font "></i></label>
                <input className="conf-input" type="text" name="name" id="name" placeholder="Enter the Title" {...register("title")} required/><br/>

                <label className="conf-label">Description</label><br/>
                {/* <label id="icon" for="name"><i className="icon-user"></i></label> */}
                <textarea className="conf-input" className="desc" id="" cols="65" placeholder="Enter the Description" rows="7" {...register("desc")}></textarea><br/>
                {/* <input type="text" name="name" id="name" placeholder="Description" required/><br/> */}

                <label className="conf-label">Venue</label><br/>
                <label id="icon" for="name"><i className="icon-globe"></i></label>
                <input className="conf-input" type="text" name="name" id="name" placeholder="Enter the Venue" {...register("venue")} required/><br/>

                <label className="conf-label" >Start Date</label> <label className="conf-label date-label" > End Date</label><br/>
                <label id="icon" for="name"><i className="icon-calendar"></i></label>
                <input  type="date" name="name" id="date" placeholder="Start Date"  {...register("startDate")} required/>

                
                <label id="icon" for="name"><i className="icon-calendar"></i></label>
                <input type="date" name="name" id="date" placeholder="End Date" {...register("endDate")} required/><br/>

                <label className="conf-label">Organizers</label><br/>
                <label id="icon" for="name"><i className="icon-user"></i></label>
                <input className="conf-input" type="text" name="name" id="name" placeholder="Organizers" {...register("organizers")} required/><br/>

                
                <button type="submit" className="addConf-but">Save</button>
                </form>
                </div>
                </div>
                </div>
        </div>
);
}

export default AddConference;