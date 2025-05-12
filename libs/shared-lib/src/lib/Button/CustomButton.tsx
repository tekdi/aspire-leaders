'use client';
import React from 'react';
import { Box, Button, Typography, ButtonProps } from '@mui/material';
interface CustomButtonProps {
  label?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  borderRadius?: string;
  color?: ButtonProps['color'];
  fontSize?: string | number;
  padding?: string | number;
  fontWeight?: string | number;
  supportingText?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  customVariant?: ButtonProps['variant'];
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  label = 'Continue',
  width = '',
  height = '',
  padding = '12px 60px',
  backgroundColor = '',
  borderRadius = '50px',
  color,
  fontSize = '16px',
  fontWeight = 'bold',
  supportingText = '',
  onClick,
  startIcon,
  endIcon,
  customVariant = 'contained',
  ...props
}) => {
  return (
    <Box
      sx={{
        // borderTop: '1px solid #0000004D',
        paddingTop: 2,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button
        variant={customVariant}
        startIcon={startIcon}
        endIcon={endIcon}
        color={color}
        {...props}
        sx={{
          backgroundColor,
          borderRadius,
          width,
          height,
          textTransform: 'none',
          '&:hover': {
            backgroundColor,
          },

          fontSize,
          fontWeight,
          padding,
        }}
        onClick={onClick}
      >
        {label}
      </Button>
    </Box>
  );
};
