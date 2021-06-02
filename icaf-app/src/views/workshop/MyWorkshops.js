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
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Title from "../../components/Header/Title";
import API from "../../components/api";
import {IconButton} from "@material-ui/core";

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
    const [rows, setRows] = useState([]);
    const userId = "0123456789";

    useEffect(() => {
        API.get(`/workshop/${userId}`)
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
            <Title title="MY WORKSHOPS"/>
            <div className="wr-table">
                <div className="wr-table-header">
                    <Row>
                        <Col className="wr-dashboard-header">
                            <h3>Manage My Workshops ({rows.length})</h3>
                        </Col>
                        <Col className="wr-submit">
                            <Button onClick={() => {
                            }}>Create Workshop</Button>
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
                                <StyledTableCell align="left">Actions</StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.length > 0 && rows.map((row) => (
                                <StyledTableRow key={row._id}>
                                    <StyledTableCell style={{ width: "10%"}} align="left">{row.topic}</StyledTableCell>
                                    <StyledTableCell style={{ width: "30%" }} align="left">{row.description}</StyledTableCell>
                                    <StyledTableCell style={{ width: "20%" }} align="left">
                                        <IconButton edge="start">
                                            <InsertDriveFileIcon/>
                                        </IconButton>{row.filename}
                                    </StyledTableCell>
                                    <StyledTableCell style={{ width: "10%" }} align="left">{row.approvalStatus}</StyledTableCell>
                                    <StyledTableCell style={{ width: "5%" }} align="left"><Button color="secondary">ReSubmit</Button></StyledTableCell>
                                    <StyledTableCell style={{ width: "5%"}} align="left"><Button color="warning">Remove</Button></StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <Footer/>
        </div>
    );
}

export default MyWorkshops;