'use client';

//mui
import Grid from '@mui/material/Grid';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useTheme } from '@mui/material';

//components
import IconButton from '@/src/components/ui/IconButton';
import Button from '@/src/components/ui/Button';

import { BASE_REDIRECT_URL } from '@/src/constants/common';

import { useRouter } from 'next/navigation';

export interface Props {}

const SocialInfo = () => {
  const theme = useTheme();
  const router = useRouter();

  const handleClose = () => {
    router.push(BASE_REDIRECT_URL);
  };

  return (
    <Grid
      item
      sx={{ margin: '24px 42px' }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Button
        aria-label="edit-product"
        data-testid="ProductDetail_EditButton"
        children="Edit product"
        color="inherit"
      />

      <IconButton
        aria-label="detail-product-close"
        children={<CloseOutlinedIcon />}
        onClick={handleClose}
        data-testid="ProductDetail_CloseIconButton"
        sx={{
          borderRadius: '50%',
          backgroundColor: theme.palette.grey[100],
        }}
      />
    </Grid>
  );
};

export default SocialInfo;
