import React, { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Dispanser = () => {
const [showdispanser, getdispanser] = useState([]);

useEffect(()=>{
    fetch("https://6167cd8dba841a001727c409.mockapi.io/api/dispenser")
   .then((res)=>{
      return res.json();
    })
    .then((data)=>{
        console.log(showdispanser);
        getdispanser(data)
    })
},[])

    return (

        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>firstName</TableCell>
              <TableCell>lastName</TableCell>
              <TableCell>rxLevel</TableCell>
              <TableCell>contact</TableCell>
        
            </TableRow>
          </TableHead>
          <TableBody>
            {showdispanser.slice(0,25).map((item, index) => (
              <TableRow
                key={index.id}
               
              >
               
                <TableCell>{item.firstName}</TableCell>
                <TableCell>{item.lastName}</TableCell>
                <TableCell>{item.rxLevel}</TableCell>
                <TableCell>{item.contact}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default Dispanser;