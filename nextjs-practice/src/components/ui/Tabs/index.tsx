import { memo, useEffect, useState } from 'react'

//mui
import { Tabs as MuiTabs, styled } from '@mui/material'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

import useScreenWidth from '@/src/hooks/useScreenWidth'

// type
import { NavigateItem } from '@/src/types'

export interface Props {
  onTabClick?: (event: React.MouseEvent<HTMLElement>) => void
  onTabsChange?: (event: React.SyntheticEvent, newValue: number) => void
  tabItems: NavigateItem[]
  sx?: React.CSSProperties
}

const StyledTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&.Mui-selected': {
    borderRadius: '8px',
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.text.secondary
  },
  '&.Mui-disabled': {
    color: theme.palette.text.disabled,
    opacity: 0.5
  }
}))

const Tabs = ({ onTabClick, onTabsChange, tabItems, sx }: Props) => {
  const [value, setValue] = useState<number | boolean>(false)
  const { isMobile } = useScreenWidth()

  //first item selected when component mounting
  useEffect(() => {
    const idexSelected = tabItems.findIndex((item) => item.isSelected)
    if (idexSelected !== -1) setValue(tabItems.findIndex((item) => item.isSelected))
  }, [tabItems])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    onTabsChange?.(event, newValue)
  }

  const handleClickTabItem = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onTabClick?.(e)
  }

  return (
    <Box sx={{ width: '100%', ...sx }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
        <MuiTabs
          TabIndicatorProps={{ sx: { height: '0px' } }}
          variant={isMobile ? 'fullWidth' : 'standard'}
          value={value}
          onChange={handleChange}
          aria-label='tabs'
        >
          {tabItems.map((item, index) => {
            const { text, isDisabled } = item

            return (
              <StyledTab
                data-testid='Tabs_StyledTab'
                onClick={handleClickTabItem}
                label={text}
                disabled={isDisabled}
                key={index}
              />
            )
          })}
        </MuiTabs>
      </Box>
    </Box>
  )
}

export default memo(Tabs)
