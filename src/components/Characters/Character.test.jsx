import React from 'react';
import { render } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
    it('renders a character', () => {
        const { asFragment } = render(
            <Character
              name='Ryan'
              photoUrl='Test'
              weapon='Anxiety'
              position='Serf'
              affiliation='Alchemy'
            />);
            expect(asFragment()).toMatchSnapshot();
    });
});