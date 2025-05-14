import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';

interface CommonChipProps {
  label: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconClick?: () => void;
  borderRadius?: number | string;
  backgroundColor?: string;
  paddingX?: number | string;
  paddingY?: number | string;
}

const CommonChip: React.FC<CommonChipProps> = ({
  label,
  leftIcon,
  rightIcon,
  onRightIconClick,
  borderRadius = '999px',
  backgroundColor = '#e8f0f4',
  paddingX = 1.5,
  paddingY = 0.5,
}) => {
  return (
    <Box
      display="inline-flex"
      alignItems="center"
      sx={{
        backgroundColor,
        borderRadius,
        px: paddingX,
        py: paddingY,
        gap: 1,
      }}
    >
      {leftIcon && <Box>{leftIcon}</Box>}

      <Typography variant="body2" fontWeight={500} mb={0} color="primary.dark">
        {label}
      </Typography>

      {rightIcon && (
        <IconButton
          size="small"
          onClick={onRightIconClick}
          sx={{
            padding: 0.5,
            color: 'primary.dark',
          }}
        >
          {rightIcon}
        </IconButton>
      )}
    </Box>
  );
};

export default CommonChip;
