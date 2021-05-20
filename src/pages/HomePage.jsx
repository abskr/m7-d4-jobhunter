import React, {Component} from 'react';
import styled from 'styled-components'
import {Button, Form, Container} from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { getSearchResultsAction } from '../reduxFolder/actions/index.js'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => ({
  getSearchResults: (e, location, position) =>
    dispatch(getSearchResultsAction(e, location, position)),
});

class HomePage extends Component {
  state = {
    locationInput: '',
    positionInput: '',
  };

  handleInput = (e) => {
    let { name, value } = e.target;
    console.log('ID OF THIS INPUT FIELD IS', name);

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  render() {
    return (
      <MainContainer>
        <SearchBox>
          <Form
            onSubmit={(e) =>
              this.props
                .getSearchResults(e, this.state.locationInput, this.state.positionInput)
                .then(this.props.history.push('/results'))
            }
          >
            <Form.Group controlId='locationInput'>
              <Form.Control
                type='text'
                placeholder='Location'
                name='locationInput'
                onChange={this.handleInput}
                value={this.state.locationInput}
              />
              <Form.Text className='text-muted'>(ex. Berlin, Rome)</Form.Text>
            </Form.Group>

            <Form.Group controlId='positionInput'>
              <Form.Control
                type='text'
                placeholder='Positition'
                name='positionInput'
                onChange={this.handleInput}
                value={this.state.positionInput}
              />
              <Form.Text className='text-muted'>(ex. Frontend, Ruby)</Form.Text>
            </Form.Group>
            <FlexBox>
              <Button variant='outline-primary' type='submit'>
                Submit
              </Button>
            </FlexBox>
          </Form>
        </SearchBox>
      </MainContainer>
    );
  }
}

const MainContainer = styled(Container)`
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 93vh;
  width: 100vw;
`

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  padding: 5px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 0px;
  padding: 0;
`

export default connect(null, mapDispatchToProps)(withRouter(HomePage));