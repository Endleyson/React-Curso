import React from 'react'
import './Content.css'
import {Switch, Route}from'react-router-dom'
import About from '../../views/About'
import Home from '../../views/Home'
import Param from '../../views/Param'
import NotFound from '../../views/NotFound'
const Content = props =>(
    <main className='Content'>
        <Switch>
            <Route path="/about">
                <About></About>
            </Route>
            <Route path="/param/:id">
                <Param></Param>
            </Route>
            <Route Exact path="/home">
                <Home></Home>
            </Route>
            <Route  path="*">
                <NotFound></NotFound>
            </Route>
        </Switch>
    </main>
)
export default Content