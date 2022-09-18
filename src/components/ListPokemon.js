import React, {useState, useEffect} from 'react'

const ListPokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
    
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, []);

    const mapRows = (value, index) => {
        return <li key={index} > {value.name}</li>
    };

    return (
        <>
            <ul>
                {pokemon.map(mapRows)}
            </ul>
        </>
    );
};

export default ListPokemon;