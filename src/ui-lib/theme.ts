const breakpoints = ['40em', '52em', '64em', '80em'];

const colors = {
  primary: '#000000',
};

// aliases
const breakpointAliases = {
  sm: breakpoints[0],
  md: breakpoints[1],
  lg: breakpoints[2],
  xl: breakpoints[3],
};

export const theme = {
  breakpoints: {
    ...breakpoints,
    ...breakpointAliases,
  },
  colors,
};

export type ThemeT = typeof theme;
