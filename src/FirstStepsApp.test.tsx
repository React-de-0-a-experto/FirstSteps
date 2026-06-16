import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { FirstStepApp } from './FirstStepsApp';
import { ItemCouter } from './shopping-card/ItemCouter';

const mockItemCouter = vi.fn((_props:unknown)=>{
  return ( <div
      data-testid="ItemCouter"
      />)
});


vi.mock('./shopping-card/ItemCouter', () => ({
  ItemCouter: (props: unknown) => mockItemCouter(props),
}));
/* vi.mock('./shopping-card/ItemCouter', () => ({
  ItemCouter: (props: unknown) => {
    mockItemCouter(props);
     <div
      data-testid="ItemCouter"
      name={props.name}
       quantity={props.quantity} />; 
  },
})); 
 */
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

    expect(mockItemCouter).toHaveBeenCalledTimes(3); 

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