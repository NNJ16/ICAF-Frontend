import React from "react";
import {Button, Col, Row} from "reactstrap";
import {useHistory} from "react-router-dom";

const ConferenceCard =(props)=>{
    const history = useHistory();
    const GoToRegistration =()=>{
        history.push("/conference/register");
    }
    return(
        <div className="conference-card">
            <h2>Conference Topic</h2>
            <p>The 3rd International conference on advancements in computing
                -2021 (ICAC2021) is organized by the Faculty of Computing of the
                Sri Lanka Institute of Information Technology (SLIIT)
                as an open forum for academics along with industry professionals
                to present the latest findings and research output and practical deployments
                in the Computer Science and Information Technology domains</p>
            <hr/>
            <Row>
                <Col xs="4">
                    <p>Attendee Fee :</p>
                    <div className="attendee-price">
                        <h2>4,500 LKR</h2>
                    </div>
                </Col>
                <Col xs="8">
                    <p>Phase one Registration :</p>
                    <div>
                        <p>* Registrations open: 15th March – 30th June</p>
                    </div>
                </Col>
            </Row>
            <hr/>
            <div className="btn-reg-conference">
                <Button onClick={GoToRegistration} size="lg" color="link">Attendee Registration Form</Button>
            </div>
        </div>
    );
}

export default ConferenceCard;