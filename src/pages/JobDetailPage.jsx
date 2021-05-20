import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { addToFavAction, removeFromFavAction } from '../reduxFolder/actions/index.js';
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
  favJobs: state.fav.jobs,
  selectedJob: state.selectedjob.jobDetail,
});

const mapDispatchToProps = (dispatch) => ({
  addToFav: (jobObj) => dispatch(addToFavAction(jobObj)),
  removeFromFav: (jobObj) => dispatch(removeFromFavAction(jobObj)),
});


const JobDetailPage = props => {
  return (
    <Container>
      <RowContainer>
        <Col xs={12} md={{ span: 8, offset: 2 }}>
          {props.selectedJob && (
            <Card className='mb-3'>
              <Card.Header>{props.selectedJob.company}</Card.Header>
              <Card.Body>
                <Card.Title>{props.selectedJob.title}</Card.Title>
                <div
                  dangerouslySetInnerHTML={{
                    __html: props.selectedJob.description,
                  }}
                />
                {props.favJobs && props.favJobs.some((job) => job.id === props.selectedJob.id) ? (
                  <Button
                    variant='danger'
                    onClick={() => props.addToFav(props.selectedJob)}
                  >
                    Add to favorite
                  </Button>
                ) : (
                  <Button
                    variant='outline-danger'
                    onClick={() => props.removeFromFav(props.selectedJob)}
                  >
                    Remove from favorite
                  </Button>
                )}
              </Card.Body>
            </Card>
          )}
        </Col>
      </RowContainer>
    </Container>
  );
};

const RowContainer = styled(Row)`
  margin-top: 3vh;
`;

export default connect(mapStateToProps, mapDispatchToProps)(JobDetailPage);