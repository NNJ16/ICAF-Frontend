import React,{useState} from "react";
import Title from "../../components/Header/Title";
import ConferenceCard from "../../components/Card/ConferenceCard";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
const Registration =()=>{
    return(
        <div>
            <Header/>
            <Title title = "REGISTRATION"/>
            <ConferenceCard/>
            <Footer/>
        </div>
    );
}

export default Registration;