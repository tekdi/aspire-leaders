import React, { useState } from 'react';
import { Menu, MenuItem, Box, Typography } from '@mui/material';

interface MenuOption {
  label: string;
  onClick: () => void;
}

interface CommonMenuProps {
  trigger: React.ReactNode;
  options: MenuOption[];
}

const CommonMenu: React.FC<CommonMenuProps> = ({ trigger, options }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Box
        onClick={handleOpen}
        sx={{ display: 'inline-flex', cursor: 'pointer' }}
      >
        {trigger}
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: '12px',
            boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
            py: '8px',
            mt: 1,
            minWidth: '212px',
          },
        }}
        MenuListProps={{
          disablePadding: true,
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              option.onClick();
              handleClose();
            }}
            sx={{
              m: '0 !important',
              minHeight: '40px',
              p: '16px 12px',
              typography: 'body2',
              '&:hover': {
                backgroundColor: '#007f7f', // Teal shade similar to screenshot
                color: 'white !important',
              },
            }}
          >
            <Typography
              fontSize={'16px'}
              sx={{
                color:'unset !important'
              }}
              lineHeight={'24px'}
              variant="body2"
              m={0}
            >
              {option.label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default CommonMenu;
