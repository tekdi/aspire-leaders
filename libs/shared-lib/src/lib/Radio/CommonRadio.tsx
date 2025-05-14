import React from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioProps,
} from '@mui/material';

interface CommonRadioOption extends RadioProps {
  label: string;
  value: string;
  disabled?: boolean;
}

interface CommonRadioProps {
  label?: string;
  name: string;
  options: CommonRadioOption[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  direction?: 'row' | 'column';
  required?: boolean;
}

export const CommonRadio: React.FC<CommonRadioProps> = ({
  label,
  name,
  options,
  value,
  onChange,
  direction = 'column',
  required = false,
}) => {
  return (
    <FormControl required={required}>
      {label && <FormLabel>{label}</FormLabel>}
      <RadioGroup
        row={direction === 'row'}
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio {...option} />}
            label={option.label}
            disabled={option.disabled}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
