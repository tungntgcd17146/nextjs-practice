'use client';

import { memo, useCallback, useEffect, useState } from 'react';
import { themes } from '@/src/themes';

//mui
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';

//components
import User1 from '@/public/assets/User1.webp';
import Avatar from '@/src/components/ui/Avatar';
import Button from '@/src/components/ui/Button';

//utils
import { userImageData } from '@/src/mocks/commonData';
import useScreenWidth from '@/src/hooks/useScreenWidth';

//types
import { UserContact } from '@/src/types/contact';
import Image from 'next/image';

export interface Props {
  user: UserContact;
  onChangeFollowButtonStatus?: (e: React.MouseEvent<HTMLElement>) => void;
  onClickMessageButton?: (e: React.MouseEvent<HTMLElement>) => void;
}

const ContactItem = ({
  user,
  onChangeFollowButtonStatus,
  onClickMessageButton,
}: Props) => {
  const [followButtonStatus, setFollowButtonStatus] = useState<string>('');
  const theme = useTheme();

  useEffect(() => {
    if (user.contactStatus === 'following') {
      setFollowButtonStatus('Unfollow');
    } else {
      setFollowButtonStatus('Follow');
    }
  }, [user.contactStatus]);

  const { isMobile, matchedBreakpoint: isHideImageList } = useScreenWidth({
    down: 'lg',
  });

  const handleClickFollow = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      setFollowButtonStatus((prev) =>
        prev === 'Follow' ? 'Following' : prev === 'Unfollow' ? 'Follow' : prev,
      );
      onChangeFollowButtonStatus?.(e);
    },
    [onChangeFollowButtonStatus],
  );

  const handleClickMessageButton = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      onClickMessageButton?.(e);
    },
    [onClickMessageButton],
  );

  const { userName, productNumber, followerNumber } = user;

  return (
    <Grid container display="flex" flexDirection="column">
      <Grid display="flex" flexDirection="row" container>
        <Grid
          data-testid="ContactItem"
          item
          display="flex"
          flexDirection="row"
          lg={6}
        >
          {/* avatar */}
          <Avatar
            avtBackground={themes.colors.yellow[500]}
            imgNextSrc={User1}
            alt={'User1'}
            size="medium"
          />

          <Grid
            sx={{ marginLeft: '16px' }}
            display="flex"
            flexDirection="column"
          >
            <Typography
              variant="overline"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: isMobile ? '18px' : '20px',
              }}
            >
              {userName}
            </Typography>
            <Grid display="flex" flexDirection="row" alignItems="center">
              {/* info following */}
              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.primary, marginRight: '5px' }}
              >
                {productNumber}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: themes.colors.gray[600] }}
              >
                Products
              </Typography>

              <Divider
                orientation="vertical"
                sx={{
                  color: theme.palette.text.primary,
                  marginLeft: '16px',
                  marginRight: '16px',
                  height: '12px',
                  textAlign: 'center',
                }}
              />

              {/* info follower */}
              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.primary, marginRight: '5px' }}
              >
                {followerNumber}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: themes.colors.gray[600] }}
              >
                Followers
              </Typography>
            </Grid>

            {/* action button */}
            <Grid sx={{ marginTop: '16px' }}>
              <Button
                aria-label="follow-user"
                data-testid="ContactItem_FollowButton"
                sx={{ marginRight: '8px' }}
                children={followButtonStatus}
                size="small"
                color={
                  followButtonStatus === 'Following' ? 'success' : 'inherit'
                }
                onClick={handleClickFollow}
              />
              <Button
                aria-label="message-user"
                data-testid="ContactItem_MessageButton"
                children="Message"
                size="small"
                color="primary"
                onClick={handleClickMessageButton}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={6} display="flex" justifyContent="flex-end">
          {/* group img */}
          {!isHideImageList && (
            <ImageList
              sx={{
                width: '480px',
                height: '128px',
              }}
              cols={3}
            >
              {userImageData.map((item, index) => (
                <ImageListItem key={index}>
                  <Box
                    style={{
                      width: '100%',
                      height: '125px',
                      position: 'relative',
                    }}
                  >
                    <Image
                      fill
                      objectFit='cover'
                      src={item.img}
                      alt={item.imgTitle}
                      style={{ borderRadius: '12px' }}
                      loading="lazy"
                      sizes="100%"
                    />
                  </Box>
                </ImageListItem>
              ))}
            </ImageList>
          )}
        </Grid>
      </Grid>

      <Divider sx={{ margin: '24px 0', color: theme.palette.grey[100] }} />
    </Grid>
  );
};

export default memo(ContactItem);
