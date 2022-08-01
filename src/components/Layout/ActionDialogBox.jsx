import { Delete,Edit,Visibility } from "@material-ui/icons"
import { ActionButton } from "./ActionButton"
import React from "react";

export const ViewButton = () => {
  return (
    <>
      <ActionButton actionButton={<Visibility/>} dialogTitle='View Task' dialogContent='Viewing the task'  />
    </>
  )
}



export const EditButton = () => {
    return (
      <>
              <ActionButton actionButton={<Edit/>} dialogTitle='Edit Task' dialogContent='Editing the task' alternateActionButton dialogAction='Save Changes' actionButton_color="success"/>

      </>
    )
  }
  

export const DeleteButton = () => {
return (
    <>
          <ActionButton actionButton={<Delete/> } dialogTitle='Delete Task' dialogContent='Are you sure you want to delete the selected task?' alternateActionButton dialogAction='Confirm Delete'  actionButton_color="error"  />

    </>
)
}