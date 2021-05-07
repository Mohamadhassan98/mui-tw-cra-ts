import {theme} from "@constant/theme";
import {ModalProvider} from "@context/ModalContext/Provider";
import {MuiThemeProvider} from "@material-ui/core";
import Modals from "@modules/modals";
import React from "react";
import {QueryClient, QueryClientProvider} from "react-query";
import RTLProvider from "@component/RTLProvider";

const queryClient = new QueryClient();
const GlobalProviders: React.FC = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MuiThemeProvider theme={theme}>
        <RTLProvider>
          <ModalProvider>
            <Modals />
            {children}
          </ModalProvider>
        </RTLProvider>
      </MuiThemeProvider>
    </QueryClientProvider>
  );
};

export default GlobalProviders;
