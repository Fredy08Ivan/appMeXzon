import React from 'react';
import { StateProvider } from '../pago/StateContext';
import { ThemeProvider } from '../../../node_modules/@material-ui/styles';
import theme from '../pago/constants/theme';

import Header from "../pago/Views/Header";
import Main from "../pago/Views/Main";
import Footer from "../pago/Views/Footer";
import LegalNoticePopup from "../pago/Views/LegalNoticePopups/LegalNoticePopup";

const shipp = () =>
   <ThemeProvider theme={theme}>
    <StateProvider>
      <div style={{ flexGrow: 1 }}>
        <Header title="PAYMENT FORM" logoLink="logo.svg" />
        <Main />
        <Footer />
      </div>
      <LegalNoticePopup />
    </StateProvider>
  </ThemeProvider>

console.log(`%cPRODUCED AND DESIGNED BY\n      __      __\n     /\\ \\    / /\\\n    /  \\ \\  / /  \\\n   / /\\ \\ \\/ / /\\ \\\n  / ____ \\  / ____ \\\n /_/    \\_\\/_/    \\_\\ `, 'color: #5d9cb3;');

export default shipp;