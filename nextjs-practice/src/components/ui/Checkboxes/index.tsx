import * as React from 'react'
import { memo } from 'react'

import { Checkbox } from '@/src/types'

//mui
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'
import { Checkbox as MuiCheckbox, Theme } from '@mui/material'
import Box from '@mui/material/Box'

export interface Props {
  checkboxOptions: Checkbox[]
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  wrapperStyles?: React.CSSProperties
}

const formControlLabelStyles =
  (theme: Theme) => ({ display: 'flex', justifyContent: 'space-between', color: theme.palette.text.secondary })

const muiCheckboxStyles =
  (theme: Theme) => ({ color: theme.palette.text.primary, '&.Mui-checked': { color: theme.palette.info.main } })

const Checkboxes = ({ checkboxOptions, onChange, label, wrapperStyles }: Props) => {

  return (
    <Box sx={wrapperStyles}>
      {label && (
        <Typography variant='body1' sx={{ marginBottom: '8px' }}>
          {label}
        </Typography>
      )}
      <FormGroup>
        {checkboxOptions.map((item) => {
          const { id, label, labelPlacement, isChecked } = item
          return (
            <FormControlLabel
              key={id}
              sx={formControlLabelStyles}
              control={
                <MuiCheckbox checked={isChecked} id={id} value={label} sx={muiCheckboxStyles} onChange={onChange} />
              }
              label={label}
              labelPlacement={labelPlacement}
            />
          )
        })}
      </FormGroup>
    </Box>
  )
}

export default memo(Checkboxes)
