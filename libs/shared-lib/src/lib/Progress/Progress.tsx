import React from 'react';
import { SxProps, Theme } from '@mui/material/styles';
import { LinearProgress } from '@mui/material';

interface CommonCircularProgressProps {
  variant?: 'determinate' | 'indeterminate';
  value?: number;
  color?: string;
  sx?: SxProps<Theme>;
}

export const Progress: React.FC<CommonCircularProgressProps> = ({
  variant = 'determinate',
  value = 0,
  color = 'primary',
  sx = {},
}) => {
  return (
    <LinearProgress
      variant={variant}
      value={value}
      sx={{
        height: 10,
        borderRadius: '24px',
        '& .MuiLinearProgress-bar': {
          borderRadius: '24px', // For the progress indicator
        },
        color,
        ...sx,
      }}
    />
  );
};
