import React from 'react';
import './App.css';
import Header from './Header';
import { LoginWithAuth } from "./Login";
import { Map } from "./Map";
import { withAuth } from "./AuthContext";
import { ProfileWithAuth } from "./Profile";


class App extends React.Component {
  state = { currentPage: 'map' };

  changePage = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({ currentPage: page });
    } else {
      this.setState({ currentPage: "login"});
    }
  };

  render() {
    return (
      <div>
        <Header changePage={(page) => this.changePage(page)} />
        {
        {
        login: (props) => <LoginWithAuth {...props} />,
        map: (props) =>  <Map {...props} />,
        profile: (props) =>  <ProfileWithAuth {...props} />,
        }
        [this.state.currentPage]({ navigate: this.changePage })
}
      </div>
    );
  }
}

export default withAuth(App);