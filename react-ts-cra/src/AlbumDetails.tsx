import * as React from 'react';

export interface Props {
  match : any,
  history : any
}

interface State {
  album : any
}

export default class AlbumDetails extends React.Component <Props, State>{
  constructor(props: Props){
    super(props);
    this.state = {
      album : {}
    }
    this.goBack = this.goBack.bind(this);
  }

  albumId = parseInt(this.props.match.params.id)

  componentDidMount(){
    this.getAlbumDetails(this.albumId);
  }

  async getAlbumDetails(id: number){
    let endpointURL = "https://jsonplaceholder.typicode.com/albums/" + id
    let initialResponse = await fetch(endpointURL);
    let jsonResponse = await initialResponse.json()
    this.setState({
      album : jsonResponse
    })
  }

  goBack(){
    this.props.history.goBack()
  }

  renderAlbumDetails(){
    return (
      <div>
        <h3>{this.state.album.title}</h3>
        <p>Stupid API returns nothing more</p>
        <button onClick={this.goBack} className="btn">Back</button>
      </div>
    )
  }

  render(){
    return(this.renderAlbumDetails())
  }
}