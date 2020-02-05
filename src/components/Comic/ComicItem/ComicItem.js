import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { extractComicFullname } from '../../../utils';
import { AVAILABLE_LAYOUTS } from '../../../utils/constants';
import './ComicItem.css';

const extractIssueIDFromURL = (url) => (url.split('/')[5]);

const ComicItem = ({ comic, index, layout }) => {
  const containerClassnames = classnames('comic-item-container', {
    [layout]: true
  });
  const coverDate = moment(comic.cover_date || comic.volume.cover_date).format('MMMM Do, YYYY');

  return (
    <Link to={`/issues/${extractIssueIDFromURL(comic.api_detail_url)}`}>
      <div data-testid={`comic-list-item-${index}`} className={containerClassnames}>
        <div>
          <img className="img-fluid" alt="volume_cover" src={comic.image.original_url} />
        </div>
        <div className="comic-item-detail">
          <h3>{extractComicFullname(comic)}</h3>
          <p>{coverDate}</p>
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
    issue_number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    volume: PropTypes.shape({
      name: PropTypes.string
    })
  }),
  layout: PropTypes.oneOf(AVAILABLE_LAYOUTS)
};

ComicItem.defaultProps = {
  comic: {},
  layout: AVAILABLE_LAYOUTS[0],
  index: 0
};

export default ComicItem;
