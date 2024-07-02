import { memo, useMemo } from 'react';

import { themes } from '@/src/themes';

//mui
import { ChipProps, Chip as MuiChip, useTheme } from '@mui/material';

export interface Props extends ChipProps {
  price?: number;
  sx?: React.CSSProperties;
}

const Chip = ({ price, sx, ...rest }: Props) => {
  const theme = useTheme();

  const generateLabel = useMemo(() => {
    if (price === 0) {
      return '$0';
    } else if (price! > 0) {
      return `${price}$`;
    } else {
      return '';
    }
  }, [price]);

  return (
    <MuiChip
      data-testid="Chip"
      label={generateLabel}
      variant="filled"
      sx={
        price != undefined
          ? {
              backgroundColor:
                price === 0
                  ? theme.palette.grey[100]
                  : themes.colors.green[500],
              color:
                price === 0
                  ? theme.palette.text.secondary
                  : themes.colors.black[700],
              borderRadius: '6px',
              fontWeight: '700',
              lineHeight: '32px',
              fontSize: '15px',
            }
          : sx
      }
      {...rest}
    />
  );
};

export default memo(Chip);
