import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoggedInApp from './components/login/LoggedInApp';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {mount} from 'enzyme';
import { ApiService } from './../api/apiService'

Enzyme.configure({adapter: new Adapter()});

describe('<App>', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('shows a login screen when there is no cookie', () => {
        const wrapper = mount(<App/>);
        expect(wrapper.text()).toContain("Login")
    });

    it('renders the settings page', () => {
        let apiService = new ApiService();
        const wrapper = mount(<LoggedInApp userID={"10"} apiService={apiService}/>);
        expect(wrapper.text()).toContain('Logout');
    });

    it('shows my calendars', () => {
        let fakeApiService = new ApiService();
        fakeApiService.availableCalendars = () => {
            return [
                {
                    "id": "10",
                    "name": "test cal",
                    "description": "a cal I use for work",
                    "timezone": "EST",
                    "timezone-offset": "-4",
                }]
        };

        const wrapper = mount(<LoggedInApp userID={"10"} apiService={fakeApiService}/>);
        expect(wrapper.text()).toContain('test cal');
    });

});
