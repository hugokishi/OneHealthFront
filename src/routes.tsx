import { Route, BrowserRouter, Switch } from 'react-router-dom';
import SignUp from 'views/Auth/SignUp';
import Profile from 'views/Profile';
import SignIn from 'views/Auth/SignIn';
import Metrics from 'views/Profile/Metrics';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/profile" component={Profile} />
        <Route path="/metrics" component={Metrics} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
