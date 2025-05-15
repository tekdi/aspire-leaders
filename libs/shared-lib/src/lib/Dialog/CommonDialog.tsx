import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';

interface CommonDialogProps {
  isOpen: boolean;
  onClose: () => void;
  header?: React.ReactNode;
  content?: React.ReactNode;
  actions?: React.ReactNode;
  disableCloseOnBackdropClick?: boolean;
}

export const CommonDialog: React.FC<CommonDialogProps> = ({
  isOpen,
  onClose,
  header,
  content,
  actions,
  disableCloseOnBackdropClick = false,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={disableCloseOnBackdropClick ? undefined : onClose}
      aria-labelledby="common-dialog-title"
      aria-describedby="common-dialog-description"
      sx={{borderRadius: '24px'}}
    >
      {header && (
        <DialogTitle
          fontSize={'24px'}
          lineHeight={'32px'}
          fontWeight={'400'}
          color={'#171D1E'}
          id="common-dialog-title"
        >
          {header}
        </DialogTitle>
      )}
      {content && (
        <DialogContent
          sx={{
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '20px',
            color: '#444746',
            paddingBottom: 0,
          }}
        >
          {content}
        </DialogContent>
      )}
      {actions && (
        <DialogActions sx={{
          padding: '24px'
        }}>
          <Button variant="contained" color="primary">
            {actions}
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
};
