import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { extractComicFullname } from '../../../utils';
import './ComicItem.css';

const extractIssueIDFromURL = (url) => (url.split('/')[5]);

const ComicItem = ({ comic, direction, index }) => {
  const containerClassnames = classnames('comic-item-container', {
    [direction]: true
  });

  return (
    <Link to={`/issues/${extractIssueIDFromURL(comic.api_detail_url)}`}>
      <div className={containerClassnames}>
        <div>
          <img className="img-fluid" alt="volume_cover" src={comic.image.original_url} />
        </div>
        <div>
          <h3>{extractComicFullname(comic)}</h3>
          <p>{comic.cover_date || comic.volume.cover_date}</p>
        </div>
      </div>
    </Link>
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
