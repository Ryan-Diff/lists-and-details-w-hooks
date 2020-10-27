import React, { useState, useEffect } from 'react';
import Character from '../components/Characters/Character';
import { getCharacters, getCharacterName } from '../Services/fetch-characters';

const DetailPage = ({ match }) => {
    const [loading, setLoading] = useState(true);
    const [character, setCharacter] = useState('');

    const characterName = match.params.characterName;
    
    useEffect(() => {
        getCharacterName(characterName)
          .then(fetchedCharacter => setCharacter(fetchedCharacter[0]))
          .finally(() => setLoading(false));
    }, [characterName]);

    if(loading) return <h1>Loading</h1>;

    return (
        <Character {...character} />
    );
};

export default DetailPage;