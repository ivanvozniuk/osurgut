import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

import App from './App.js';
import Layout from './Layout/Layout';
import PrivateRoute from './containers/PrivateRoute';

import 'semantic-ui-css/semantic.min.css';

import PostContainer from './containers/PostsContainer';
import LoginContainer from './containers/LoginContainer';
import PostCreateContainer from './containers/PostCreateContainer.js';
import SliderContainer from './containers/SliderContainer.js';
import PhotodayContainer from './containers/PhotodayContainer.js';
import BannerContainer from './containers/BannerContainer.js';
import CategoryContainer from './containers/CategoryContainer.js';
import CompilationContainer from './containers/CompilationContainer.js';
import HotpostContainer from './containers/HotpostContainer';
import SuggestionContainer from './containers/SuggestionContainer';

export const Context = React.createContext(null);

class Index extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <App>
            <Switch>
              <Route exact path="/login" component={LoginContainer} />
              <PrivateRoute exact path="/" component={PostContainer} />
              <PrivateRoute exact path="/posts" component={PostContainer} />
              <PrivateRoute exact path="/posts/create" component={PostCreateContainer} />
              <PrivateRoute exact path="/slider" component={SliderContainer} />
              <PrivateRoute exact path="/photoday" component={PhotodayContainer} />
              <PrivateRoute exact path="/banner" component={BannerContainer} />
              <PrivateRoute exact path="/category" component={CategoryContainer} />
              <PrivateRoute exact path="/compilation" component={CompilationContainer} />
              <PrivateRoute exact path="/hotpost" component={HotpostContainer} />
              <PrivateRoute exact path="/suggestion" component={SuggestionContainer} />
              <Route exact path="*" component={LoginContainer} />
            </Switch>
          </App>
        </Layout>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
