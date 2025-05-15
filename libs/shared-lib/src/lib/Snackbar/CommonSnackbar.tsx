import React from 'react';
import {
  Snackbar,
  IconButton,
  Button,
  Box,
  Typography,
  SnackbarProps,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface CommonSnackbarProps extends SnackbarProps {
  message: string;
  actionText?: string;
  onActionClick?: () => void;
  onClose: () => void;
  direction: string;
}

export const CommonSnackbar: React.FC<CommonSnackbarProps> = ({
  open,
  message,
  onClose,
  actionText,
  direction,
  onActionClick,
  autoHideDuration = 6000,
  ...rest
}) => {
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      autoHideDuration={autoHideDuration}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      ContentProps={{
        sx: {
          backgroundColor: '#2E2E2E',
          color: '#E0E0E0',
          borderRadius: '8px',
          boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
          maxWidth: 400,
        },
      }}
      message={
        <Box
          sx={{
            display: direction === 'row' ? 'flex' : 'block',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 2,
            width: '100%',
          }}
        >
          <Typography color={'white'} variant="body2" sx={{ lineHeight: 1.5 }} mb={0}>
            {message}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              justifyContent: direction === 'row' ? '' : 'end',
            }}
          >
            {actionText && (
              <Button
                onClick={onActionClick}
                sx={{
                  color: '#B4C8FF',
                  fontWeight: 600,
                  textTransform: 'none',
                  textWrap: 'nowrap',
                }}
              >
                {actionText}
              </Button>
            )}
            <IconButton
              size="small"
              sx={{ color: '#E0E0E0' }}
              onClick={onClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      }
      {...rest}
    />
  );
};
