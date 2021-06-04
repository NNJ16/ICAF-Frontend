import React, {useState, useEffect} from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import Paper from '@material-ui/core/Paper';
import {Col, Row, Button} from "reactstrap";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Title from "../../components/header/Title";
import API from "../../components/api";
import {IconButton} from "@material-ui/core";
import download from 'js-file-download';
import { useHistory } from 'react-router-dom';
import EditWorkshop from "./EditWorkshop";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

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

const MyWorkshops = () => {
    const classes = useStyles();
    const history = useHistory();
    const [rows, setRows] = useState([]);
    const token =JSON.parse(sessionStorage.getItem("token"));
    const userId = token.id;

    useEffect(() => {
        API.get(`/workshop/${userId}`)
            .then(res => {
                setRows(res.data)
            })
            .catch(err => {
                console.log(err)
            });
    }, []);

    const downloadProposal = (file)=>{
        API.get(`/workshop/download/${file}`,{ responseType: 'blob'})
            .then(function (response) {
                download(response.data,`${file.substr(14,file.length-1)}`);
            });
    }

    const deleteWorkshop=(id)=>{
        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Are you sure to delete this Workshop.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        console.log(id);
                        window. location. reload();
                    }
                },
                {
                    label: 'No'
                }
            ]
        });
    }
    return (
        <div>
            <Header/>
            <Title title="MY WORKSHOPS"/>
            <div className="wr-table">
                <div className="wr-table-header">
                    <Row>
                        <Col className="wr-dashboard-header">
                            <h3>Manage My Workshops ({rows.length})</h3>
                        </Col>
                        <Col className="wr-submit">
                            <Button onClick={() => {
                                history.push("/workshop/submit")
                            }}>Create Workshop</Button>
                        </Col>
                    </Row>
                </div>
                <div className="wr-table-sub-header">
                        <div className="wr-dashboard-sub-header">
                            <h4>Approval Pending Workshops ({rows.length})</h4>
                        </div>
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
                            {rows.length > 0 ? rows.map((row) => {
                                if(row.approvalStatus==="pending"){
                                    return(
                                        <StyledTableRow key={row._id}>
                                            <StyledTableCell style={{ width: "12.5%"}} align="left">{row.topic}</StyledTableCell>
                                            <StyledTableCell style={{ width: "30%" }} align="left">{row.description}</StyledTableCell>
                                            <StyledTableCell style={{ width: "20%" }} align="left">
                                                <IconButton edge="start" onClick={()=>downloadProposal(row.filename)}>
                                                    <InsertDriveFileIcon/>
                                                </IconButton>{row.filename.substr(14,row.filename.length-1)}
                                            </StyledTableCell>
                                            <StyledTableCell style={{ width: "2.5%" }} align="left">{row.approvalStatus}</StyledTableCell>
                                            <StyledTableCell style={{ width: "11%" }} align="left">{new Date(row.submitDate).toUTCString()}</StyledTableCell>
                                            <StyledTableCell style={{ width: "2%" }} align="left"><EditWorkshop row={row}/></StyledTableCell>
                                            <StyledTableCell style={{ width: "2%"}} align="left"><Button onClick={()=>{deleteWorkshop(row._id)}} color="warning">Remove</Button></StyledTableCell>
                                        </StyledTableRow>
                                    )
                                }
                            }): <tr>
                                    <td className="table-row-nodata">There are no any workshops</td>
                                </tr>}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <Footer/>
        </div>
    );
}

export default MyWorkshops;
//<Button color="secondary">Resubmit</Button>