import React, {Component} from 'react';
import '../../App.css';
import { instanceOf, isRequired } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';



class LoggedOutApp extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired,
    };

    componentWillMount() {
        console.log("u", this.props.userID);
        console.log(this.props.cookies);
    }

    setCookie() {
        console.log(this.props);
        let d = new Date();
        d.setTime(d.getTime() + (5 * 60 * 1000));

        this.props.cookies.set("userID", "10", {path: "/", expires: d});
    }

    render() {
        return (
            <div class='loggedout'>
            	<Paper className="main-container" elevation={4}>
            		<h1 class='main-heading'>Welcome to OneCalendar</h1>
            		<h2 class='subheading'>Log in to continue</h2>
                <a href="/login" onClick={(e) => { this.setCookie()}}>
                    <RaisedButton>
                        Login
                    </RaisedButton>
                </a>
              </Paper>
            </div>
        );
    }
}


export default withCookies(LoggedOutApp);
