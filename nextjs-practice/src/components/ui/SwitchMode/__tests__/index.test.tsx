/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@/src/utils/testUtils';
import { describe, expect, it, vi } from 'vitest';
import SwitchMode, { Props } from '..';

import * as useScreenWidth from '@/src/hooks/useScreenWidth';
import { ModeProvider } from '@/src/contexts/modeContext/ModeContext';

const defaultProp = {
  isLargerDrawerOnTablet: false,
  customWidth: '300px',
} as Props;

const setup = (overrideProps = {}) => {
  const props = {
    ...defaultProp,
    ...overrideProps,
  };

  return render(
    <ModeProvider>
      <SwitchMode {...props} />
    </ModeProvider>,
  );
};

describe('SwitchMode Test', () => {
  it('component mounting: selected light mode button correctly', () => {
    setup();

    const lightModeButton = screen.getByTestId(
      'SwitchMode_CustomToggleButton_lightMode',
    );

    expect(
      lightModeButton.getAttribute('class')?.includes('Mui-selected'),
    ).toBeTruthy();
  });

  it('render SwitchMode mini size on tablet correctly', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vi.spyOn(useScreenWidth, 'default').mockReturnValue({
      isTablet: true,
    } as any);
    setup();

    expect(screen.getByTestId('SwitchMode_IconButton')).toBeTruthy();
  });
});
