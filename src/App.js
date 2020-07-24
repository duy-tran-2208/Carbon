import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './app.scss';
// import { Button } from 'carbon-components-react';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import TutorialHeader from './components/TutorialHeader/index';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import HomePage from './content/HomePage';

class App extends Component {
  render() {
    return (
      <>
        {/* <TutorialHeader /> */}
        <Content>
          {/* <Button>Button</Button> */}
          <Switch>
            <Route path="/" component={HomePage} />
            {/* <Route exact path="/landing" component={LandingPage} />
            <Route path="/repos" component={RepoPage} /> */}
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
