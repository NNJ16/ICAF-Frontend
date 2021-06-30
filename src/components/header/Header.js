import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledButtonDropdown
} from 'reactstrap';
import DropDown from "../common/DropDown";

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();
    const toggle = () => setIsOpen(!isOpen);


    const [navbar, setNavbar] = useState(false);

    const callForWorkshop = () => {
        history.push("/workshop/submit");
    }
    const goToWorkshop = () => {
        history.push("/workshops");
    }
    const callForPaper = () => {
        history.push("/research/submit");
    }

    const registration = () => {
        history.push("/conference/registration")
    }

    const changeNavbar = () => {
        if(window.scrollY>=80){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
      
        console.log(window.scrollY)
    }
    window.addEventListener('scroll',changeNavbar);

    return <div>
        <Navbar className={navbar ? "navBarr1" : "navBarr"} fixed="top" light expand="md">
            <NavbarBrand className="icafLogo" href="/home">ICAF</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink className="navItem" >KEYNOTES</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret className="navItem">
                            RESEARCHES
                        </DropdownToggle>
                        <DropdownMenu right className="dropMenu">
                            <DropdownItem onClick={callForPaper}>
                                Call for paper
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret className="navItem">
                            WORKSHOPS
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem onClick={goToWorkshop}>
                                Workshops
                            </DropdownItem>
                            <DropdownItem onClick={callForWorkshop}>
                                Call for Workshops
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink  className="navItem" href="/conference/registration">REGISTRATIONS</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink  className="navItem" href="/conference/registration">DOWNLOADS</NavLink>
                    </NavItem>
                </Nav>
                <UncontrolledButtonDropdown >
                    <DropdownToggle caret className="userOption" >
                       <AccountBoxIcon  /> MY ICAF
                    </DropdownToggle>
                    <DropdownMenu>
                       <DropDown/>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
            </Collapse>
        </Navbar>
    </div>;
}

export default Header;