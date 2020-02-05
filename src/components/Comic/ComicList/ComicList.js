import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup, Col, ListGroup } from 'reactstrap';
import ComicItem from '../ComicItem';
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
      <ListGroup data-testid="issue-list-list">
        {list.map((comic, index) => (
          <ComicItem
            comic={comic}
            index={index}
            key={`comic-item-${index}`} 
          />
        ))}
      </ListGroup>
      <ButtonGroup>
        <Button data-testid="comic-list-prev-button" onClick={() => handleClick('prev')}>Prev</Button>
        <Button data-testid="comic-list-next-button" onClick={() => handleClick('next')}>Next</Button>
      </ButtonGroup>
    </Col>
    
  );
};

export default ComicList;
