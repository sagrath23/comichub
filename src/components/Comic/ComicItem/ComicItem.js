import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'reactstrap';
import './ComicItem.css';

const ComicItem = ({ comic, direction, index }) => {
  const containerClassnames = classnames('comic-item-container', {
    [direction]: true
  });

  return (
    <ListGroupItem data-testid={`comic-list-item-${index}`} key={index}>
        <Link to={`/issue/${comic.id}`}>
          <div className={containerClassnames}>
            <div>
              <img alt="volume_cover" src={comic.image.original_url} />
            </div>
            <div>
              <h3>{`${comic.volume.name} # ${comic.issue_number}`}</h3>
              <p>{comic.cover_date || comic.volume.cover_date}</p>
            </div>
          </div>
        </Link>
    </ListGroupItem>
  );
};

ComicItem.propTypes = {
  comic: PropTypes.shape({
    image: PropTypes.shape({
      original_url: PropTypes.string
    }),
    issue_number: PropTypes.number,
    volume: PropTypes.shape({
      name: PropTypes.string
    })
  }),
  direction: PropTypes.oneOf(['column', 'row'])
};

ComicItem.defaultProps = {
  comic: {},
  direction: 'column',
  index: 0
};

export default ComicItem;
