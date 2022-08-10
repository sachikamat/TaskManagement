import { Delete,Edit,Visibility } from "@material-ui/icons"
import { ActionButton } from "./ActionButton"
import React from "react";

export const ViewButton = ({dialogTitle,dialogContent,handleView}) => {
  return (
    <>
      <ActionButton
        actionButton={<Visibility />}
        dialogTitle={dialogTitle}
        dialogContent={dialogContent}
        handleClose={handleView}
      />
    </>
  );
};


export const EditButton = ({dialogContent,dialogTitle,handleEdit}) => {
  return (
    <>
      <ActionButton
        actionButton={<Edit />}
        dialogTitle={dialogTitle}
        dialogContent={dialogContent}
        alternateActionButton
        dialogAction="Save Changes"
        actionButton_color="success"
        handleClose={handleEdit}
      />
    </>
  );
};

export const DeleteButton = ({dialogContent,dialogTitle,handleDelete}) => {
  return (
    <>
      <ActionButton
        actionButton={<Delete />}
        dialogTitle={dialogTitle}
        dialogContent={dialogContent}
        alternateActionButton
        dialogAction="Confirm Delete"
        actionButton_color="error"
        handleClose={handleDelete}
      />
    </>
  );
};
