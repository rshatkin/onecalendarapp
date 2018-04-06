import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {isRequired, instanceOf } from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import {ApiService} from "../../api/apiService";

const styles = {
    customWidth: {
        width: 150,
        margin: 10,
    },
    buttonPosition: {
	    	margin: 10,
    }
};

class CalendarSyncForm extends Component {
    static propTypes = {
        calendars: isRequired,
        apiService: instanceOf(ApiService).isRequired,
    };

    handlePersonalCalendarChange = (event, index, value) => {
        this.setState({
            personalCalendarValue: value
        });
    };

    handleWorkCalendarChange = (event, index, value) => {
        this.setState({
            workCalendarValue: value
        });
    };

    componentWillMount() {
        this.setState({
            options: [],
            personalCalendarValue: 0,
            workCalendarValue: 0
        })
    }

    sendCalendarChoice() {
        this.props.apiService.selectCalendar(
            this.state.personalCalendarValue,
            this.state.workCalendarValue
        );
    }

    componentWillReceiveProps(props) {
        let options = props.calendars.map((calendar, index) => {
            console.log(index, calendar.name);
            return (
                <MenuItem key={index} value={index} primaryText={calendar.name}/>
            );
        });

        this.setState({
            options: options,
            personalCalendarValue: 0,
            workCalendarValue: 0
        })

    }

    render() {
        return (
            <div>
                <SelectField className="calendar-one"
                    floatingLabelText="Personal Calendar"
                    value={this.state.personalCalendarValue}
                    onChange={this.handlePersonalCalendarChange}
                    style={styles.customWidth}
                >
                    {this.state.options}
                </SelectField>
                

                <SelectField className="calendar-one"
                    floatingLabelText="Work Calendar"
                    value={this.state.workCalendarValue}
                    onChange={this.handleWorkCalendarChange}
                    style={styles.customWidth}
                >
                    {this.state.options}
                </SelectField>
                <br/>
                <RaisedButton className="sync-submit" style={styles.buttonPosition} onClick={() => {this.sendCalendarChoice()}}>Submit</RaisedButton>
            </div>
        );
    }
}

export default CalendarSyncForm;
