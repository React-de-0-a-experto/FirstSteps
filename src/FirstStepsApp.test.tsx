import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { FirstStepApp } from './FirstStepsApp';

const mockItemCouter = vi.fn();

vi.mock('./shopping-card/ItemCouter', () => ({
  ItemCouter: (props: any) => {
    mockItemCouter(props);
    return <div data-testid="ItemCouter" />;
  },
}));

describe('FirstStepsApp', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('should match snapshot', () => {
    const { container } = render(<FirstStepApp />);
    expect(container).toMatchSnapshot();
  });

  test('should render the correct number of ItemCouter components', () => {
    render(<FirstStepApp />);

    const items = screen.getAllByTestId('ItemCouter');

    expect(items.length).toBe(3);
  });

  test('should render ItemCouter with correct props', () => {
    render(<FirstStepApp />);

    expect(mockItemCouter).toHaveBeenCalledTimes(3); // React puede re-renderizar

    expect(mockItemCouter).toHaveBeenCalledWith({
      name: 'Nintendo Switch 2',
      quantity: 5,
    });

    expect(mockItemCouter).toHaveBeenCalledWith({
      name: 'Pro controller',
      quantity: 1,
    });

    expect(mockItemCouter).toHaveBeenCalledWith({
      name: 'Super Mario',
      quantity: 3,
    });
  });
});