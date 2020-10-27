import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, photoUrl, weapon, position, affiliation }) => (
    <figure data-testid='detail'>
        <h1>{name}</h1>
        <img src={photoUrl} />
        <h3>{weapon}</h3>
        <h3>{position}</h3>
        <h3>{affiliation}</h3>
    </figure>
)

Character.propTypes = {
    name: PropTypes.string,
    photoUrl: PropTypes.string,
    weapon: PropTypes.string,
    position: PropTypes.string,
    affiliation: PropTypes.string
}

export default Character;