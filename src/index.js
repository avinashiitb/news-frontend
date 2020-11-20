  import React from 'react';
  import ReactDOM from 'react-dom';
  import {Provider} from 'react-redux';
  import App from './containers/App';
  import Parse from "parse";
  import store from './store';

  const appConfig = "LOCALHOST";
  const CONFIG = {
    LOCALHOST: {
      PARSE_APPLICATION_ID: "myAppId",
      PARSE_SERVER_URL: "http://localhost:8081/parse"
    }
  };
  Parse.initialize(CONFIG[appConfig].PARSE_APPLICATION_ID);
  Parse.serverURL = CONFIG[appConfig].PARSE_SERVER_URL;


  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('root'));
