import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Container,
  Row, 
  Col} from 'reactstrap';
import ComicListPage from '../ComicList';
import ComicDetailPage from '../ComicDetail';

const Layout = () => (
  <Container>
    <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <h1>ComicHub</h1>
      </Col>
    </Row>
    <Row>
      <Switch>
        <Route exact path="/issues" component={ComicListPage} />
        <Route exact path="/issues/:issueID" component={ComicDetailPage} />
      </Switch>
    </Row>
  </Container>
);

export default Layout;
