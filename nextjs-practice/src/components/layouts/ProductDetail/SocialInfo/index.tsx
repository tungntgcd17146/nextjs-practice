'use client';

import { themes } from '@/src/themes';

//mui
import Grid from '@mui/material/Grid';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useTheme } from '@mui/material';

//components
import IconButton from '@/src/components/ui/IconButton';
import Avatar from '@/src/components/ui/Avatar';
import User1 from '@/public/assets/User1.webp';
import Figma from '@/public/assets/figma.webp';

export interface Props {}

const SocialInfo = () => {
  const theme = useTheme();

  return (
    <Grid
      sx={{ marginLeft: '24px' }}
      display="flex"
      flexDirection="column"
      item
    >
      <Avatar
        sx={{ marginBottom: '24px', pointerEvents: 'none' }}
        avtBackground={themes.colors.yellow[500]}
        imgNextSrc={User1}
        alt={'User1'}
        size="medium"
      />
      <Avatar
        sx={{
          marginBottom: '24px',
          backgroundColor: theme.palette.grey[300],
          '& .MuiAvatar-img': {
            width: '20px',
            height: '32px',
          },
          pointerEvents: 'none',
        }}
        badgeSx={
          {
            '& .MuiBadge-badge': {
              backgroundColor: theme.palette.text.secondary,
              color: theme.palette.background.paper,
              border: 'unset',
            },
          } as React.CSSProperties
        }
        imgWidth={20}
        imgHeight={32}
        badgeAnchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        BadgeIcon="3"
        avtBackground={theme.palette.grey[200]}
        imgNextSrc={Figma}
        alt="Figma"
        size="medium"
      />
      <IconButton
        aria-label="like-product"
        sx={{
          backgroundColor: theme.palette.grey[300],
          borderRadius: '50%',
          width: '64px',
          height: '64px',
          alignItems: 'center',
          ':hover': {
            backgroundColor: 'none',
          },
          pointerEvents: 'none',
        }}
        children={<FavoriteOutlinedIcon />}
      />
    </Grid>
  );
};

export default SocialInfo;
