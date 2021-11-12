import { Route, BrowserRouter, Switch } from 'react-router-dom';
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
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
