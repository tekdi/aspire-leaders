import React from 'react';
import {
  ToggleButton,
  ToggleButtonGroup,
  ToggleButtonGroupProps,
} from '@mui/material';

interface SegmentOption {
  label: string;
  value: string;
  image?: React.ReactNode;
  imagePosition?: 'start' | 'end';
  disabled?: boolean;
}

interface CommonSegmentButtonsProps extends Partial<ToggleButtonGroupProps> {
  options: SegmentOption[];
  value: string | string[];
  onChange: (
    event: React.MouseEvent<HTMLElement>,
    newValue: string | string[],
  ) => void;
  multiple?: boolean;
  orientation?: 'horizontal' | 'vertical';
}

export const CommonSegmentButtons: React.FC<CommonSegmentButtonsProps> = ({
  options,
  value,
  onChange,
  multiple = false,
  orientation = 'horizontal',
  exclusive = !multiple,
  ...rest
}) => {
  return (
    <ToggleButtonGroup
      value={value}
      exclusive={exclusive}
      onChange={onChange}
      orientation={orientation}
      {...rest}
      sx={{
        borderRadius: '100px',
        overflow: 'hidden', // ensure children follow the rounded corners
        border: '0.1px solid #CCCCCC', // optional: to show the group boundary
      }}
    >
      {options.map(
        ({ label, value, image, imagePosition = 'start', disabled }) => (
          <ToggleButton
            key={value}
            value={value}
            disabled={disabled}
            sx={{
              display: 'flex',
              gap: 1,
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px 12px',
              textTransform: 'none',
            }}
          >
            {imagePosition === 'start' && image}
            {label}
            {imagePosition === 'end' && image}
          </ToggleButton>
        ),
      )}
    </ToggleButtonGroup>
  );
};
