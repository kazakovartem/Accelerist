import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store, persistor } from './state/store';
import RubikMedium from './assets/fonts/Rubik-Medium.ttf';
import RubikRegular from './assets/fonts/Rubik-Regular.ttf';
import GothamRounded from './assets/fonts/GothamRoundedMedium.otf';
import GothamRoundedBold from './assets/fonts/GothamRoundedBold.otf';
import GothamRoundedBoldSSM from './assets/fonts/GothamRoundedSSmBold.ttf';

const Global = createGlobalStyle`
@font-face {
  font-family: 'Rubik-Medium';
  font-display: swap;
  src: url(${RubikMedium}) format('truetype');
  font-style: normal;
}
@font-face {
  font-family: 'Rubik-Regular';
  font-display: swap;
  src: url(${RubikRegular}) format('truetype');
  font-style: normal;
}

@font-face {
  font-family: 'GothamRounded-Medium';
  font-display: swap;
  src:  local('GothamRounded-Medium'),
  url(${GothamRounded}) format('opentype');
  font-style: normal;
}

@font-face {
  font-family: 'GothamRounded-Bold';
  font-display: swap;
  src:  local('GothamRounded-Bold'),
  url(${GothamRoundedBold}) format('opentype');
  font-style: normal;
}

@font-face {
  font-family: 'GothamRounded-BoldSSM';
  font-display: swap;
  src:  local('GothamRounded-BoldSSM'),
  url(${GothamRoundedBoldSSM}) format('truetype');
  font-style: normal;
}

body * {
  font: inherit;
}

body ul {
  list-style: none;
  padding: 0px;
}

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Rubik-Regular';
}
body p {
  margin: 0;
  box-sizing: border-box;
}
body h1 {
  margin: 0;
}
body div {
  margin: 0;
  box-sizing: border-box;
}
body span {
  margin: 0;
  box-sizing: border-box;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Global />
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
