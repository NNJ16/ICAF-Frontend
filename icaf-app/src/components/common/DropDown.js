import React from "react";
import {DropdownItem, DropdownMenu} from "reactstrap";
import { useHistory } from 'react-router-dom';
const token = JSON.parse(sessionStorage.getItem("token"));
let userType = "";

if(token){
    userType= token.type;
}

const DropDown = ()=>{
    const history = useHistory();

    const logOut=()=>{
        sessionStorage.removeItem("token");
        history.push("/login");
        window.location.reload();
    }
    const goToWorkshops = ()=>{
        history.push(`/profile/workshop/${token.id}`);
    }
    const goToResearches = ()=>{
        history.push(`/profile/research/${token.id}`);
    }

    const goToConferences = ()=>{
        history.push(`/profile/conference/${token.id}`);
    }

    if(userType==="user"){
        return(
            <div>
                <DropdownItem onClick={goToWorkshops}>Workshops</DropdownItem>
                <DropdownItem>Researches</DropdownItem>
                <DropdownItem>Conferences</DropdownItem>
                <DropdownItem divider/>
                <DropdownItem onClick={logOut}>LogOut</DropdownItem>
            </div>
        );
    }

    return (
        <div>
            <DropdownItem>Downloads</DropdownItem>
            <DropdownItem>Register</DropdownItem>
        </div>
    );
}
export default DropDown;