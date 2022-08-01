import { Delete, Edit, Visibility } from "@material-ui/icons";
import { ActionButton } from "./ActionButton";

export const ViewButton = ({dialogTitle,dialogContent}) => {
  return (
    <>
      <ActionButton
        actionButton={<Visibility />}
        dialogTitle={dialogTitle}
        dialogContent={dialogContent}
      />
    </>
  );
};


export const EditButton = ({dialogContent,dialogTitle}) => {
  return (
    <>
      <ActionButton
        actionButton={<Edit />}
        dialogTitle={dialogTitle}
        dialogContent={dialogContent}
        alternateActionButton
        dialogAction="Save Changes"
        actionButton_color="success"
      />
    </>
  );
};

export const DeleteButton = ({dialogContent,dialogTitle}) => {
  return (
    <>
      <ActionButton
        actionButton={<Delete />}
        dialogTitle={dialogTitle}
        dialogContent={dialogContent}
        alternateActionButton
        dialogAction="Confirm Delete"
        actionButton_color="error"
      />
    </>
  );
};
