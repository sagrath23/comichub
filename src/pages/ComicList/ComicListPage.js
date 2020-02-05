import React, { useState } from "react";
import {
  Container
} from "reactstrap";
import classnames from 'classnames';
import { ComicList } from "../../components/Comic";
import { AVAILABLE_LAYOUTS } from '../../utils/constants';

const ComicListPage = () => {
  const [selectedLayout, setSelectedLayout] = useState(0);
  const handleLayoutOptionClick = (layoutIndex) => {
    setSelectedLayout(layoutIndex);
  };
  const calculateButtonClassnames = (index) => (classnames('btn btn-outline-success my-2 my-sm-0', {
    'active': index === selectedLayout
  }))

  return (
    <Container>
      <nav className="navbar navbar-light bg-light mb-3">
        <p className="navbar-brand">Latest issues</p>
        <form className="form-inline" onSubmit={(e) => e.preventDefault()}>
          <button className={calculateButtonClassnames(0)} onClick={() => handleLayoutOptionClick(0)}>Grid</button>
          <button className={calculateButtonClassnames(1)} onClick={() => handleLayoutOptionClick(1)}>List</button>
        </form>
      </nav>
      <ComicList layout={AVAILABLE_LAYOUTS[selectedLayout]} />
    </Container>
  );
};

export default ComicListPage;
