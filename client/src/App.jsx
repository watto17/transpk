import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from './routes';
import ErrorBoundary from "./utils/errorHandler";
import MyProvider from './Components/Atoms/NameProvider';

class App extends Component {
  render() {
    return (
      <MyProvider>
        <ErrorBoundary>
          <Router>
            <Route/>
          </Router>
        </ErrorBoundary>
        </MyProvider>
    );
  }
}

export default App;
