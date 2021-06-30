import React, {useState, useEffect} from 'react';
import {Col, Row, Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Title from "../../components/header/Title";
import API from "../../components/api";
import download from "js-file-download";
import { useHistory } from 'react-router-dom';
import 'react-confirm-alert/src/react-confirm-alert.css';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import Card from 'react-bootstrap/Card'
import {IconButton} from "@material-ui/core";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import DownloadTable from "../../components/admin/DownloadTable"

import {makeStyles, withStyles} from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import {confirmAlert} from "react-confirm-alert";



const token =JSON.parse(sessionStorage.getItem("token"));

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "grey",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});


const ViewTemplates = (props) => {  const history = useHistory();
    const [rows, setRows] = useState([]);
    const [status,setStatus] = useState("all");
    const token =JSON.parse(sessionStorage.getItem("token"));
    const userId = token.id;

    useEffect(() => {
        API.get(`/download/`)
            .then(res => {
                setRows(res.data)
            })
            .catch(err => {
                console.log(err)
            });
    }, [rows]);

    const AllWorkshops =()=>{
        setStatus("all");
    }
    const ApprovedWorkshops = ()=>{
        setStatus("approved")
    }
    const PendingWorkshops =()=>{
        setStatus("pending")
    }
    const RejectedWorkshops =()=>{
        setStatus("rejected")
    }


    const downloadProposal = (file) => {
        API.get(`/download/download/${file}`, {responseType: 'blob'})
            .then(function (response) {
                download(response.data, `${file.substr(14, file.length - 1)}`);
            });
    }
    const classes = useStyles();
    return (
        
        <div>
            <Header/>
            <Title title="MANAGE WORKSHOPS"/>
            <div className="wr-table">
                <div className="wr-table-header">
                    <Row>
                        <Col className="wr-dashboard-header">
                            <h4>Manage Workshops</h4>
                        </Col>
                        <Col className="wr-submit">
                            <UncontrolledDropdown>
                                <DropdownToggle caret>
                                    Status Filter
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={AllWorkshops}>All</DropdownItem>
                                    <DropdownItem onClick={PendingWorkshops}>Pending</DropdownItem>
                                    <DropdownItem onClick={ApprovedWorkshops}>Approved</DropdownItem>
                                    <DropdownItem onClick={RejectedWorkshops}>Rejected</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Col>
                    </Row>
                </div>
                <br/>
                
                
                <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Topic</StyledTableCell>
                        <StyledTableCell align="left">Description</StyledTableCell>
                        <StyledTableCell align="left">Proposal</StyledTableCell>
                        <StyledTableCell align="left">Status</StyledTableCell>
                        <StyledTableCell align="left">Submitted Date</StyledTableCell>
                        <StyledTableCell align="left">Actions</StyledTableCell>
                        <StyledTableCell align="left"></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                {rows.length > 0 && rows.map((row) => {
                    if (row.status === status || status === "all") {
                    
                        return (

                            <StyledTableRow key={row._id}>
                            <StyledTableCell style={{width: "12.5%"}} align="left">{row.type}</StyledTableCell>
                            <StyledTableCell style={{width: "30%"}} align="left">{row.description}</StyledTableCell>
                            <StyledTableCell style={{width: "20%"}} align="left">
                                <IconButton edge="start" onClick={() => downloadProposal(row.filename)}>
                                    <InsertDriveFileIcon/>
                                </IconButton>{row.filename.substr(14, row.filename.length - 1)}
                            </StyledTableCell>
                            <StyledTableCell style={{width: "11%"}} align="left">{new Date(row.submitDate).toUTCString()}</StyledTableCell>
                            <StyledTableCell style={{width: "2%"}} align="left">
                               
                                 
                                       
                                
                            </StyledTableCell>
                            <StyledTableCell style={{width: "2%"}} align="left">
                               
                            </StyledTableCell>
                        </StyledTableRow>
                    )
                    }
                }

            )
            }


                </TableBody>
            </Table>
        </TableContainer>


            </div>
            <Footer/>
        </div>
    );
}
export default ViewTemplates;
