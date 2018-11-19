import React, {Component} from 'react'

export interface Props{
  message : string
}

interface State {
  sub_message : string,
  default_msg : string
}

export default class Hello extends React.Component <Props, State>{
  constructor(props : Props){
    super(props)
    this.state = {
      sub_message : "Bye",
      default_msg : "Working"
    }
  }

  private updateSubMessage(){
    this.setState({
      sub_message : "GoodBye, For Now",
      default_msg : "Updated"
    })
  }

  public render(){
    return (
      <div>
        <h3> Hello <em>{this.props.message} </em> </h3>
        <p> And, finally {this.state.sub_message}</p>
        <button className='btn' onClick={this.updateSubMessage.bind(this)}> Change Ending Message</button>
        <ul>
          <li> Props Worked</li>
          <li> State <strong>{this.state.default_msg}</strong></li>
          <li> Routing Works</li>
        </ul>
      </div>
    )
  }
}