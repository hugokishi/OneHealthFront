import { Route, BrowserRouter, Switch } from 'react-router-dom';
import SignUp from 'views/Auth/SignUp';
import SignIn from './views/Auth/SignIn';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={SignIn}
        />
         <Route
          path="/sign-up"
          component={SignUp}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
