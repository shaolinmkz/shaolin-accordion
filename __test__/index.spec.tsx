import React from 'react';
import {
    render,
    screen,
} from '@testing-library/react';
import Accordion from '../src';

test('its should render the accordion', () => {
    const { rerender } = render(
        <Accordion accordionName="Testing Accordion">
            <p data-testid="paragraph">Testing Accordion Text</p>
        </Accordion>
    );
    expect(screen.getByTestId('paragraph').textContent).toBe('Testing Accordion Text');
});
