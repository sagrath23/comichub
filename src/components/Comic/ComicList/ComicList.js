import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { comicListRequest } from '../../../store/domains/comicList';

const limit = 20;

const ComicList = () => {
  const { search } = useLocation();
  const history = useHistory();
  const { offset: startOffset = 0 } = queryString.parse(search);
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(startOffset);
  const list = useSelector((state) => (state.comicList.list));
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
    dispatch(comicListRequest(limit, offset));
  }, [dispatch, offset, startOffset]);

  return (
    <Col>
      <ListGroup data-testid="pokemon-list-list">
        {list.map((pokemon, index) => (
          <ListGroupItem data-testid={`pokemon-list-item-${index}`} key={index}>
            <Link to={`/issue/${pokemon.name}`}>
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

export default ComicList;
