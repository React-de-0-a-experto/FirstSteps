import { describe, expect, test } from "vitest"
import { FirstStepApp } from "./FirstStepsApp copy"
import { render } from "@testing-library/react";

describe('FirstStepsApp', () => { 
    test('should match snapshot', () =>{
        const { container } = render(<FirstStepApp />);
        expect(container).toMatchSnapshot();
    })
 })