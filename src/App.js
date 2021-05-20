import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage.jsx'
import ResultsPage from './pages/ResultsPage.jsx'
import JobDetailPage from './pages/JobDetailPage.jsx'
import FavouritesPage from './pages/FavoritesPage.jsx'
import Navigator from './components/Navigator.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  state = {
    // locationInput: '',
    // positionInput: '',
    searchResults: [],
    selectedJob: null,
    isLoading: false,
  };

  // handleInput = (e) => {
  //   let { name, value } = e.target;
  //   console.log('ID OF THIS INPUT FIELD IS', name);

  //   this.setState({
  //     ...this.state,
  //     [name]: value,
  //   });
  // };

  // https://striveschool-api.herokuapp.com/api/jobs
  // https://jobs.github.com/positions.json
  // submitQuery = async (e) => {
  //   e.preventDefault();
  //   let baseUrl = 'https://jobs.github.com/positions.json';
  //   let locationQuery = `location=${this.state.locationInput}`;
  //   let position = `description=${this.state.positionInput}`;
  //   try {
  //     let resp = await fetch(`${baseUrl}?${position}&${locationQuery}`);
  //     if (resp.ok) {
  //       let data = await resp.json();
  //       console.log(data);
  //       this.setState({
  //         ...this.state,
  //         searchResults: data,
  //       });
  //     } else {
  //       console.error("something's wrong!!");
  //     }
  //     // <Redirect to='/results' />;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  submitJobId = async (jobId) => {
    try {
      let baseUrl = 'https://jobs.github.com/positions';
      let resp = await fetch(`${baseUrl}/${jobId}.json`);
      if (resp.ok) {
        let data = await resp.json();
        console.log(jobId);
        this.setState({
          ...this.state,
          selectedJob: data,
        });
      } else {
        console.error("something's wrong!!");
      }
      // <Redirect to='/results' />;
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Router>
        <Navigator />
        <Route
          path='/'
          exact
          render={(routerProps) => (
            <HomePage
              {...routerProps}
              // handleInput={this.handleInput}
              // locationInput={this.state.locationInput}
              // positionInput={this.state.positionInput}
              submitQuery={this.submitQuery}
            />
          )}
        />
        <Route
          path='/results'
          exact
          render={(routerProps) => (
            <ResultsPage
              {...routerProps}
              searchResults={this.state.searchResults}
              submitJobId={this.submitJobId}
            />
          )}
        />
        <Route
          path='/favorites'
          exact
          render={(routerProps) => (
            <FavouritesPage
              {...routerProps} 
              submitJobId={this.submitJobId} />
          )}
        />
        <Route
          path='/results/:id'
          exact
          render={(routerProps) => (
            <JobDetailPage
              {...routerProps}
              // selectedJob={this.state.selectedJob}
            />
          )}
        />
      </Router>
    );
  }
}





export default App;
