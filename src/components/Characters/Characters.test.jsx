import React from 'react';
import { render } from '@testing-library/react';
import Characters from './Characters';

describe('ListPage', () => {
  it('renders ListPage', () => {
    const { asFragment } = render(<Characters
      characters={[
        { 
            name: 'Ryan',
            photoUrl: 'Test',
            weapon: 'Anxiety',
            position: 'Serf',
            affiliation: 'Alchemy'
        }
      ]}  
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});