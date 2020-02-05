export const extractComicFullname = ({
  name: issueName,
  issue_number: issueNumber,
  volume: { 
    name: volumeName
  } 
}) => (
  `${volumeName} # ${issueNumber}${issueName ? `: ${issueName}` : ''}`
);