import React from 'react';
import {
  ToggleButton,
  ToggleButtonGroup,
  ToggleButtonGroupProps,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export interface SegmentOption {
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
    >
      {options.map(({ label, value: optionValue, disabled }, index) => {
        const isSelected = exclusive
          ? value === optionValue
          : Array.isArray(value) && value.includes(optionValue);

        return (
          <ToggleButton
            key={optionValue}
            value={optionValue}
            disabled={disabled}
            sx={{
              display: 'flex',
              minWidth: '120px',
              gap: 1,
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px 16px',
              textTransform: 'none',
              fontWeight: isSelected ? 600 : 500,
              border: '1px solid #ccc !important',
              borderRadius: 0,
              backgroundColor: isSelected ? '#E2E8F0' : '#fff',
              color: isSelected ? '#001F24' : '#000',
              borderRight:
                index !== options.length - 1 ? '1px solid #E2E8F0' : 'none',
              '&:first-of-type': {
                borderTopLeftRadius: '9999px',
                borderBottomLeftRadius: '9999px',
              },
              '&:last-of-type': {
                borderTopRightRadius: '9999px',
                borderBottomRightRadius: '9999px',
              },
              '&.Mui-selected:hover': {
                backgroundColor: '#E2E8F0',
              },
              '&.Mui-selected': {
                backgroundColor: '#E2E8F0',
              },
            }}
          >
            {isSelected && (
              <CheckIcon sx={{ fontSize: 16, color: '#0F172A' }} />
            )}
            {label}
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
};
