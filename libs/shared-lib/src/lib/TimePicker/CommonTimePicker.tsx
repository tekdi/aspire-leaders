import React from 'react';
import { Box, Paper, useTheme } from '@mui/material';
import { LocalizationProvider, StaticTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

interface CommonTimePickerProps {
  label?: string;
  value: Dayjs | null;
  onChange: (newValue: Dayjs | null) => void;
  orientation?: 'portrait' | 'landscape';
}

export const CommonTimePicker: React.FC<CommonTimePickerProps> = ({
  label = 'Select time',
  value,
  onChange,
  orientation = 'portrait',
}) => {
  const theme = useTheme();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper
        elevation={0}
        sx={{
          p: 2,
          borderRadius: 4,
          width: 320,
          bgcolor: '#e1e6e8',
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        {label && (
          <Box sx={{ fontSize: 14, mb: 1, color: 'text.secondary' }}>
            {label}
          </Box>
        )}
        <StaticTimePicker
          orientation={orientation}
          displayStaticWrapperAs="desktop"
          value={value}
          onChange={onChange}
          ampm
          slotProps={{
            actionBar: {
              actions: ['cancel', 'accept'],
            },
          }}
          sx={{
            '& .MuiClock-root': {
              mt: 2,
            },
            '& .MuiTypography-root': {
              fontWeight: 500,
            },
            '& .MuiClock-pin': {
              backgroundColor: theme.palette.primary.main,
            },
            '& .MuiClockPointer-pointer': {
              backgroundColor: theme.palette.primary.main,
            },
            '& .MuiPickersClockNumber-root.Mui-selected': {
              backgroundColor: theme.palette.primary.main,
              color: '#fff',
            },
            '& .MuiPickersClockNumber-root': {
              fontSize: 14,
            },
            '& .MuiButtonBase-root': {
              fontSize: 14,
              color: theme.palette.primary.main,
            },
            '& .MuiPickersToolbar-root': {
              backgroundColor: 'transparent',
              padding: 0,
              justifyContent: 'center',
            },
            '& .MuiPickersToolbarText-root': {
              fontSize: '2.5rem',
            },
            '& .MuiDialogActions-root': {
              justifyContent: 'space-between',
              px: 2,
              pb: 1,
            },
          }}
        />
      </Paper>
    </LocalizationProvider>
  );
};
