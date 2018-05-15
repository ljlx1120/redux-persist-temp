import React, { Component } from 'react';
import { User } from '../../components/User';
import { Main } from '../../components/Main';

import { connect } from 'react-redux';

import { setName, logOut } from '../../actions/userActions';

import { TopNav } from '../../components/TopNav/TopNav';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>{process.env.REACT_APP_NAME}</h1>
        <TopNav />
        <Main
          changeUsername={() => this.props.setName('Hello')}
          logout={() => this.props.logOut()}
        />
        <User username={this.props.user.name} />
        <i data-feather="circle" className="stroke-current text-purple inline-block h-8 w-8"></i>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    math: state.mathReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name));
    },
    logOut: () => {
      dispatch(logOut());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
