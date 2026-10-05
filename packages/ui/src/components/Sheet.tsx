import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import type { ReactNode } from 'react';
import { useTheme } from '../theme/ThemeProvider';

export interface SheetProps {
  /** Snap points, e.g. ['25%', '60%']. Chosen by the screen, not by the design system. */
  snapPoints: (string | number)[];
  children: ReactNode;
}

/**
 * Bottom sheet with Wely styling. Needs `GestureHandlerRootView` above it
 * (added in the app root when the first sheet is used).
 */
export function Sheet({ snapPoints, children }: SheetProps) {
  const theme = useTheme();
  return (
    <BottomSheet
      snapPoints={snapPoints}
      backgroundStyle={{
        backgroundColor: theme.colors.surface,
        borderTopLeftRadius: theme.radius.lg,
        borderTopRightRadius: theme.radius.lg,
        ...theme.elevation.sheet,
      }}
      handleIndicatorStyle={{ backgroundColor: theme.colors.borderInput }}
    >
      <BottomSheetView style={{ padding: theme.space[4] }}>{children}</BottomSheetView>
    </BottomSheet>
  );
}
