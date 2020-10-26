import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, photoUrl, weapon, position, affiliation }) => (
    <figure>
        <h1>{name}</h1>
        <img src={photoUrl} />
        <h3>{weapon}</h3>
        <h3>{position}</h3>
        <h3>{affiliation}</h3>
    </figure>
)

Character.propTypes = {
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    weapon: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    affiliation: PropTypes.string.isRequired
}

export default Character;