import { themes } from '@/src/themes'
import createTheme from '@mui/material/styles/createTheme'

export const defaultTheme = (isDarkMode: boolean) =>
  createTheme({
    /**
     * value         |0px     640px    768px   1024px   1260px
     * key           |xs      sm       md       lg       xl
     * screen width  |--------|--------|--------|--------|-------->
     */
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1260
      }
    },

    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      ...(isDarkMode
        ? {
            // palette values for dark Mode
            action: {},
            divider: '#1A1D1F',
            background: {
              default: '#111315',
              paper: '#1A1D1F'
            },
            text: {
              primary: '#ABABB5', //'#6F767E' by design
              secondary: '#FCFCFC'
            },
            grey: {
              100: '#272B30',
              200: '#111315',
              300: '#272B30'
            }
          }
        : {
            // palette values for light Mode
            action: {},
            divider: '#FCFCFC',
            background: {
              default: '#F4F4F4',
              paper: '#FCFCFC'
            },
            text: {
              primary: '#6F767E',
              secondary: '#1A1D1F'
            },
            grey: {
              100: '#EFEFEF',
              200: '#FFFFFF',
              300: '#FCFCFC'
            }
          }),

      //blue
      info: {
        light: themes.colors.blue[500],
        main: themes.colors.blue[600],
        dark: themes.colors.blue[700]
      },

      //white
      primary: {
        light: themes.colors.white[500],
        main: themes.colors.white[600],
        dark: themes.colors.white[700]
      },
      secondary: {
        light: themes.colors.black[600],
        main: themes.colors.black[700],
        dark: themes.colors.black[800]
      },

      //red
      error: {
        main: themes.colors.red[500]
      },

      //yellow
      warning: {
        light: themes.colors.yellow[500],
        main: themes.colors.yellow[600]
      }
    },
    typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      h1: {
        fontSize: '64px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '64px' /* 100% */,
        letterSpacing: '-1.92px'
      },
      h2: {
        fontSize: '48px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '48px' /* 100% */,
        letterSpacing: '1.44px'
      },
      h3: {
        fontSize: '40px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '48px' /* 100% */,
        letterSpacing: '-0.8px'
      },
      h4: {
        fontSize: '32px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '40px' /* 100% */,
        letterSpacing: '-0.92px'
      },
      h5: {
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '32px' /* 100% */,
        letterSpacing: '-0.4px'
      },
      h6: {
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '32px' /* 100% */,
        letterSpacing: '-0.4px'
      },
      subtitle1: {
        fontSize: '15px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '24px' /* 160% */,
        letterSpacing: '-0.15px'
      },
      subtitle2: {
        fontSize: '15px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '24px' /* 143% */,
        letterSpacing: '-0.15px'
      },
      body1: {
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '24px' /* 150% */,
        letterSpacing: '-0.14px'
      },
      body2: {
        fontSize: '15px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '24px' /* 143% */,
        letterSpacing: '-0.225px'
      },
      button: {
        fontSize: '15px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '24px' /* 143% */,
        letterSpacing: '-0.15px'
      },
      caption: {
        fontSize: '13px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '16px' /* 143% */,
        letterSpacing: '-0.13px'
      },
      overline: {
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '32px' /* 143% */,
        letterSpacing: '-0.36px'
      }
    },
    spacing: 8,
    components: {
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            minWidth: 'unset',
            color: 'unset'
          }
        }
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            'MuiButton-root:hover': {
              backgroundColor: 'unset'
            },
            ':hover': {
              borderColor: 'unset'
            }
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            ':hover': {
              borderColor: 'unset'
            },

            '.startIcon': {}
          }
        }
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            '.MuiButtonBase-root-MuiListItemButton-root.Mui-selected': {
              backgroundColor: 'black'
            }
          }
        }
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            '.MuiSwitch-input': {
              width: '200px'
            }
          }
        }
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: 'unset'
          }
        }
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: 'unset',
            ':hover': {
              backgroundColor: 'unset',
              borderColor: 'unset'
            },
            alignItems: 'unset'
          }
        }
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            textTransform: 'unset',
            color: 'unset'
          }
        }
      },
      MuiGrid: {
        styleOverrides: {
          root: {
            justifyContent: 'none'
          }
        }
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: 'none'
          }
        }
      },
      MuiFormControl: {
        styleOverrides: {
          root: {
            margin: '0px'
          }
        }
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            borderRadius: 'unset',
            '&.MuiSelect': {
              borderRadius: 'unset'
            },
            minHeight: '40px',
            color: 'currentColor'
          }
        }
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            textTransform: 'unset'
          }
        }
      },
      MuiPopover: {
        styleOverrides: {
          paper: {
            maxHeight: 'unset',
            maxWidth: 'unset',
            backgroundImage: 'unset'
          }
        }
      }
    }
  })
