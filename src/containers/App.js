import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { css } from "@emotion/core";
import DotLoader from "react-spinners/FadeLoader";
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCoffee,
  faUserPlus,
  faSearch,
  faUserCog,
  faUsersCog
} from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
// import Parse from "parse";
import PropTypes from 'prop-types';
// Actions
import { setLoading } from './../actions/loaderAction';

// Components
import Sidebar from './../components/common/Sidebar';
import Headlines from './news/Headlines';
import BBC from './news/BBC';
import Business from './news/Business';
import Sports from './news/Sports';
import Health from './news/Health';
import Technology from './news/technology';
import './App.css';

library.add(
  faCoffee,
  faUserPlus,
  faCheckCircle,
  faSearch,
  faUserCog,
  faUsersCog
)
function mapStateToProps(store) {
  return {
    loader: store.loader,
  }
}
const override = css`
  top:50%;
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class App extends Component {
  render() {
    const {
      loader,
      dispatch,
    } = this.props;
    let display="";
    if(!loader.loader){
      display = "none";
    }
    return (
      <BrowserRouter>
        <Fragment>
          <div className="sweet-loading" style={{position: "fixed", zIndex: "10000", top: "110px", width: "100%", height:"75vh", display:`${display}`}}>
            <DotLoader
              css={override}
              size={15}
              color={"#123abc"}
              loading={loader.loader}
            />
          </div>
          <Sidebar
            dispatch={dispatch}
          />
            <Route exact path='/' component={Headlines} />
            <Route path='/bbc/:data' component={BBC} />
            <Route path='/business/:data' component={Business} />
            <Route path='/sports/:data' component={Sports} />
            <Route path='/health/:data' component={Health} />
            <Route path='/technology/:data' component={Technology} />
        </Fragment>
      </BrowserRouter>
    );
  }
}


export default connect(mapStateToProps)(App);
