import * as React from 'react'
import { NavLink} from 'react-router-dom';

export interface Props{
}

interface State {
  users : any []
}


export class Users extends React.Component<Props, State>{
  constructor(props : Props){
    super(props)
    this.state = {
      users : []
    }
  }

  componentDidMount(){
    this.getAllUsers()
  }

  async getAllUsers(){
    let endpoint = "https://jsonplaceholder.typicode.com/users"
    let initialResponse = await fetch(endpoint)
    let jsonResponse = await initialResponse.json()
    this.setState({
      users : jsonResponse
    })
  }

  listUsers(){
    return this.state.users.map(user => {
      return <NavLink key={user.id} to={{ pathname : "/users/" + user.id + "/details", state : { user : user }}} > <li>{user.name}</li> </NavLink>
      
    })
  }

  render(){
    return(
      <div>
        <h3>Users</h3>
        <ul> 
          {/* {this.state.users.map(user => {
            return <li>{user.name}</li>
            })
          } */}
          {this.listUsers() }
        </ul>
      </div>
    )
  }
}