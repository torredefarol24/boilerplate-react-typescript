import React, {Component} from 'react'
import { runInThisContext } from 'vm';

// export interface HelloProps{
//   message : string
// }

type Props = {
  message : string
}

interface State {
  sub_message : string
}

export default class Hello extends React.Component <Props, State>{
  constructor(props : Props){
    super(props)
    this.state = {
      sub_message : "Bye"
    }
  }

  private updateSubMessage(){
    this.setState({
      sub_message : "GoodBye, For Now"
    })
  }

  public render(){
    return (
      <div>
        <h3> Hello {this.props.message}</h3>
        <p> And, finally {this.state.sub_message}</p>
        <button onClick={this.updateSubMessage.bind(this)}> Change Ending Message</button>
        <ul>
          <li> Props Working</li>
          <li> State Updating</li>
        </ul>
      </div>
    )
  }
}