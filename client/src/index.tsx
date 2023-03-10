import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./gql/client";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F76C6C",
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <ApolloProvider client={apolloClient}>
          <App />
        </ApolloProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
