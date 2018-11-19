import * as React from 'react';
import { NavLink } from 'react-router-dom';

export interface Props {

}

interface State {
  albums : any []
}

export default class Albums extends React.Component<Props, State>{
  constructor(props : Props){
    super(props)
    this.state = {
      albums : []
    }
  }
  
  componentDidMount(){
    this.getAllAlbums()
  }

  async getAllAlbums(){
    let endpointURL : string = 'https://jsonplaceholder.typicode.com/albums';
    let initialResponse = await fetch(endpointURL);
    let jsonResponse = await initialResponse.json();

    this.setState({
      albums : jsonResponse.splice(0,10)
    })
  }

  renderAlbums = () => (
    <ul>
      {
        this.state.albums.map(album => { 
          return <NavLink to={"/albums/" + album.id + "/details"} key={album.id}>
            <li>{album.title}</li>
            </NavLink>
        })
      }   
    </ul>
  )
    
  render(){
    return (
      <div>
        <h3> Albums</h3>
        {this.renderAlbums()}
      </div>
    
    )
  }

}