//component
import Chip from '@/src/components/ui/Chip';

//utils
import { themes } from '@/src/themes';
import { FeatureProduct } from '@/src/types/product';

//mui
import { useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import CheckIcon from '@mui/icons-material/Check';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export interface Props {
  productFeatures: FeatureProduct[];
}

const DetailFeature = ({ productFeatures }: Props) => {
  const theme = useTheme();

  return (
    <Grid item xs={12} lg={5}>
      <Grid
        display="flex"
        flexDirection="row"
        sx={{ marginTop: '32px', marginBottom: '12px' }}
      >
        <Chip
          sx={{
            borderRadius: '6px',
            backgroundColor: themes.colors.violet[500],
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
          Features
        </Typography>
      </Grid>

      {productFeatures.map((item, index) => (
        <Box key={index}>
          <Grid display="flex" flexDirection="row">
            <CheckIcon
              sx={{
                color: themes.colors.green[500],
                marginRight: '12px',
              }}
            />
            <Typography
              variant="body1"
              sx={{ color: theme.palette.text.secondary }}
            >
              {item.text}
            </Typography>
          </Grid>
          <Divider
            sx={{
              marginTop: '12px',
              marginBottom: '12px',
              color: theme.palette.grey[100],
            }}
          />
        </Box>
      ))}
    </Grid>
  );
};

export default DetailFeature;
