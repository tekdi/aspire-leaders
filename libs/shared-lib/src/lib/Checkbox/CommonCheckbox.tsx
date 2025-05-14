import React, { useState, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';

interface CommonCheckboxProps extends CheckboxProps {
  label: string;
  required?: boolean;
  disabled?: boolean;
}

interface CheckboxGroupProps {
  checkboxes: CommonCheckboxProps[];
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
    label: string,
  ) => void;
  direction?: 'row' | 'column';
  checkIconColor?: string;
  checkedBgColor?: string;
  CustomCheckIcon?: React.ElementType;
}

export const CommonCheckbox: React.FC<CheckboxGroupProps> = ({
  checkboxes,
  onChange,
  direction = 'column',
  checkIconColor = '#fff',
  checkedBgColor = '#007D80',
  CustomCheckIcon,
}) => {
  const [checkedState, setCheckedState] = useState(checkboxes.map(() => false));

  useEffect(() => {
    // Set initial checked states based on passed `checked` prop
    setCheckedState(checkboxes.map((checkbox) => checkbox.checked || false));
  }, [checkboxes]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
    label: string,
    index: number,
  ) => {
    if (onChange) {
      onChange(event, checked, label);
    }
    const newCheckedState = [...checkedState];
    newCheckedState[index] = checked;
    setCheckedState(newCheckedState);
  };

  const renderCheckedIcon = (disabled: boolean) => (
    <span
      style={{
        width: 20,
        height: 20,
        backgroundColor: disabled ? '#ccc' : checkedBgColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
      }}
    >
      {CustomCheckIcon ? (
        <CustomCheckIcon
          style={{ color: disabled ? '#ffffff' : checkIconColor, fontSize: 16 }}
        />
      ) : (
        <span
          style={{
            width: 10,
            height: 10,
            backgroundColor: disabled ? '#888' : checkIconColor,
          }}
        />
      )}
    </span>
  );

  const renderUncheckedIcon = (disabled: boolean) => (
    <span
      style={{
        width: 20,
        height: 20,
        display: 'inline-block',
        border: `2px solid ${disabled ? '#ccc' : checkedBgColor}`,
        borderRadius: 4,
        backgroundColor: disabled ? '#f0f0f0' : 'transparent',
      }}
    />
  );

  return (
    <FormGroup row={direction === 'row'} sx={{ gap: 2 }}>
      {checkboxes.map(
        ({ label, required, disabled = false, checked, ...props }, index) => (
          <FormControlLabel
            key={label}
            control={
              <Checkbox
                {...props}
                disabled={disabled}
                checked={checkedState[index]} // Use checkedState here
                icon={renderUncheckedIcon(disabled)}
                checkedIcon={renderCheckedIcon(disabled)}
                onChange={(event, checked) =>
                  handleChange(event, checked, label, index)
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
