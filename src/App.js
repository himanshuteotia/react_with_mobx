import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';


@inject('UserStore')
@observer
class App extends Component {

  handleSubmit(e){
    e.preventDefault();
    const user = this.user.value;
    this.props.UserStore.addUser(user);
    this.user.value= '';
  }
  render() {
    const { UserStore } = this.props;
    return (
      <div className="App">
        <h2>You have {UserStore.userCount} users</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" placeholder="Enter user" ref={input => this.user = input}/>
          <button>Add user </button>
        </form>
        <ul>
          {UserStore.users.map(v => (
            <li key={v}>{v}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
