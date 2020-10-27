import React from 'react';
import { getCharacterName, getCharacters } from '../Services/fetch-characters';
import { render, screen } from '@testing-library/react';
import DetailPage from './Detail-Page';

jest.mock('../Services/fetch-characters.js');

describe('DetailPage component', () => {
  it('renders DetailPage', async() => {
    getCharacterName.mockResolvedValue([
      {
        name: 'Ryan',
        photoUrl: '',
        weapon: 'Anxiety',
        position: 'Serf',
        affiliation: 'Alchemy'
      }
    ]);

    render(<DetailPage match={{params: 1}} />)

    const characterDetail = await screen.findByTestId('detail');

    expect(characterDetail).not.toBeEmptyDOMElement();
  });
});