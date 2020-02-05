import React, { useState } from "react";
import {
  Container
} from "reactstrap";
import { ComicList } from "../../components/Comic";
import { AVAILABLE_LAYOUTS } from '../../utils/constants';

const ComicListPage = () => {
  const [selectedLayout, setSelectedLayout] = useState(0);
  const handleLayoutOptionClick = (layoutIndex) => {
    setSelectedLayout(layoutIndex);
  }

  return (
    <Container>
      <nav class="navbar navbar-light bg-light mb-3">
        <p class="navbar-brand">Latest issues</p>
        <form class="form-inline" onSubmit={(e) => e.preventDefault()}>
          <button class="btn btn-outline-success my-2 my-sm-0" onClick={() => handleLayoutOptionClick(0)}>Grid</button>
          <button class="btn btn-outline-success my-2 my-sm-0" onClick={() => handleLayoutOptionClick(1)}>List</button>
        </form>
      </nav>
      <ComicList layout={AVAILABLE_LAYOUTS[selectedLayout]} />
    </Container>
  );
};

export default ComicListPage;
