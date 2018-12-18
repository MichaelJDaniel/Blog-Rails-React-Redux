import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Blogs from './components/Blogs'
// import NavBar from './components/NavBar'
import './App.css';
import BlogForm from './components/BlogForm';

const App = () => (
  <>
  {/* <NavBar/> */}
    
      <Switch>
      <Route exact path="/" component={BlogForm}/>
      <Route exact path="/blog/:id" component={Blogs}/>
      </Switch>
    
  </>
  )
export default App;
