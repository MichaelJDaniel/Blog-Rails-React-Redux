import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Blogs from './components/Blogs'
import NavBar from './components/NavBar'
import './App.css';
import BlogList from './components/BlogList';
import { Container } from 'semantic-ui-react';

const App = () => (
  <>
    <NavBar/> 
    <Container>
      <Switch>
        <Route exact path="/" component={ Home  }/>
        <Route exact path="/blog/:id" component={BlogList}/>
      </Switch>
    </Container>
    
  </>
  )
export default App;
