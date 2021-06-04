import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

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
    return <div>
        <Navbar dark={true} color="dark" fixed="top" light expand="md">
            <NavbarBrand href="/">ICAF</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink>KEYNOTES</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            RESEARCHES
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem onClick={callForPaper}>
                                Call for paper
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
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
                        <NavLink href="/conference/registration">REGISTRATIONS</NavLink>
                    </NavItem>
                </Nav>
                <UncontrolledButtonDropdown>
                    <DropdownToggle caret>
                       MY ICAF
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