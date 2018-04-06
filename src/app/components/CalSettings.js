import React, {Component} from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies, CookiesProvider } from 'react-cookie';
import '../App.css';

class CalSettings extends Component {
	componentWillMount() {
		let calType = ''; //have this set equal to the result of "SelectCals" class
		
		// each of the below for both work and personal calendars
		let calSettings = [
			{'id':''}, //corresponds to /api/available-calendars id
			{'recent events':''}, // see the 10 most recent events - no set format yet
			{'last sync':''}, // timestamp ISO 8601 of last sync event 
			{'sync count':''}, // total number of events that have been synced FROM the calendar
			{'private':''}, // bool - the event synced FROM calendar can be private when displayed in work & vv. 
			{'event name':''}, // string template. Will generate the name of event created in the calendar. Check if the following exist: $NAME, $START_TIME, $END_TIME, $GUESTS and have them expanded with corresponding strings.
			{'event description':''}, //string template. generates the description of event created in calendar. 
		];
	}
}