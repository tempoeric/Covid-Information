import { Suspense } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { history } from 'utils/history';
import { CovidInfoApp } from 'containers';
import './assets/styles.scss';
import 'antd/dist/antd.css';

export default function App() {
  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  );
  return (
    <Router history={history}>
      <Suspense fallback={loading}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/covid-info-app" />;
            }}
          />
          <Route
            exact
            path="/covid-info-app"
            render={props => <CovidInfoApp />}
          />
        </Switch>
      </Suspense>
    </Router>
  );
}
