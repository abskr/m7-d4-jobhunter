import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components'
import JobCard from '../components/JobCard.jsx'
import { connect } from 'react-redux'

const mapStateToProps = state => ({favJobs: state.fav.jobs, searchResults: state.search.jobList})

function ResultsPage(props) {
  return (
    <Container>
      <RowContainer>
        <Col xs={12} md={{ span: 8, offset: 2 }}>
          {props.searchResults && 
            props.searchResults.map((result, i) => {
              const isFav = props.favJobs.some(f => f.id === result.id)
               return <JobCard
                submitJobId={props.submitJobId}
                key={i}
                isFav= {isFav}
                jobDesc={result}
              />;
            })
          }
        </Col>
      </RowContainer>
    </Container>
  );
}

const RowContainer = styled(Row)`
  margin-top: 3vh
`

export default connect(mapStateToProps)(ResultsPage);