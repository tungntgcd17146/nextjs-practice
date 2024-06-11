import { memo } from 'react'

//mui
import Badge, { BadgeProps } from '@mui/material/Badge'
import { IconButtonProps } from '@mui/material/IconButton'
import { IconButton as MuiIconButton } from '@mui/material'

export interface Props extends IconButtonProps {
  badgeProps?: BadgeProps
  badgeContent?: number | string
  children: React.ReactNode
  badgeColor?: BadgeProps['color']
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

const IconButton = ({ children, onClick, badgeColor = 'error', badgeContent, badgeProps, ...rest }: Props) => {
  return (
    <MuiIconButton data-testid='IconButton' onClick={onClick} {...rest}>
      <Badge data-testid='IconButton_Badge' showZero badgeContent={badgeContent} color={badgeColor} {...badgeProps}>
        {children}
      </Badge>
    </MuiIconButton>
  )
}

export default memo(IconButton)
