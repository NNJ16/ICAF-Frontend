import React, {useEffect, useState} from 'react'
import API from "../components/api";
import AdminConference from "../components/admin/AdminConference";
import {Contdown} from "../components/common/Contdown";
import Button from "react-bootstrap/Button";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";



const Home = ({days,Minutes,Seconds,Hours}) => {



    const [rows, setRows] = useState('');
    const [title,setTitle] = useState("");
    const [venue,setVenue] = useState("");
    const [desc,setDescription] = useState("");
    const [Sdate,setStartDate] = useState("");
    const [Edate,setEndDate] = useState("");
    const [org,setOrg] = useState("");


    const token =JSON.parse(sessionStorage.getItem("token"));


    useEffect(() => {
        API.get(`/conference/`)
            .then(res => {
                setRows(res.data)
                getApproveConf(rows)
            })
            .catch(err => {
                console.log(err)
            });
    }, [rows]);





    const getApproveConf = (rows)=>{

        for (let i=0;i<rows.length;i++){

            if(rows[i].status=="approved"){


                   setTitle(rows[i].topic)
                   setDescription(rows[i].desc)
                   setVenue(rows[i].venue)
                   setStartDate(rows[i].startDate)
                   setEndDate(rows[i].endDate)
                   setOrg(rows[i].organizer)

            }
        }
    }










    return (
        <div>
  <Header/>
            <section className="home">



                <div className="conf-main">

                    <div className="conf-MainTitle"> Annual <text style={{color:"blue"}}><br/>Conference</text> SLIIT {(new Date().getFullYear())}
                    <br/>
                    <Button className="conf-info">More Info</Button>
                    </div>


                </div>


            </section>

<div className="conf-main2">

            <div className="conf-main3">


                <div className="conf-title"> {title} </div>

                <div className="conf-venue"> {venue} </div>

                <div className="conf-desc">{desc}</div>



                <div className="conf-Pdate">
                <div className="conf-Sdate">{Sdate} </div>
                <div style={{fontSize:"20px",margin:"20px"}}>-</div>
                <div className="conf-Edate">{Edate}</div>
                </div>

                <div className="conf-Org">Organized By - {org}</div>

            </div>


</div>
            <div>
                <Contdown/>
            </div>




            <div>
                <AdminConference/>
            </div>
            <Footer/>
        </div>
       
    )
}

export default Home;