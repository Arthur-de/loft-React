import React from 'react';
import './App.css';
import Header from './Header';

class App extends React.Component {
  state = { currentPage: 'map' };

  changePage = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div>
        <Header changePage={(page) => this.changePage(page)} />
        {this.state.currentPage}
      </div>
    );
  }
}

export default App;