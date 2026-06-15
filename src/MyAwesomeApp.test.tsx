import { describe, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { render,screen } from '@testing-library/react';

describe('MyAwesomeApp', () => {
    test('should render firtsName and lastName', () => {

        const {container} = render(<MyAwesomeApp />);
        screen.debug();
/*         console.log(container.innerHTML);
 */
    })
})