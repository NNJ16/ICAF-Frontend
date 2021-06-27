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
    const goToManageResearches = () =>{

    }
    const goToManageWorkshops =()=>{

    }

    if(userType==="user"){
        return(
            <div>
                <DropdownItem onClick={goToWorkshops}>Workshops</DropdownItem>
                <DropdownItem onClick={goToResearches}>Researches</DropdownItem>
                <DropdownItem divider/>
                <DropdownItem onClick={logOut}>LogOut</DropdownItem>
            </div>
        );
    }else if(userType==="reviewer"){
        return(
            <div>
                <DropdownItem onClick={goToManageWorkshops}>Manage Workshops</DropdownItem>
                <DropdownItem onClick={goToManageResearches}>Manage Researches</DropdownItem>
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