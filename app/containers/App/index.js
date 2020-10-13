import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
// import HomePage from '../HomePage/Loadable';
// import NotFoundPage from '../NotFoundPage/Loadable';
// import FolderPage from '../FolderPage';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ErrorBoundary from '../../ErrorBoundry/error-boundry';
// import Table from '../Table';
// import Error2 from '../../ErrorBoundry/error2';

const HomePage = lazy(() => import('../HomePage/Loadable'));
const FolderPage = lazy(() => import('../FolderPage'));
const Table = lazy(() => import('../Table'));
const NotFoundPage = lazy(() => import('../NotFoundPage/Loadable'));
export  default function App() {
  return (
    <>

      <Header />
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/folders" component={FolderPage} />
            <Route exact path="/table" component={Table} />
            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
      <Footer />

    </>

  );
}
// export default Error2(App);