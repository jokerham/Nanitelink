import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from '@mui/material';

// Enumerating the different types of message boxes
export enum MessageBoxType {
  OK = 'OK',
  OKCancel = 'OKCancel',
  YesNo = 'YesNo',
}

// Defining the props interface
interface GeneralMessagePopupProps {
  open: boolean;
  onClose: (response: string) => void;
  title: string;
  message: string;
  type: MessageBoxType;
}

const GeneralMessagePopup: React.FC<GeneralMessagePopupProps> = ({ open, onClose, title, message, type }) => {
  const renderButtons = () => {
    switch (type) {
    case MessageBoxType.OK:
      return <Button onClick={() => onClose('OK')}>OK</Button>;
    case MessageBoxType.OKCancel:
      return (
        <>
          <Button onClick={() => onClose('OK')}>OK</Button>
          <Button onClick={() => onClose('Cancel')}>Cancel</Button>
        </>
      );
    case MessageBoxType.YesNo:
      return (
        <>
          <Button onClick={() => onClose('Yes')}>Yes</Button>
          <Button onClick={() => onClose('No')}>No</Button>
        </>
      );
    default:
      return <Button onClick={() => onClose('Close')}>Close</Button>;
    }
  };

  return (
    <Dialog open={open} onClose={() => onClose('Close')}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>{renderButtons()}</DialogActions>
    </Dialog>
  );
};

export default GeneralMessagePopup;
