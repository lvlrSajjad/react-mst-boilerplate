import * as React from "react";
import Dialog, {DialogProps} from '@mui/material/Dialog';
import DialogActions, {DialogActionsProps} from '@mui/material/DialogActions';
import DialogContent, {DialogContentProps} from '@mui/material/DialogContent';
import DialogTitle, {DialogTitleProps} from '@mui/material/DialogTitle';
import DialogContentText, {DialogContentTextProps} from '@mui/material/DialogContentText';
import {styled} from '@mui/material/styles';
import { CButton } from "..";

export const CDialog = styled(Dialog)<DialogProps>(
  (/* { theme } */) => ({
  }),
);

export const CDialogActions = styled(DialogActions)<DialogActionsProps>(
  (/* { theme } */) => ({
  }),
);

export const CDialogContent = styled(DialogContent)<DialogContentProps>(
  (/* { theme } */) => ({
  }),
);

export const CDialogTitle = styled(DialogTitle)<DialogTitleProps>(
  (/* { theme } */) => ({
  }),
);

export const CDialogContentText = styled(DialogContentText)<DialogContentTextProps>(
  (/* { theme } */) => ({
  }),
);

interface CConfirmationDialogProps extends DialogProps {
  text: string
  title?: string
  acceptTitle?: string
  declineTitle?: string
  onAccept: () => void
  onDecline: () => void
}

export const CConfirmationDialog = (props: CConfirmationDialogProps) => {

  const {text, title, acceptTitle, declineTitle, onAccept, onDecline} = props

  return (
    <CDialog open={props.open}>
      {title && <CDialogTitle>
        {title}
      </CDialogTitle>}
      <CDialogContent>
        <CDialogContentText>
          {text}
        </CDialogContentText>
      </CDialogContent>
      <DialogActions>
        <CButton onClick={onDecline}>{declineTitle || `Disagree`}</CButton>
        <CButton onClick={onAccept}>{acceptTitle || `Agree`}</CButton>
      </DialogActions>
    </CDialog>
  )
}
