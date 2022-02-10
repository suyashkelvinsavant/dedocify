import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";

const APP_ID = "QuarbaJbj5YU6zTi5ELwYL1V7juPqQHfa84mPUrC";//process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = "https://2kwxvfh0usar.usemoralis.com:2053/server";//process.env.REACT_APP_MORALIS_SERVER_URL;

const Application = () => {
  const isServerInfo = APP_ID && SERVER_URL ? true : false;
  //Validate
  if (!APP_ID || !SERVER_URL)
    throw new Error(
      "Missing Moralis Application ID or Server URL. Make sure to set your .env file.",
    );
  if (isServerInfo)
    return (
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <App isServerInfo />
      </MoralisProvider>
    );
  else {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        Failed
      </div>
    );
  }
};

ReactDOM.render(
  <React.StrictMode>
    <Application/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
