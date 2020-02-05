import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import { comicRequest } from '../../../store/domains/comic';
import { extractComicFullname } from '../../../utils';

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
    <div>
      <h2 data-testid="pokemon-name">{extractComicFullname(issue)}</h2>
      <img className="img-fluid" alt="volume_cover" src={coverUrl} />
      <div className="detail-item">
        <h3>Characters</h3>
        {characterList.map((character) => (
          <div>{character.name}</div>
        ))}
      </div>
      <div className="detail-item">
        <h3>Teams</h3>
        {teamList.map((team) => (
          <div>{team.name}</div>
        ))}
      </div>
      <div className="detail-item">
        <h3>Locations</h3>
        {locationList.map((location) => (
          <div>{location.name}</div>
        ))}
      </div>
      <div className="detail-item">
        <h3>Concepts</h3>
        {conceptList.map((concept) => (
          <div>{concept.name}</div>
        ))}
      </div>
      <Button color="primary" onClick={handleClick}>primary</Button>
    </div>
  );
};

export default IssueDetail;
