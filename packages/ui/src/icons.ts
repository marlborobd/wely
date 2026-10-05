import './phosphor-svg';
/**
 * Central icon registry (Phosphor). The app imports icons from `@wely/ui`, never from
 * `phosphor-react-native` directly: this keeps the bundle small (per-icon imports, because
 * Metro does not tree-shake the package root) and lets us swap the icon set in one place.
 * Add an icon = add one line here.
 */
export { MagnifyingGlassIcon as MagnifyingGlass } from 'phosphor-react-native/src/icons/MagnifyingGlass';
export { XIcon as X } from 'phosphor-react-native/src/icons/X';
export { CaretRightIcon as CaretRight } from 'phosphor-react-native/src/icons/CaretRight';
export { MapPinIcon as MapPin } from 'phosphor-react-native/src/icons/MapPin';
export { HouseIcon as House } from 'phosphor-react-native/src/icons/House';
export { BriefcaseIcon as Briefcase } from 'phosphor-react-native/src/icons/Briefcase';
export { ClockCounterClockwiseIcon as ClockCounterClockwise } from 'phosphor-react-native/src/icons/ClockCounterClockwise';
export { TaxiIcon as Taxi } from 'phosphor-react-native/src/icons/Taxi';
export { CompassIcon as Compass } from 'phosphor-react-native/src/icons/Compass';
export { MegaphoneIcon as Megaphone } from 'phosphor-react-native/src/icons/Megaphone';
export { UserIcon as User } from 'phosphor-react-native/src/icons/User';
export { BusIcon as Bus } from 'phosphor-react-native/src/icons/Bus';
export { WarningIcon as Warning } from 'phosphor-react-native/src/icons/Warning';
export { PathIcon as Path } from 'phosphor-react-native/src/icons/Path';
export { TrayIcon as Tray } from 'phosphor-react-native/src/icons/Tray';
export type { Icon as PhosphorIcon, IconWeight } from 'phosphor-react-native';
