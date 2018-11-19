import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Hello from './Hello';
import Albums from './Album';
import AlbumDetails from './AlbumDetails';
import AddAlbum from './AddAlbum';
import { Nav } from './Nav';


class App extends Component {
  render() {
    return (
      <div className="row">
        <div className='col-md-12' style={{marginBottom : 20}}>
          <h1> React in TypeScript</h1>
        </div>
        <div className='col-md-6'>
          <Hello message="TypeScript Fan"></Hello>
        </div>
        <div className='col-md-6'>
          <Nav></Nav>
          <Route exact path="/albums" component={Albums} />
          <Route path="/albums/add/" component={AddAlbum} />
          <Route path="/albums/:id/details" component={AlbumDetails} />
        </div>
      </div>
    );
  }
}

export default App;
