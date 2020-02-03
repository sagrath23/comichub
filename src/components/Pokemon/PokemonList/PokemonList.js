import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { loadListAction } from '../../../actions';

const limit = 20;
const extractPokemonIDFromURL = (url) => (url.split('/')[6]);

const PokemonList = () => {
  const { search } = useLocation();
  const history = useHistory();
  const { offset: startOffset = 0 } = queryString.parse(search);
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(startOffset);
  const { results: pokemonList } = useSelector((state) => (state.currentPokemonList));
  const handleClick = (direction) => {
    let newOffset;
    if (direction === 'next') {
      newOffset = +offset + limit;
    } else {
      newOffset = +offset - limit;
    }

    setOffset(newOffset);
    history.push(`/pokemons?offset=${newOffset}`);
  }
  useEffect(() => {
    setOffset(startOffset);
    dispatch(loadListAction(limit, offset));
  }, [dispatch, offset, startOffset]);

  return (
    <Col>
      <ListGroup data-testid="pokemon-list-list">
        {pokemonList.map((pokemon, index) => (
          <ListGroupItem data-testid={`pokemon-list-item-${index}`} key={index}>
            <Link to={`/pokemons/${pokemon.name}`}>
              <img alt="pokemon_sprite" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${extractPokemonIDFromURL(pokemon.url)}.png`} />
              {pokemon.name}
            </Link>
          </ListGroupItem>))}
      </ListGroup>
      <ButtonGroup>
        <Button data-testid="pokemon-list-prev-button" onClick={() => handleClick('prev')}>Prev</Button>
        <Button data-testid="pokemon-list-next-button" onClick={() => handleClick('next')}>Next</Button>
      </ButtonGroup>
    </Col>
    
  );
};

export default PokemonList;
