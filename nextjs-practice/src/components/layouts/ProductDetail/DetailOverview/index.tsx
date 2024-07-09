//component
import Chip from '@/src/components/ui/Chip';

//utils
import { themes } from '@/src/themes';
import { FeatureProduct } from '@/src/types/product';

//mui
import { useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export interface Props {
  productOverviews: FeatureProduct[];
}

const DetailOverview = ({ productOverviews }: Props) => {
  const theme = useTheme();

  return (
    <Box
      data-testid="Detail_Overview"
      sx={{
        width: {
          lg: '100%',
          xl: '485px',
        },
      }}
    >
      <Box display="flex" sx={{ marginTop: '32px', marginBottom: '12px' }}>
        <Chip
          sx={{
            borderRadius: '6px',
            backgroundColor: themes.colors.yellow[600],
            height: '32px',
            width: '16px',
          }}
          variant="filled"
        />
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.secondary,
            marginLeft: '12px',
          }}
        >
          Overview
        </Typography>
      </Box>
      {productOverviews.map((item, index) => (
        <Typography
          key={index}
          variant="body1"
          sx={{ color: theme.palette.text.secondary, marginBottom: '16px' }}
        >
          {item.text}
        </Typography>
      ))}
    </Box>
  );
};

export default DetailOverview;
