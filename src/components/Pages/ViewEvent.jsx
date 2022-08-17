import { Paper, Typography} from '@material-ui/core'
import { Table, TableContainer, TableCell, TableRow} from '@mui/material'
import {React } from 'react'
import './Pages.css'

export const ViewEvent = ({eventTitle,eventDate,eventDetail}) => {
    return (
      <>
      <TableContainer
          component={Paper}
          className="paperStyle"
          sx={{ maxWidth: 700 }}
        >
          {/* <Typography className="formHeading" variant="h5">
            USER DETAIL
          </Typography> */}
          <Table>
            <TableRow>
              <TableCell variant="head">
                <Typography 
                variant="header" 
                className="tableHead">
                  EVENT
                </Typography>
              </TableCell>
              <TableCell>
              <Typography 
                variant="header" 
                className="tableHead">
                  {eventTitle}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">
                <Typography variant="header" className="tableHead">
                  EVENT DATE
                </Typography>
              </TableCell>
              <TableCell>
              <Typography variant="header" className="tableHead">
                  {eventDate}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">
                <Typography variant="header" className="tableHead">
                  EVENT DETAILS
                </Typography>
              </TableCell>
              <TableCell>
              <Typography variant="header" className="tableHead">
                  {eventDetail}
                </Typography>
              </TableCell>
            </TableRow>
 
          </Table>
        </TableContainer>
      </>
    )
  }
  