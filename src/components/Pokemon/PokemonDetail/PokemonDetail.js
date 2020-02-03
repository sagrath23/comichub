import React, { useEffect } from 'react';
import ReactSVG from 'react-svg';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadPokemonAction } from '../../../actions';

const PokemonDetail = () => {
  const { pokemonName } = useParams();
  const dispatch = useDispatch();
  const detailedPokemon = useSelector((state) => (state.detailedPokemon));
  
  useEffect(() => {
    dispatch(loadPokemonAction(pokemonName));
  }, [dispatch, pokemonName]);

  return (
    <div display-if={detailedPokemon.name}>
      <h2 data-testid="pokemon-name">{detailedPokemon.name}</h2>
      <ReactSVG src={`../images/pokemons/${detailedPokemon.id}.svg`} />
    </div>
  );
};

export default PokemonDetail;
