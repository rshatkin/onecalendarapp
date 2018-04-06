import React, {Component} from 'react';
import {Cookies, withCookies} from 'react-cookie';
import {instanceOf, isRequired} from 'prop-types';
import {ApiService} from './../../../api/apiService'
import RaisedButton from 'material-ui/RaisedButton';
import CalendarSyncForm from "../calendarSyncForm";
import Paper from 'material-ui/Paper';


class LoggedInApp extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired,
        apiService: instanceOf(ApiService).isRequired,
    };

    componentWillMount() {
        this.setState({
            calendars: [],
        });

        this.props.apiService.availableCalendars().then((calendars) => {
            let event = calendars.map((calendar) => {
                return (
                    <div key={calendar.id + "-"}>
                        <ul className="events-list">
                            <li>{calendar.name} - {calendar.description}</li>
                        </ul>
                    </div>
                );
            });

            this.setState({
                event: event,
                calendars: calendars,
            });
        });
    }

    logout() {
        this.props.cookies.remove("userID");
    };

    render() {
        return (
            <Paper className="main-container" elevation={4}>
            		<h1 class='main-heading'>Welcome to OneCalendar</h1>
            		<h2 class='subheading'>Please Select 2 Calendars to Sync</h2>
		            <div className="container2">
		                <CalendarSyncForm calendars={this.state.calendars} apiService={this.props.apiService}/>
		                
		                <div className="container1">
		                		<p className="test-data-pull">test data pull from api service:</p>
		                    {this.state.event}
		                </div>
		                
		                <div className="logout-option" >   
												<a href="/" onClick={(e) => {
				                    this.logout()
				                }}>
				                    <RaisedButton>Log out here</RaisedButton>
				                </a>
				            </div>
								</div>
						</Paper>
        )
    }
}

export default withCookies(LoggedInApp);