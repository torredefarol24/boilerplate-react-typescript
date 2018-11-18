import * as React from 'react';

export interface HelloProps{
  message : string
}

export class Hello extends React.Component <HelloProps> {
  render(){
    return (
      <div>
        <h1> Hey {this.props.message}!</h1>
      </div>
    )
  }
}