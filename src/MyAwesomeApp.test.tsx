import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { render, screen } from '@testing-library/react';

describe('MyAwesomeApp', () => {
    test('should render firtsName and lastName', () => {

        const { container } = render(<MyAwesomeApp />);
        /*         screen.debug();
         */        /*         console.log(container.innerHTML);
                */
        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');

        expect(h1?.innerHTML).toContain('Cristina');
        expect(h3?.innerHTML).toContain('Ruiz');
    });
    test('should render firtsName and lastName - screen', () => {

        render(<MyAwesomeApp />);
        screen.debug();
        /*         console.log(container.innerHTML);
         */
        /* const h1 = screen.getByRole('heading', {
            level:1
        }); */

        const h1 = screen.getByTestId('first-name-title');
        /*         const h3 = screen.querySelector('h3');
         */
        expect(h1?.innerHTML).toContain('Cristina');
/*         expect(h3?.innerHTML).toContain('Ruiz');
 */    });

    /* Toma una fotografia para que si se modifica alfo de myawesome de error */
    test('should match snapshot', () => {
        const { container } = render(<MyAwesomeApp />);
        expect(container).toMatchSnapshot();
    });
})