import React from "react";
import { Table } from 'react-bootstrap';

const School=({school})=> {
    return (
        <div className="table-responsive">
        <Table className="table table-bordered">
      <tbody>
        <tr >
          <td width="5%">{school.id}</td>
          <td width="15%" >{school.schoolName}</td>
          <td width="15%">{school.principalName}</td>
          <td width="10%">{school.boardName}</td>
          <td width="15%">{school.schoolCategory}</td>
          <td width="15%">{school.location}</td>
          <td width="15%">{school.telephoneNo}</td>
        </tr>
      </tbody>
    </Table>
    </div>
    )
    }

export default School
