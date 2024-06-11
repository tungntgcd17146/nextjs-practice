import { memo } from 'react'

//mui
import Box from '@mui/material/Box'
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress/CircularProgress'
import Typography from '@mui/material/Typography/Typography'
import { useTheme } from '@mui/material'

export interface Props extends CircularProgressProps {
  helperText?: string
  dataTestId?: string
  wrapperStyle?: React.CSSProperties
}

const Loading = ({ helperText = 'Loading...', dataTestId, wrapperStyle, sx, ...rest }: Props) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
        width: '100%',
        ...wrapperStyle
      }}
    >
      <CircularProgress sx={{ color: theme.palette.text.secondary, ...sx }} data-testid={dataTestId} {...rest} />
      {helperText && (
        <Typography variant='body1' sx={{ marginTop: '16px' }}>
          {helperText}
        </Typography>
      )}
    </Box>
  )
}

export default memo(Loading)
