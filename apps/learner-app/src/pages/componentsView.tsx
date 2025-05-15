import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, SelectChangeEvent } from '@mui/material';
import {
  CommonCard,
  CommonCheckbox,
  CommonDatePicker,
  CommonDialog,
  CommonRadio,
  CommonSearch,
  CommonSegmentButtons,
  CommonSelect,
  CommonSnackbar,
  CommonSwitch,
  CommonTabs,
  CommonTimePicker,
  CustomButton,
  Progress,
} from '@shared-lib';
import dayjs, { Dayjs } from 'dayjs';
import CommonChip from 'libs/shared-lib/src/lib/Chip/CommonChip';
import CommonListItem from 'libs/shared-lib/src/lib/List/CommonListItem';
import CommonMenu from 'libs/shared-lib/src/lib/Menu/CommonMenu';
import CommonTooltip from 'libs/shared-lib/src/lib/Tooltip/CommonTooltip';
import { useState } from 'react';
import styles from './index.module.css';

export function componentsView() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */

  const [switchStates, setSwitchStates] = useState({
    notifications: false,
    darkMode: true,
  });

  const handleSwitchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
    label: string,
  ) => {
    setSwitchStates((prev) => ({
      ...prev,
      [label]: checked,
    }));
  };

  const [selectedValue, setSelectedValue] = useState('option1');

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
  ) => {
    setSelectedValue(value);
  };

  const [selected, setSelected] = useState('left');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string | string[] | null,
  ) => {
    if (typeof newValue === 'string') {
      setSelected(newValue);
    }
  };

  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(true);

  const [dropdown, setDropdown] = useState<string>('');

  const handlesetDropdown = (event: SelectChangeEvent) => {
    setDropdown(event.target.value);
  };

  const options = Array.from({ length: 10 }, (_, i) => ({
    label: 'Menu item',
    onClick: () => alert(`Clicked item ${i + 1}`),
  }));

  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(dayjs());

  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome learner-app Common Components👋
            </h1>
          </div>

          <Divider sx={{ my: 4 }} />

          <CommonMenu trigger={'Common Menu Click Here'} options={options} />

          <Divider sx={{ my: 4 }} />

          <CommonCheckbox
            direction="row"
            checkboxes={[
              { label: 'Accept Terms', checked: true },
              { label: 'Subscribe', disabled: true, checked: true },
              { label: 'Notify Me', checked: true, disabled: true },
            ]}
            checkIconColor="#fff"
            checkedBgColor="#007D80"
            CustomCheckIcon={CheckIcon}
          />

          <Divider sx={{ my: 4 }} />

          <Progress variant="determinate" value={30} />

          <Divider sx={{ my: 4 }} />

          <CommonSwitch
            direction="row"
            switches={[
              {
                label: 'notifications',
                checked: switchStates.notifications,
                onChange: handleSwitchChange,
              },
              {
                label: 'darkMode',
                checked: switchStates.darkMode,
                onChange: handleSwitchChange,
              },
            ]}
          />

          <Divider sx={{ my: 4 }} />

          <CommonTabs
            value={value}
            onChange={(_, newValue) => setValue(newValue)}
            tabs={[
              {
                label: 'Tab 1',
                icon: <CheckIcon />,
                content: <div>Tab One Content</div>,
              },
              {
                label: 'Tab 2',
                icon: <CheckIcon />,
                content: <div>Tab Two Content</div>,
              },
            ]}
          />

          <Divider sx={{ my: 4 }} />

          <CommonRadio
            label="Choose an option"
            name="my-radio-group"
            value={selectedValue}
            onChange={handleRadioChange}
            direction="row"
            options={[
              { label: 'Option 1', value: 'option1' },
              {
                label: 'Option 2',
                value: 'option2',
                disabled: true,
                checked: true,
              },
              { label: 'Option 3', value: 'option3' },
            ]}
          />

          <Divider sx={{ my: 4 }} />

          <CommonSegmentButtons
            value={selected}
            onChange={handleChange}
            options={[
              {
                label: 'Left',
                value: 'left',
                image: <CheckIcon fontSize="small" />,
                imagePosition: 'start',
              },
              {
                label: 'Center',
                value: 'center',
                image: <CheckIcon fontSize="small" />,
                imagePosition: 'end',
              },
              {
                label: 'Right',
                value: 'right',
                disabled: true,
              },
            ]}
          />

          <Divider sx={{ my: 4 }} />

          <CommonSnackbar
            open={open}
            direction={'column'}
            message="Two-line snackbar with longer action and close affordance"
            onClose={() => setOpen(false)}
            actionText="Longer Action"
            onActionClick={() => console.log('Action clicked')}
          />

          <Divider sx={{ my: 4 }} />

          <CommonListItem
            avatarText="A"
            label="List item"
            checked={true}
            onToggle={() => console.log('Toggled')}
          />

          <Divider sx={{ my: 4 }} />

          <CommonCard
            avatarLetter={'AS'}
            orientation={'horizontal'}
            subtitle={'Subhead'}
            actions={'Click'}
            header={'Title'}
            subheader={'Subtitle'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
            }
            title={'Header'}
            image={
              'https://images.unsplash.com/photo-1746121813274-50f7f8d4bad4?q=80&w=2103&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
          />

          <Divider sx={{ my: 4 }} />

          <CustomButton
            onClick={() => {
              console.log('Click');
            }}
            startIcon={<CheckIcon fontSize="small" />}
          />

          <Divider sx={{ my: 4 }} />

          <CustomButton
            customVariant="outlined"
            onClick={() => {
              console.log('Click');
            }}
            endIcon={<CheckIcon fontSize="small" />}
          />

          {/* <CommonDialog
            header={'Basic dialog title'}
            content={
              'A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.'
            }
            actions={'Click here'}
            isOpen={true}
            onClose={function (): void {
              throw new Error('Function not implemented.');
            }}
          /> */}

          <Divider sx={{ my: 4 }} />

          <CommonSearch
            leftIcon={<MenuIcon />}
            placeholder={'SearHinted search textch'}
            rightIcon={<CheckIcon fontSize="small" />}
          />

          <Divider sx={{ my: 4 }} />

          <CommonSelect
            label={'Common Select'}
            value={''}
            onChange={handlesetDropdown}
            options={[
              {
                label: 'Left',
                value: 'left',
              },
              {
                label: 'Center',
                value: 'center',
              },
              {
                label: 'Right',
                value: 'right',
              },
            ]}
          />

          <Divider sx={{ my: 4 }} />

          {/* <Circular /> */}

          <Divider sx={{ my: 4 }} />

          <CommonChip
            label="Label"
            backgroundColor={'info.50'}
            paddingX={1.5}
            paddingY={0.5}
            leftIcon={<DirectionsCarFilledIcon />}
            rightIcon={<CloseIcon />}
            onRightIconClick={() => console.log('Close clicked')}
            borderRadius={2}
          />

          <CommonChip
            backgroundColor={'info.50'}
            paddingX={1.5}
            paddingY={0.5}
            label="No Icons"
            borderRadius={6}
          />

          <Divider sx={{ my: 4 }} />

          <CommonTooltip
            title="Title"
            description="Supporting line text lorem ipsum dolor sit amet, consectetur"
            actions={[
              { label: 'Action', onClick: () => alert('Clicked Action 1') },
              { label: 'Action', onClick: () => alert('Clicked Action 2') },
            ]}
          >
            <InfoIcon style={{ cursor: 'pointer' }} />
          </CommonTooltip>

          <Divider sx={{ my: 4 }} />

          {/* <CommonTimePicker value={selectedTime} onChange={setSelectedTime} />

          <Divider sx={{ my: 4 }} /> */}

          <CommonDatePicker
            label="Select date"
            value={selectedDate}
            onChange={(newDate) => setSelectedDate(newDate)}
          />
        </div>
      </div>
    </div>
  );
}

export default componentsView;
