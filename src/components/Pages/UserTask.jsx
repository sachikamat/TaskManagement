import { Table, TableContainer,Paper } from '@mui/material'
import React from 'react'

function createData(taskTitle,taskDescription,taskStatus){
    return {taskTitle,taskDescription,taskStatus}
}

const rows=[
    createData('Login Form','Please work on creating a login form today.','Pending'),
    createData('Find bugs','Please work on making the code bug free','On-going')
]

export const UserTask = () => {
  return (
    <>
        <TableContainer component={Paper}></TableContainer>
    
    </>
  )
}
