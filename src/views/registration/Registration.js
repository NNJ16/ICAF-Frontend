import React,{useState} from "react";
import Title from "../../components/header/Title";
import ConferenceCard from "../../components/common/ConferenceCard";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
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