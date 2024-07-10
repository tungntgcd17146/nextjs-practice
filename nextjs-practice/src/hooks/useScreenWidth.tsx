'use client';

import * as React from 'react';

import { useTheme, Theme } from '@mui/material/styles';
import { useMediaQuery, Breakpoint } from '@mui/material';

/**
 * useScreenWidth use case:
 * - Exactly 1 size: useScreenWidth({ only: 'md' }) -> return value: { matchedBreakpoint };
 * - Larger than: useScreenWidth({ up: 'md' }) -> return value: { matchedBreakpoint };
 * - Smaller than: useScreenWidth({ down: 'lg' }) -> return value: { matchedBreakpoint };
 * - In between values: useScreenWidth({ up: 'xs',  down: 'lg' }) -> return value: { matchedBreakpoint };
 * - the set definitions of isMobile, isTablet, isSmDesktop, isDesktop, isLgDesktop
 */
interface UseScreenWidth {
  matchedBreakpoint: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export type Options =
  | {
      only: Breakpoint;
      up?: undefined;
      down?: undefined;
    }
  | {
      only?: undefined;
      up: Breakpoint;
      down?: undefined;
    }
  | {
      only?: undefined;
      up?: undefined;
      down: Breakpoint;
    }
  | {
      only?: undefined;
      up: Breakpoint;
      down: Breakpoint;
    }
  | {
      only?: undefined;
      up?: undefined;
      down?: undefined;
    }
  | undefined;

const useScreenWidth = ({ only, up, down }: Options = {}): UseScreenWidth => {
  const theme = useTheme<Theme>();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'xl'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('xl'));

  const onlyBreakpoint = useMediaQuery(theme.breakpoints.only(only!));
  const upBreakpoint = useMediaQuery(theme.breakpoints.up(up!));
  const downBreakpoint = useMediaQuery(theme.breakpoints.down(down!));
  const betweenBreakpoints = useMediaQuery(
    theme.breakpoints.between(up!, down!),
  );

  // Set matching breakpoints from hook's arguments
  const [matchedBreakpoint, setMatchedBreakpoint] =
    React.useState<boolean>(false);

  const onlyBP = only ? onlyBreakpoint : false;

  const largerValue = up ? upBreakpoint : false;

  const smallerValue = down ? downBreakpoint : false;

  const betweenValue = up && down ? betweenBreakpoints : false;

  const exactBreakpoint: boolean = !!(only && onlyBP);
  const matchedLarger: boolean = !!(up && largerValue);
  const matchedSmaller: boolean = !!(down && smallerValue);

  // Set argument matchedBreakpoint
  React.useEffect(() => {
    const singleBreakpoint =
      exactBreakpoint && !matchedLarger && !matchedSmaller;
    const largerThan = matchedLarger && !matchedSmaller;
    const smallerThan = matchedSmaller && !matchedLarger;

    setMatchedBreakpoint(
      singleBreakpoint || betweenValue || largerThan || smallerThan,
    );
  }, [betweenValue, exactBreakpoint, matchedLarger, matchedSmaller]);

  return {
    matchedBreakpoint,
    isMobile,
    isTablet,
    isDesktop,
  };
};

export default useScreenWidth;
