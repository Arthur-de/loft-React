import React from 'react';
import './App.css';
import Header from './Header';
import Login from "./Login";
import Map from "./Map";
import Profile from "./Profile";
import Registration from "./Registration"

class App extends React.Component {
  state = { currentPage: 'map' };

  changePage = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div>
        <Header changePage={(page) => this.changePage(page)} />
        {
        {
        login: <Login />,
        map: <Map />,
        profile: <Profile />,
        registration: <Registration />
        }
     [this.state.currentPage]
}
      </div>
    );
  }
}

export default App;