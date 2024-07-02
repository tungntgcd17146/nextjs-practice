import { memo } from 'react';

import Chip from '@/src/components/ui/Chip';
import IconButton from '@/src/components/ui/IconButton';

import useScreenWidth from '@/src/hooks/useScreenWidth';
import { themes } from '@/src/themes';

//mui
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useTheme, Theme } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface Props {
  onClickHeaderButton?: (e: React.MouseEvent<HTMLElement>) => void;
  showingProduct?: number;
  totalProduct?: number;
}

const closeIconButtonStyles = (theme: Theme) => ({
  borderRadius: '50%',
  backgroundColor: theme.palette.grey[100],
});

const chipStyle = {
  borderRadius: '4px',
  backgroundColor: themes.colors.red[500],
  height: '32px',
  width: '14px',
};

const FilterModalHeader = ({
  onClickHeaderButton,
  totalProduct = 0,
  showingProduct = 0,
}: Props) => {
  const theme = useTheme();
  const { isMobile } = useScreenWidth();

  return (
    <Grid
      item
      sx={{ marginBottom: '24px' }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid display="flex" flexDirection="row" alignItems="center">
        <Chip variant="filled" sx={chipStyle} />
        <Typography
          variant="h4"
          sx={{
            marginLeft: '16px',
            fontSize: '18px',
            color: theme.palette.text.secondary,
          }}
        >
          Showing {showingProduct} of {totalProduct} products
        </Typography>
      </Grid>

      <Grid>
        {isMobile && (
          <IconButton
            aria-label="close-drawer-mobile"
            children={<CloseOutlinedIcon />}
            onClick={onClickHeaderButton}
            data-testid="ProductFilter_CloseIconButton"
            sx={closeIconButtonStyles}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default memo(FilterModalHeader);
