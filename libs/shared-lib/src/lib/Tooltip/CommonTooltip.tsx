import React from 'react';
import {
  Tooltip,
  TooltipProps,
  Box,
  Typography,
  Button,
  Paper,
} from '@mui/material';

interface Action {
  label: string;
  onClick: () => void;
}

interface CommonTooltipProps extends Omit<TooltipProps, 'title'> {
  title: string;
  description: string;
  actions?: Action[];
  borderRadius?: number | string;
  backgroundColor?: string;
  textColor?: string;
  maxWidth?: number | string;
  children: React.ReactElement;
}

const CommonTooltip: React.FC<CommonTooltipProps> = ({
  title,
  description,
  actions = [],
  borderRadius = '12px',
  backgroundColor = '#fff',
  textColor = '#666',
  maxWidth = 300,
  children,
  ...tooltipProps
}) => {
  return (
    <Tooltip
      {...tooltipProps}
      arrow
      placement={tooltipProps.placement || 'top'}
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: 'transparent', // remove black background
            p: 0, // remove default padding
            boxShadow: 'none',
          },
        },
        arrow: {
          sx: {
            color: backgroundColor, // match your custom tooltip bg
          },
        },
      }}
      title={
        <Paper
          elevation={3}
          sx={{
            m: 0,
            p: 2,
            borderRadius,
            bgcolor: backgroundColor,
            color: textColor,
            maxWidth,
          }}
        >
          {title && (
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              {title}
            </Typography>
          )}
          {description && (
            <Typography variant="body2" sx={{ mb: actions.length ? 1.5 : 0 }}>
              {description}
            </Typography>
          )}

          {actions.length > 0 && (
            <Box display="flex" gap={2}>
              {actions.map((action, idx) => (
                <Button
                  key={idx}
                  size="small"
                  color='primary'
                  variant="text"
                  onClick={(e) => {
                    e.stopPropagation();
                    action.onClick();
                  }}
                  sx={{ p: 0, minWidth: 'auto' }}
                >
                  {action.label}
                </Button>
              ))}
            </Box>
          )}
        </Paper>
      }
    >
      {children}
    </Tooltip>
  );
};

export default CommonTooltip;
