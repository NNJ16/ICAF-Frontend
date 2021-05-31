import React, { useState } from 'react';
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
    NavbarText
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar dark="true" color="dark" fixed="top" light expand="md">
                <NavbarBrand href="/">ICAF</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">KEYNOTES</NavLink>
                        </NavItem>
                        <NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    RESEARCHES
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Call for paper
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                WORKSHOPS
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Workshops
                                </DropdownItem>
                                <DropdownItem>
                                    Call for Workshops
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href="/components/">REGISTRATIONS</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;