import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCouter } from "./ItemCouter";

describe('ItemCouter', () => {
    test('should render with default value', () => {
        const name = 'Test item';
        render(<ItemCouter name={name} quantity={1} />);
        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(name)).not.toBeNull();

    });
    test('should render with cudtom quantity', () => {
        const name = 'Test item';
        const quantity = 10;
        render(<ItemCouter name={name} quantity={quantity} />);
        expect(screen.getByText(quantity)).toBeDefined();

    });

    test('should increase count when +1 nutton is pressed', () => {
        render(<ItemCouter name={'Test item'} quantity={1} />);
        const [buttonAdd] = screen.getAllByRole('button');

        fireEvent.click(buttonAdd);

        expect(screen.getByText('2')).toBeDefined();
    })

    test('should decrease count when -1 button is pressed', () => {
        //quantity =5    
        render(<ItemCouter name={'Test item'} quantity={5} />);
        const [, buttonSubstract] = screen.getAllByRole('button');

        fireEvent.click(buttonSubstract);

        expect(screen.getByText('4')).toBeDefined();

    })
    test('should NOT decrease count when -1 button is pressed and quantity is 1', () => {
        //quantity =5    
         render(<ItemCouter name={'Test item'} quantity={1} />);
        const [, buttonSubstract] = screen.getAllByRole('button');

        fireEvent.click(buttonSubstract);

        expect(screen.getByText('1')).toBeDefined();
    })

    test('should change to red when count is 1', () => {
        const name = 'Text item';
        const quantity = 1;
         render(<ItemCouter name={name} quantity={quantity} />);
        const itemText = screen.getByText(name);
        console.log(itemText.style);

        expect(itemText.style.color).toBe('red');
    })
  test('should change to red when count is greater than 1', () => {
        const name = 'Text item';
        const quantity = 2;
         render(<ItemCouter name={name} quantity={quantity} />);
        const itemText = screen.getByText(name);
       

        expect(itemText.style.color).toBe('black');
    })


});