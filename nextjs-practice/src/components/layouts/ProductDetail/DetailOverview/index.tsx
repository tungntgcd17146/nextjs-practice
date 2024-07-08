//component
import Chip from '@/src/components/ui/Chip';

//utils
import { themes } from '@/src/themes';
import { FeatureProduct } from '@/src/types/product';

//mui
import { useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


export interface Props {
  productOverviews: FeatureProduct[];
}

const DetailOverview = ({ productOverviews }: Props) => {
  const theme = useTheme();

  return (
    <Grid data-testid="Detail_Overview" item xs={12} lg={6}>
      <Grid
        display="flex"
        flexDirection="row"
        sx={{ marginTop: '32px', marginBottom: '12px' }}
      >
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
      </Grid>
      {productOverviews.map((item, index) => (
        <Typography
          key={index}
          variant="body1"
          sx={{ color: theme.palette.text.secondary, marginBottom: '16px' }}
        >
          {item.text}
        </Typography>
      ))}
    </Grid>
  );
};

export default DetailOverview;
