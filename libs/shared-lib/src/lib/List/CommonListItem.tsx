import React from 'react';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Box,
  Typography,
  Checkbox,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

interface CommonListItemProps {
  label: string;
  avatarText: string;
  checked: boolean;
  onToggle: () => void;
}

const CommonListItem: React.FC<CommonListItemProps> = ({
  label,
  avatarText,
  checked,
  onToggle,
}) => {
  return (
    <ListItem
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 1,
        py: 0.5,
      }}
      disableGutters
      secondaryAction={
        <Checkbox
          checked={checked}
          onChange={onToggle}
          icon={<Box sx={{ width: 24, height: 24 }} />}
          checkedIcon={
            <Box
              sx={{
                width: 24,
                height: 24,
                backgroundColor: '#00695C',
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CheckIcon sx={{ color: '#fff', fontSize: 18 }} />
            </Box>
          }
        />
      }
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: '#E0F2F1', color: '#004D40', fontWeight: 600 }}>
          {avatarText}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography
            variant="body1"
            sx={{ color: '#212121', fontWeight: 500 }}
          >
            {label}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default CommonListItem;
