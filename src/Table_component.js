
import {Table,Image} from 'react-bootstrap';
import logo from './Laptop-computer.jpg';
import './Style.css';

function Table_component()
{
    return(<div className="main_div">

        <Image className="my_logo" src={logo} roundedCircle />
        <Image className="my_logo" src={logo} thumbnail />


        <Table responsive variant="success"  striped bordered hover size="sm">
                <tr>
                    <td>Sr No</td>
                    <td>User Name </td>
                    <td>User Mobile </td>
                    <td>User Age </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Anuj </td>
                    <td>123123123 </td>
                    <td>25</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Wisdom </td>
                    <td>123123123 </td>
                    <td>25</td>
                </tr>
        </Table>
    </div>);
}

export default Table_component;

