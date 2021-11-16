import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import SignUp from 'views/Auth/SignUp';
import Profile from 'views/Profile';
import SignIn from 'views/Auth/SignIn';
import Metrics from 'views/Profile/Metrics';
import { isAuthenticated } from 'auth';

const PrivateRoutes = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <PrivateRoutes path="/profile" component={Profile} />
        <PrivateRoutes path="/metrics" component={Metrics} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
