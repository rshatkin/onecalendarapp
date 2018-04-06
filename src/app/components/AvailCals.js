import React, {Component} from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies, CookiesProvider } from 'react-cookie';
import '../App.css';


class AvailCals extends Component {
	
	componentWillMount() {
		let myCalendars = true;
		
		this.setState({ myCalendars: myCalendars });		
	}
	
	render() {

		let allAvailCals = (this.state.myCalendars === true) ? (
			<div className="avail-cals">
				Here are your available calendars: {this.state.myCalendars}
			</div>
		) : (
			<div className="avail-cals">
				No Calendars Found
			</div>
		);
		
		return (
			allAvailCals
		);
	}
}

export default AvailCals;