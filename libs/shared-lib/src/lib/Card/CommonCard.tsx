import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Box, Button } from '@mui/material';
import { Progress } from '../Progress/Progress';

interface CommonCardProps {
  title: string;
  avatarLetter?: string;
  avatarColor?: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  header?: React.ReactNode;
  subheader?: React.ReactNode;
  actions?: React.ReactNode;
  description?: React.ReactNode;
  orientation?: 'vertical' | 'horizontal';
  minheight?: string;
  status?: 'Not started' | 'Completed' | 'In progress' | string;
  progress?: number;
  onClick?: () => void;
}

export const CommonCard: React.FC<CommonCardProps> = ({
  avatarLetter,
  avatarColor = 'primary',
  title,
  subtitle,
  image,
  imageAlt,
  header,
  actions,
  description,
  orientation,
  minheight,
  status,
  subheader,
  progress,
  onClick,
}) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: orientation === 'horizontal' ? 'column' : 'row',
        height: minheight || 'auto',
        cursor: onClick ? 'pointer' : 'default',
        borderRadius: '12px',
        bgcolor: '#FEF7FF',
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        '&:hover': {
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
        },
        '@media (max-width: 600px)': {
          flexDirection: 'column',
        },
      }}
      onClick={onClick}
    >
      <CardHeader
        avatar={
          avatarLetter && (
            <Avatar sx={{ bgcolor: avatarColor }} aria-label="avatar">
              {avatarLetter}
            </Avatar>
          )
        }
        title={
          <Typography
            color={'grey.900'}
            fontSize={'16px'}
            whiteSpace={'wrap'}
            overflow={'hidden'}
            textOverflow={'ellipsis'}
            pl={'5px'}
            sx={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1,
            }}
          >
            {title}
          </Typography>
        }
        subtitle={
          <Typography variant="h6" sx={{ fontSize: '14px' }}>
            {subtitle}
          </Typography>
        }
      />
      {/* Image and Progress Overlay */}
      <Box sx={{ position: 'relative', width: '100%' }}>
        {image && (
          <CardMedia
            component="img"
            image={image || '/assets/images/default.png'}
            alt={imageAlt || 'Image'}
            sx={{
              width: '100%',
              height: orientation === 'horizontal' ? '297px' : 'auto',
              objectFit: 'cover', //set contain
              '@media (max-width: 600px)': {
                height: '200px',
              },
            }}
          />
        )}
      </Box>

      {header && (
        <CardContent
          sx={{
            display: 'flex',
            paddingBottom: 0,
            overflow: 'hidden',
            maxWidth: '100%',
            height: '50px',
          }}
        >
          <Typography
            fontSize={'16px'}
            fontWeight={'400'}
            lineHeight={'24px'}
            color={'grey.900'}
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {header}
          </Typography>
        </CardContent>
      )}

      {subheader && (
        <CardContent
          sx={{
            display: 'flex',
            paddingBottom: 0,
            overflow: 'hidden',
            maxWidth: '100%',
            paddingTop: '0',
          }}
        >
          <Typography
            fontSize={'14px'}
            fontWeight={'400'}
            lineHeight={'20px'}
            color={'grey.500'}
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {subheader}
          </Typography>
        </CardContent>
      )}

      {description && (
        <CardContent
          sx={{
            paddingTop: '32px',
          }}
        >
          {' '}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography
              fontSize={'14px'}
              fontWeight={'400'}
              lineHeight={'20px'}
              color={'grey.500'}
              sx={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {description}
            </Typography>
          </Box>
        </CardContent>
      )}

      {actions && (
        <CardActions
          disableSpacing
          sx={{
            display: 'flex',
            justifyContent: 'end',
            margin: '12px',
          }}
        >
          <Button variant="contained" color="primary">
            {actions}
          </Button>
        </CardActions>
      )}
    </Card>
  );
};
