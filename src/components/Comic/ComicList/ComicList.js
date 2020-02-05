import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import classnames from 'classnames';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup, Col } from 'reactstrap';
import ComicItem from '../ComicItem';
import { comicListRequest } from '../../../store/domains/comicList';
import { AVAILABLE_LAYOUTS } from '../../../utils/constants';
import './ComicList.css';

const limit = 20;

const ComicList = ({ layout }) => {
  const { search } = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { offset: startOffset = 0 } = queryString.parse(search);
  const [offset, setOffset] = useState(startOffset);
  const list = useSelector((state) => (state.comicList.list));
  const layoutClassnames = classnames('comic-list-wrapper', {
    [layout]: true
  });
  const handleClick = (direction) => {
    let newOffset;
    if (direction === 'next') {
      newOffset = +offset + limit;
    } else {
      newOffset = +offset - limit;
    }

    setOffset(newOffset);
    history.push(`/issues?offset=${newOffset}`);
  }
  useEffect(() => {
    setOffset(startOffset);
    dispatch(comicListRequest(limit, offset));
  }, [dispatch, offset, startOffset]);

  return (
    <Col>
      <div className={layoutClassnames}>
        {list.map((comic, index) => (
          <ComicItem
            comic={comic}
            index={index}
            key={`comic-item-${index}`} 
          />
        ))}
      </div>
      <ButtonGroup>
        <Button data-testid="comic-list-prev-button" onClick={() => handleClick('prev')}>Prev</Button>
        <Button data-testid="comic-list-next-button" onClick={() => handleClick('next')}>Next</Button>
      </ButtonGroup>
    </Col>
    
  );
};

ComicList.propTypes = {
  layout: PropTypes.oneOf(AVAILABLE_LAYOUTS)
};

ComicList.defaultProps = {
  layout: AVAILABLE_LAYOUTS[0]
};

export default ComicList;
