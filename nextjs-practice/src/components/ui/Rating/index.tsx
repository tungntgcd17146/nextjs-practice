import { memo } from 'react'
import { themes } from '@/src/themes'

//mui
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined'
import Box from '@mui/material/Box/Box'
import { Typography, useTheme } from '@mui/material'

export interface Props {
  ratingPoint?: number
  counter?: number
  sx?: React.CSSProperties
}

const Rating = ({ ratingPoint = 0, counter = 0, sx }: Props) => {
  const theme = useTheme()
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
      {counter > 0 ? (
        <StarOutlinedIcon data-testid='Rating_StarIcon' sx={{ color: themes.colors.yellow[700], marginRight: '8px' }} />
      ) : (
        <StarBorderPurple500OutlinedIcon data-testid='Rating_StarIcon_No_Rating' />
      )}
      {!!counter && (
        <Typography variant='body1' sx={{ color: theme.palette.text.secondary }}>
          {ratingPoint}
        </Typography>
      )}
      <Typography variant='body1' sx={{ marginLeft: '4px' }}>
        {counter > 0 ? `(${counter})` : 'No ratings'}
      </Typography>
    </Box>
  )
}

export default memo(Rating)
