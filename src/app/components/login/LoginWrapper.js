import React, {Component} from 'react';
import LoggedInApp from './LoggedInApp';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies, CookiesProvider } from 'react-cookie';
import '../../App.css';
import LoggedOutApp from "./LoggedOutApp";
import { ApiService } from './../../../api/apiService'

class LoginWrapper extends Component {
    componentWillMount() {
        const { cookies } = this.props;
        console.log("wrapper", cookies.get("userID"));

        let userID = cookies.get('userID') || "0";
        this.setState({
            userID: userID,
        });
    }

    render() {
        let apiService = new ApiService();

        const renderedApp = (this.state.userID === "0") ? (
            <LoggedOutApp userID={this.state.userID} />
        ) : (
            <LoggedInApp userID={this.state.userID} apiService={apiService} />
        );

        return (
            renderedApp
        );
    }
}


export default withCookies(LoginWrapper);
