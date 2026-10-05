import { MapPin } from '../../icons';
import { fireEvent, screen } from '@testing-library/react-native';
import { renderWithTheme } from '../../test-utils';
import { lightColors } from '../../tokens';
import { ActionCard } from '../ActionCard';
import { Button } from '../Button';
import { ListRow } from '../ListRow';
import { SearchBar } from '../SearchBar';
import { StateMessage } from '../StateMessage';
import { Text } from '../Text';

describe('Text', () => {
  it('uses the primary text color from the theme', async () => {
    await renderWithTheme(<Text>Salut</Text>);
    expect(screen.getByText('Salut')).toHaveStyle({ color: lightColors.textPrimary });
  });

  it('uses the dark theme colors in dark mode', async () => {
    await renderWithTheme(<Text>Salut</Text>, 'dark');
    expect(screen.getByText('Salut')).not.toHaveStyle({ color: lightColors.textPrimary });
  });
});

describe('Button', () => {
  it('calls onPress when pressed', async () => {
    const onPress = jest.fn();
    await renderWithTheme(<Button label="Pornește" onPress={onPress} />);
    await fireEvent.press(screen.getByRole('button', { name: 'Pornește' }));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('ignores presses when disabled', async () => {
    const onPress = jest.fn();
    await renderWithTheme(<Button label="Pornește" onPress={onPress} disabled />);
    await fireEvent.press(screen.getByRole('button', { name: 'Pornește' }));
    expect(onPress).not.toHaveBeenCalled();
  });

  it('ignores presses while loading and reports busy', async () => {
    const onPress = jest.fn();
    await renderWithTheme(<Button label="Pornește" onPress={onPress} loading />);
    const button = screen.getByRole('button', { name: 'Pornește' });
    await fireEvent.press(button);
    expect(onPress).not.toHaveBeenCalled();
    expect(button).toBeBusy();
  });

  it('renders with an icon and in every variant', async () => {
    await renderWithTheme(
      <>
        <Button label="Unu" onPress={jest.fn()} icon={MapPin} />
        <Button label="Doi" onPress={jest.fn()} variant="secondary" />
        <Button label="Trei" onPress={jest.fn()} variant="danger" />
      </>,
    );
    expect(screen.getAllByRole('button')).toHaveLength(3);
  });
});

describe('ActionCard', () => {
  it('announces title and subtitle and handles press', async () => {
    const onPress = jest.fn();
    await renderWithTheme(
      <ActionCard title="Taxi" subtitle="Comandă rapid" icon={MapPin} onPress={onPress} />,
    );
    await fireEvent.press(screen.getByRole('button', { name: 'Taxi, Comandă rapid' }));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('does not respond when disabled or loading', async () => {
    const onPress = jest.fn();
    await renderWithTheme(
      <>
        <ActionCard title="A" icon={MapPin} onPress={onPress} disabled />
        <ActionCard title="B" icon={MapPin} onPress={onPress} loading />
      </>,
    );
    await fireEvent.press(screen.getByRole('button', { name: 'A' }));
    await fireEvent.press(screen.getByRole('button', { name: 'B' }));
    expect(onPress).not.toHaveBeenCalled();
  });
});

describe('SearchBar', () => {
  it('in tap-to-open mode acts as a button', async () => {
    const onPress = jest.fn();
    await renderWithTheme(<SearchBar placeholder="Încotro?" onPress={onPress} />);
    await fireEvent.press(screen.getByRole('search'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('reports typed text and can clear it', async () => {
    const onChangeText = jest.fn();
    await renderWithTheme(
      <SearchBar
        placeholder="Încotro?"
        value="Arad"
        onChangeText={onChangeText}
        clearLabel="Șterge"
      />,
    );
    await fireEvent.changeText(screen.getByPlaceholderText('Încotro?'), 'Timișoara');
    expect(onChangeText).toHaveBeenCalledWith('Timișoara');
    await fireEvent.press(screen.getByRole('button', { name: 'Șterge' }));
    expect(onChangeText).toHaveBeenLastCalledWith('');
  });

  it('hides the clear button when empty', async () => {
    await renderWithTheme(<SearchBar placeholder="Încotro?" clearLabel="Șterge" />);
    expect(screen.queryByRole('button', { name: 'Șterge' })).toBeNull();
  });
});

describe('ListRow', () => {
  it('handles press and shows title and subtitle', async () => {
    const onPress = jest.fn();
    await renderWithTheme(<ListRow title="Acasă" subtitle="Strada Exemplu" onPress={onPress} />);
    await fireEvent.press(screen.getByRole('button', { name: 'Acasă, Strada Exemplu' }));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('is not interactive without onPress', async () => {
    await renderWithTheme(<ListRow title="Informație" />);
    expect(screen.queryByRole('button')).toBeNull();
  });
});

describe('StateMessage', () => {
  it('shows an empty state', async () => {
    await renderWithTheme(<StateMessage kind="empty" icon={MapPin} title="Nimic aici încă" />);
    expect(screen.getByText('Nimic aici încă')).toBeOnTheScreen();
  });

  it('shows an error as an alert with a retry action', async () => {
    const onAction = jest.fn();
    await renderWithTheme(
      <StateMessage
        kind="error"
        icon={MapPin}
        title="Ceva nu a mers"
        actionLabel="Încearcă din nou"
        onAction={onAction}
      />,
    );
    expect(screen.getByRole('alert')).toBeOnTheScreen();
    await fireEvent.press(screen.getByRole('button', { name: 'Încearcă din nou' }));
    expect(onAction).toHaveBeenCalledTimes(1);
  });
});
