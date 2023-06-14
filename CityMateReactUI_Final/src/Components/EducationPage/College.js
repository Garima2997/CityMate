import React from "react";
import { Table } from 'react-bootstrap';

const School=({college})=> {
    return (
        <div className="table-responsive">
        <Table className="table table-bordered">
      <tbody>
        <tr >
          <td width="5%">{college.id}</td>
          <td width="15%" >{college.collegeName}</td>
          <td width="15%">{college.principalName}</td>
          <td width="15%">{college.collegeCategory}</td>
          <td width="10%">{college.courses}</td>
          <td width="15%">{college.location}</td>
          <td width="15%">{college.telephoneNo}</td>
        </tr>
      </tbody>
    </Table>
    </div>
    )
    }

export default School;
