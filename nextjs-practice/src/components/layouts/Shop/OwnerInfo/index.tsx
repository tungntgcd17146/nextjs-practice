'use client';

import { memo, useMemo } from 'react';

import Avatar from '@/src/components/ui/Avatar';
import IconButton from '@/src/components/ui/IconButton';
import Button from '@/src/components/ui/Button';

//img
import Customer1 from '@/public/assets/customer1.webp';

//mui
import { useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TwitterIcon from '@mui/icons-material/Twitter';
import AddIcon from '@mui/icons-material/Add';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

import { themes } from '@/src/themes';
import useScreenWidth from '@/src/hooks/useScreenWidth';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface Props {
  name?: string;
  description?: string;
  avatar?: string | StaticImport;
  onClickFollow?: () => void;
}

const OwnerInfo = ({
  name,
  description,
  avatar = Customer1,
  onClickFollow,
}: Props) => {
  const theme = useTheme();
  const { isMobile, matchedBreakpoint } = useScreenWidth({
    down: 'lg',
  });

  const BadgeAddIcon = useMemo(() => <AddIcon />, []);

  return (
    <>
      {/* information */}
      <Grid
        item
        xs={12}
        sm={12}
        lg={7}
        display="flex"
        flexDirection="row"
        sx={{ marginBottom: '12px' }}
      >
        <Avatar
          avtBackground={themes.colors.yellow[600]}
          size="large"
          imgNextSrc={avatar}
          alt="Customer1"
          BadgeIcon={BadgeAddIcon}
          badgeSx={{ marginRight: '16px' }}
        />
        <Grid item display="flex" flexDirection="column">
          <Typography
            sx={{
              color: theme.palette.text.secondary,
              fontSize: isMobile ? '20px' : '32px',
            }}
            variant="h4"
          >
            {name}
          </Typography>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              ...(!isMobile ? { fontSize: '20px', marginTop: '8px' } : {}),
            }}
            variant="body2"
          >
            {description}
          </Typography>
        </Grid>
      </Grid>

      {/* social contact */}
      <Grid
        item
        xs={12}
        sm={12}
        lg={5}
        display="flex"
        flexDirection="row"
        justifyContent={matchedBreakpoint ? 'space-between' : 'flex-end'}
      >
        <Box>
          <IconButton
            disabled
            aria-label="personal-twitter"
            sx={
              matchedBreakpoint
                ? { marginRight: '20px' }
                : { marginLeft: '20px' }
            }
            children={<TwitterIcon />}
          />
          <IconButton
            disabled
            aria-label="personal-facebook"
            sx={
              matchedBreakpoint
                ? { marginRight: '20px' }
                : { marginLeft: '20px' }
            }
            children={<FacebookIcon />}
          />
          <IconButton
            disabled
            aria-label="personal-instagram"
            sx={
              matchedBreakpoint
                ? { marginRight: '20px' }
                : { marginLeft: '20px' }
            }
            children={<InstagramIcon />}
          />
        </Box>

        <Button
          disabled
          aria-label="follow-button"
          data-testid="OwnerInfo_Follow_Button"
          onClick={onClickFollow}
          children="Follow"
          color="primary"
          sx={{ width: '120px', marginLeft: '20px' }}
        />
      </Grid>

      <Grid item xs={12}>
        <Divider sx={{ margin: '20px 0px', color: theme.palette.grey[100] }} />
      </Grid>
    </>
  );
};

export default memo(OwnerInfo);
