import React from 'react';
import { Box, TextField, useTheme } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

interface CommonDatePickerProps {
  label?: string;
  value: Dayjs | null;
  onChange: (newValue: Dayjs | null) => void;
}

export const CommonDatePicker: React.FC<CommonDatePickerProps> = ({
  label = 'Select date',
  value,
  onChange,
}) => {
  const theme = useTheme();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        <DatePicker
          label={label}
          value={value}
          onChange={onChange}
          format="ddd, MMM D"
          slotProps={{
            textField: {
              fullWidth: true,
              variant: 'outlined',
              InputProps: {
                sx: {
                  borderRadius: 2,
                  backgroundColor: 'info.white',
                },
              },
            },
            popper: {
              modifiers: [
                {
                  name: 'offset',
                  options: {
                    offset: [0, 10],
                  },
                },
              ],
              sx: {
                '& .MuiPaper-root': {
                  borderRadius: 4,
                  backgroundColor: '#e1e6e8',
                  boxShadow: theme.shadows[4],
                },
                '& .MuiPickersDay-root.Mui-selected': {
                  backgroundColor: theme.palette.primary.main,
                },
                '& .MuiPickersDay-root:hover': {
                  backgroundColor: theme.palette.primary.light,
                },
                '& .MuiTypography-root': {
                  fontWeight: 500,
                },
              },
            },
          }}
        />
      </Box>
    </LocalizationProvider>
  );
};
