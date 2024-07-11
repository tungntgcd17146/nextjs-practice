import { memo } from 'react';

//mui
import { styled, useTheme } from '@mui/material';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import IconButton from '@/src/components/ui/IconButton';

//utils
import { useMode } from '@/src/contexts/modeContext/useModeContext';
import useScreenWidth from '@/src/hooks/useScreenWidth';

export interface Props {
  shouldIconButton: boolean;
  customWidth?: string;
}

const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
  '&:hover': {
    backgroundColor: 'unset',
    color: theme.palette.text.secondary,
  },
  '&.Mui-selected': {
    backgroundColor: theme.palette.grey[300],
    color: theme.palette.text.secondary,
    boxShadow:
      '0px 4px 8px -4px rgba(0, 0, 0, 0.25), inset 0px -1px 1px rgba(0, 0, 0, 0.04), inset 0px 2px 0px rgba(255, 255, 255, 0.25)',
  },
}));

const commonToggleButtonStyle = {
  width: '100%',
  borderRadius: '16px',
  padding: '4px 2px',
  border: 'unset',
};

const commonButtonIconStyle = {
  marginRight: '8px',
};

const SwitchMode = ({ shouldIconButton, customWidth = '100%' }: Props) => {
  const { toggleMode, isDarkMode } = useMode();
  const { isTablet } = useScreenWidth();
  const theme = useTheme();

  const handleToggleMode = () => {
    if (!isDarkMode) {
      toggleMode(true);
    } else {
      toggleMode(false);
    }
  };

  if (isTablet && shouldIconButton) {
    return (
      <IconButton
        aria-label="dark-mode-icon"
        data-testid="SwitchMode_IconButton"
        size="medium"
        children={!isDarkMode ? <LightModeIcon /> : <DarkModeOutlinedIcon />}
        onClick={handleToggleMode}
        sx={{
          boxShadow:
            '0px 4px 8px -4px rgba(0, 0, 0, 0.25), inset 0px -1px 1px rgba(0, 0, 0, 0.49), inset 0px 2px 1px rgba(255, 255, 255, 0.06);',
          borderRadius: '50%',
          border: `5px solid ${theme.palette.background.default}`,
          ':hover': {
            borderColor: 'unset',
          },
        }}
      />
    );
  }

  return (
    <ToggleButtonGroup
      value={isDarkMode ? 'dark' : 'light'}
      exclusive
      aria-label="text alignment"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: customWidth,
        height: '36px',
        borderRadius: '16px',
        padding: '4px 2px',
        backgroundColor: theme.palette.background.default,
        '& .MuiToggleButtonGroup-lastButton': {
          marginLeft: 'unset',
          borderLeft: 'unset',
          borderTopLeftRadius: '16px',
          borderBottomLeftRadius: '16px',
        },
        '& .MuiToggleButtonGroup-firstButton': {
          borderTopRightRadius: '16px',
          borderBottomRightRadius: '16px',
        },
      }}
    >
      <CustomToggleButton
        data-testid="SwitchMode_CustomToggleButton_lightMode"
        selected={!isDarkMode}
        onClick={handleToggleMode}
        sx={commonToggleButtonStyle}
        value="light"
        aria-label="light mode"
      >
        <LightModeIcon sx={commonButtonIconStyle} />
        Light
      </CustomToggleButton>
      <CustomToggleButton
        data-testid="SwitchMode_CustomToggleButton_darkMode"
        selected={isDarkMode}
        onClick={handleToggleMode}
        sx={{
          ...commonToggleButtonStyle,
        }}
        value="dark"
        aria-label="dark mode"
      >
        <DarkModeOutlinedIcon sx={commonButtonIconStyle} />
        Dark
      </CustomToggleButton>
    </ToggleButtonGroup>
  );
};

export default memo(SwitchMode);
