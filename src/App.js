import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Landing from './pages/Landing'
import Settings from './pages/Preferences'

import NewSpot from './pages/spots/NewSpot'
import AnalyzeSpot from './pages/spots/AnalyzeSpot'
import ListSpots from './pages/spots/ListSpots'

import Main from './containers/Main'
import AuthenticationContainer from './containers/AuthenticationContainer'
import DependenciesContainer from './containers/DependenciesContainer'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={DependenciesContainer(Landing)} />

      <Main>
        <Route path='/settings' component={AuthenticationContainer(Settings)} />
        <Route path='/spots/list' component={AuthenticationContainer(DependenciesContainer(ListSpots))} />
        <Route path='/spots/new' component={AuthenticationContainer(DependenciesContainer(NewSpot))} />
        <Route path='/spots/analyze' component={AuthenticationContainer(DependenciesContainer(AnalyzeSpot))} />
      </Main>
    </Switch>
  </BrowserRouter>
)

export default App
