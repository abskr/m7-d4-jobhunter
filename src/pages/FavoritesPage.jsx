import React from 'react';
import {Col, Container, Row} from 'react-bootstrap'
import styled from 'styled-components'
import { connect } from 'react-redux'
import JobCard from '../components/JobCard.jsx'

const mapStateToProps = (state) => ({
  favJobs: state.fav.jobs
});

const FavoritesPage = (props) => {
  return (
    <Container>
      <RowContainer>
        <Col xs={12} md={{ span: 8, offset: 2 }}>
          {props.favJobs &&
            props.favJobs.map((result) => {
              const isFav = props.favJobs.some(f => f.id === result.id)
              return <JobCard
                submitJobId={props.submitJobId}
                key={result.id}
                jobDesc={result}
                isFav={isFav}
              />;
            })}
        </Col>
      </RowContainer>
    </Container>
  );
};

const RowContainer = styled(Row)`
  margin-top: 3vh;
`;

export default connect(mapStateToProps)(FavoritesPage);