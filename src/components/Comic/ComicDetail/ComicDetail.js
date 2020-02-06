import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import { comicRequest } from '../../../store/domains/comic';
import { extractComicFullname } from '../../../utils';
import './ComicDetail.css';

const IssueDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = () => history.goBack();
  const { issueID } = useParams();
  const issue = useSelector((state) => (state.comic));
  const { 
    character_credits: characterList,
    concept_credits: conceptList,
    image: {
      original_url: coverUrl
    },
    location_credits: locationList,
    team_credits: teamList
  } = issue;
  
  useEffect(() => {
    dispatch(comicRequest(issueID));
  }, [dispatch, issueID]);

  return (
    <div className="detail-container">
      <div className="title">
        <h2 data-testid="issue-name">{extractComicFullname(issue)}</h2>
      </div>
      <div className="cover">
        <img className="img-fluid" alt="volume_cover" src={coverUrl} />
      </div>
      
      <div className="characters">
        <h3 className="detail-title">Characters</h3>
        {characterList.map((character) => (
          <div>{character.name}</div>
        ))}
      </div>
      <div className="teams">
        <h3 className="detail-title">Teams</h3>
        {teamList.map((team) => (
          <div>{team.name}</div>
        ))}
      </div>
      <div className="locations">
        <h3 className="detail-title">Locations</h3>
        {locationList.map((location) => (
          <div>{location.name}</div>
        ))}
      </div>
      <div className="concepts">
        <h3 className="detail-title">Concepts</h3>
        {conceptList.map((concept) => (
          <div>{concept.name}</div>
        ))}
      </div>
      <div className="nav-btns">
        <Button color="primary" onClick={handleClick}>Go back</Button>
      </div>
    </div>
  );
};

export default IssueDetail;
