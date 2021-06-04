import React,{useState} from "react";
import Title from "../../components/header/Title";
import WorkshopCard from "../../components/common/WorkshopCard";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Workshops =()=>{
    return(
        <div>
            <Header/>
            <Title title = "WORKSHOPS"/>
                <WorkshopCard/>
            <Footer/>
        </div>
    );
}

export default Workshops;