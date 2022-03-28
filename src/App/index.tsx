import { useEffect, useState } from 'react';
import AutoComplete from '../AutoComplete';
import './styles.css';

export default function App () {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1126')
    .then((response) => response.json())
    .then(data => data.results.map((pokemon: { name: string; }) => pokemon.name))
    .then(pokemonList => setPokemon(pokemonList))
  }, []);

  return (<AutoComplete suggestions={pokemon} />);
}
