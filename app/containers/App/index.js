import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import ErrorBoundary from '../../ErrorBoundry/error-boundry';
const HomePage = lazy(() => import('../HomePage/Loadable'));
const FolderPage = lazy(() => import('../FolderPage'));
const Table = lazy(() => import('../Table'));
const NotFoundPage = lazy(() => import('../NotFoundPage/Loadable'));
export  function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/folders" component={FolderPage} />
          <Route exact path="/table" component={Table} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </>

  );
}
export default ErrorBoundary(App);