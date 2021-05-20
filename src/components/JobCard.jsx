import React from 'react';
import { Button, Card } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import {addToFavAction, getJobDetailAction, removeFromFavAction} from '../reduxFolder/actions/index.js'
import {connect} from 'react-redux'

const mapDispatchToProps = dispatch => ({
  addToFav: (jobObj) => dispatch(addToFavAction(jobObj)),
  removeFromFav: (jobObj) => dispatch(removeFromFavAction(jobObj)),
  getJobDetail: (jobId) => dispatch(getJobDetailAction(jobId))
})

function JobCard({
  history,
  jobDesc,
  getJobDetail,
  addToFav,
  removeFromFav,
  isFav,
}) {
  return (
    <Card className='mb-3'>
      <Card.Header>
        {jobDesc.company} <small>({jobDesc.location})</small>{' '}
      </Card.Header>
      <Card.Body>
        <Card.Title>{jobDesc.title}</Card.Title>
        {/* <div
          dangerouslySetInnerHTML={{ __html: jobDesc.description }}
        /> */}
        <Button
          variant='primary'
          onClick={() =>
            getJobDetail(jobDesc.id).then(
              history.push(`/results/${jobDesc.id}`)
            )
          }
        >
          Apply now!
        </Button>

        {!isFav && (
          <Button
            className='mx-2'
            variant='danger'
            onClick={() => addToFav(jobDesc)}
          >
            ✔
          </Button>
        )}

        {isFav && (
          <Button
            className='mx-2'
            variant='outline-danger'
            onClick={() => removeFromFav(jobDesc)}
          >
            ❌
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default connect(null, mapDispatchToProps)(withRouter(JobCard));