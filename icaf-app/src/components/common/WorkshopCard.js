import React from "react";
import {Button, Col, Row} from "reactstrap";

const WorkshopCard = (props) => {
    return (
        <div className="conference-card">
            <h2>Conference Topic</h2>
            <p>The 3rd International conference on advancements in computing
                -2021 (ICAC2021) is organized by the Faculty of Computing of the
                Sri Lanka Institute of Information Technology (SLIIT)
                as an open forum for academics along with industry professionals
                to present the latest findings and research output and practical deployments
                in the Computer Science and Information Technology domains</p>
            <hr/>
            <p>Details :</p>
            <div>
                <p>* Submitted date: 15th March – 30th June</p>
                <p>* Submitted by: 15th March – 30th June</p>
            </div>
            <hr/>
        </div>
    );
}

export default WorkshopCard;