import React, {useEffect, useState} from "react";
import Title from "../../components/header/Title";
import WorkshopCard from "../../components/common/WorkshopCard";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import API from "../../components/api";

const Workshops = () => {
    const [rows, setRows] = useState([]);
    let count = 0;

    useEffect(() => {
        API.get(`/workshop/`)
            .then(res => {
                setRows(res.data)
            })
            .catch(err => {
                console.log(err)
            });
    }, []);

    return (
        <div>
            <Header/>
            <Title title="WORKSHOPS"/>
            {rows.length > 0 && rows.map(row => {
                if (row.approvalStatus === "approved") {
                    count++;
                    return (
                        <WorkshopCard row={row}/>
                    );
                }
            })
            }
            {
                count === 0 && (<div className="workshop-not-available">
                    <h2>Workshops are currently unavailable</h2>
                    <br/>
                    <p>There are no any workshops currently available for now.</p>
                </div>)
            }
            <Footer/>
        </div>
    );
}

export default Workshops;