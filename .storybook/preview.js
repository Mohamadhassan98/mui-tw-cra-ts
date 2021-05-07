import React from "react";
import "../src/styles/index.css";
import {theme} from "@constant/theme";
import {StylesProvider} from "@material-ui/core/styles";
import RTLProvider from "@component/RTLProvider";
import {MuiThemeProvider} from "@material-ui/core";

const themeDecorator = (story) => (
  <MuiThemeProvider theme={theme.theme}>
    <StylesProvider injectFirst>
      <RTLProvider>{story()}</RTLProvider>
    </StylesProvider>
  </MuiThemeProvider>
);

export const decorators = [themeDecorator];
export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  layout: "centered",
};
