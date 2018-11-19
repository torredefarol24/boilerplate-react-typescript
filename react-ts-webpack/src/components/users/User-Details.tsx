import * as React from 'react';

export interface Props{
  location: any
}

interface State{
  user : any,
  userAddress : any,
  userAddressGeo : any,
  userCompany : any
}

export class UserDetails extends React.Component<Props, State>{
  constructor(props: Props){
    super(props)
    this.state = {
      user : {},
      userAddress : {},
      userAddressGeo : {},
      userCompany : {}
    }
  }

  componentDidMount(){
    this.setState({
      user : this.props.location.state.user,
      userAddress : this.props.location.state.user.address,
      userCompany : this.props.location.state.user.company
    })
  }


  render(){
    return(
      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <h1> {this.state.user.name}</h1>
          <p> <strong> {this.state.userCompany.bs}</strong> </p>
          <p> Email : {this.state.user.email} </p>
          <p> Phone : {this.state.user.phone}</p>
        </div>
        <div className='col-md-6 col-sm-12'>
          <h4> WhereAbouts: </h4>
          <p> {this.state.userAddress.suite}, {this.state.userAddress.street}</p>
          <p> {this.state.userAddress.city}, {this.state.userAddress.zipcode}</p>
          <h4> Employment </h4>
          <p> {this.state.userCompany.name}</p>
        </div>
      </div>
    )
  }
}