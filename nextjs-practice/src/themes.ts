export const themes = {
  screens: {
    // => @media (min-width: 640px) { ... }
    sm: '640px',

    // => @media (min-width: 768px) { ... }
    md: '768px',

    // => @media (min-width: 1024px) { ... }
    lg: '1024px',

    // => @media (min-width: 1260px) { ... }
    xl: '1260px'
  },
  extend: {},
  colors: {
    blue: { 500: '#B1E5FC', 600: '#2A85FF', 700: '#0069f6' },
    green: { 500: '#B5E4CA', 600: '#83BF6E' },
    violet: { 500: '#CABDFF', 600: '#8E59FF' },
    red: { 500: '#FF6A55' },
    yellow: { 500: '#FFD88D', 600: '#FFBC99', 700: '#FFC554' },
    white: { 500: '#FFFFFF', 600: '#FCFCFC', 700: '#F4F4F4' },
    gray: { 500: '#EFEFEF', 600: '#9A9FA5', 700: '#6F767E', 800: '#6F767E', 900: '#6F767E66' },
    black: { 400: '#000000', 500: '#33383F', 600: '#272B30', 700: '#1A1D1F', 800: '#111315', 900: '#33383F' }
  },
  fontSize: {
    xxs: '12px',
    xs: '13px',
    sm: '14px',
    lg: '15px',
    xl: '18px'
  },
  borderRadius: {
    none: '0',
    xs: '8px',
    sm: '12px'
  }
}
