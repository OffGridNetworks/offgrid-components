import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import About from './About';
import store from './store';
import './index.css';

import { OGNAppBar, OGNSideBar, OGNConversationSurface } from '../dist/OGNComponents'

storiesOf('About', module)
  .add('Introduction', () => (
    <About showApp={linkTo('OGNConversationSurface')}/>
  ));

storiesOf('OGNConversationSurface', module)
  .add('Default', () => (
       <Provider store={store}>
    <OGNConversationSurface id="chat" />
</Provider>
  ))
   .add('With Sidebar', () => (
       <Provider store={store}>
       <div className="App">
        <OGNAppBar />
        <OGNSideBar >
          <ul>
            <li className="ogn-sidebar-item App-sidebar-heading">Connected</li>
            <li className="ogn-sidebar-item App-sidebar-item"><a href="#">Shout</a></li>
            </ul>
        </OGNSideBar>
        <OGNConversationSurface id="chat" />
        </div>
</Provider>
  ))
  ;
