// Phosphor's per-icon sources pass `className` to <Svg>; react-native-svg's types do not declare
// it (Phosphor expects NativeWind's augmentation). Declaring it here lets those sources
// type-check in every project that imports `@wely/ui`.
import 'react-native-svg';

declare module 'react-native-svg' {
  interface SvgProps {
    className?: string;
  }
}
