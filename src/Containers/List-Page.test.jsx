import React from 'react';
import { render, screen } from '@testing-library/react';
import { getCharacters } from '../Services/fetch-characters';
import ListPage from './List-Page';

jest.mock('../Services/fetch-characters.js');

describe('ListPage component', () => {
  it('renders ListPage', async() => {
    getCharacters.mockResolvedValue([
      {
        name: 'Ryan',
        photoUrl: '',
        weapon: 'Anxiety',
        position: 'Serf',
        affiliation: 'Alchemy'
      }
    ]);

    render(<ListPage />);

    const characterList = await screen.findByTestId('list');

    expect(characterList).not.toBeEmptyDOMElement();
  })
})