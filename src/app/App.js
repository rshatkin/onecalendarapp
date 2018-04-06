import React, {Component} from 'react';
import LoginWrapper from './components/login/LoginWrapper';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies, CookiesProvider } from 'react-cookie';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
            <CookiesProvider>
                <LoginWrapper/>
            </CookiesProvider>
            </MuiThemeProvider>
        );
    }
}

export default App;
