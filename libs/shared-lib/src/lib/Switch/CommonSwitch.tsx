import React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

interface CommonSwitchProps {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
    label: string,
  ) => void;
}

interface SwitchGroupProps {
  switches: CommonSwitchProps[];
  direction?: 'row' | 'column';
}

export const CommonSwitch: React.FC<SwitchGroupProps> = ({
  switches,
  direction = 'column',
}) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
    label: string,
  ) => {
    const targetSwitch = switches.find((sw) => sw.label === label);
    if (targetSwitch && targetSwitch.onChange) {
      targetSwitch.onChange(event, checked, label);
    }
  };

  return (
    <FormGroup row={direction === 'row'} sx={{ gap: 2 }}>
      {switches.map(
        ({ label, checked, disabled, required, onChange }, index) => (
          <FormControlLabel
            key={label}
            control={
              <Switch
                checked={checked}
                disabled={disabled}
                onChange={(event, checked) =>
                  handleChange(event, checked, label)
                }
              />
            }
            label={label}
            required={required}
          />
        ),
      )}
    </FormGroup>
  );
};
