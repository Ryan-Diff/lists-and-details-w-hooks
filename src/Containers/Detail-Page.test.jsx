  
import React from 'react';
import { getCharacters } from '../services/fetch-characters';
import { render, screen } from '@testing-library/react';
import DetailPage from './Detail-Page';

jest.mock('../services/fetch-characters.js');

describe('DetailPage component', () => {
  it('renders DetailPage', async() => {
    getCharacters.mockResolvedValue([
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