import React from "react";
import { ThemeProvider } from "styled-components";
import Main from "./components/Main";
import { lightTheme, DarkTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";
import { Route, Switch } from "react-router";
import "./App.css";

const BGContext = React.createContext({});

const App = () => {
  return (
    <div>
      {/* <BGContext> */}
        <GlobalStyle />
        <ThemeProvider theme={DarkTheme}>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </ThemeProvider>
      {/* </BGContext> */}
    </div>
  );
};

export default App;
