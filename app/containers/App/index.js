import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import  FolderPage  from '../FolderPage';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
export default function App() {
  return (
    <div>
      <Header/> 
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/folders" component={FolderPage} />
        <Route component={NotFoundPage} />
      </Switch>  
      <Footer /> 
    </div>
  );
}
