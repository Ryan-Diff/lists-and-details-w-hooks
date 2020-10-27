import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const Characters = ({ characters }) => {
    const characterElements = characters.map(character => (
    <li key={character.name}>
        <a key={character.name} href={`/${character.name}`}>
            <Character {...character} />
        </a>
    </li> 
    ));

    return (
        <ul data-testid='list'>
            {characterElements}
        </ul>
    );
};

Characters.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes,
        photoUrl: PropTypes.string,
        weapon: PropTypes.string,
        position: PropTypes.string,
        affiliation: PropTypes.string
    }))
};

export default Characters;