import * as React from 'react';

export interface HelloProps{
  message : string
}

export class Hello extends React.Component <HelloProps> {
  render(){
    return (
      <div>
        <h1> Hey <em>{this.props.message}!</em></h1>
        <p> This is a demo for trying out React with TypeScript & Webpack</p>
      </div>
    )
  }
}