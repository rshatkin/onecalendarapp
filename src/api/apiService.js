class ApiService {
   availableCalendars() {
       let isTest = true;

       if (isTest) {
           return Promise.resolve([
               {
                   "id": "10",
                   "name": "test cal",
                   "description": "a cal I use for work",
                   "timezone": "EST",
                   "timezone-offset": "-4",
               },
               {
                   "id": "12",
                   "name": "another cal",
                   "description": "a cal I use for nothing",
                   "timezone": "EST",
                   "timezone-offset": "-4",
               },
               {
                   "id": "14",
                   "name": "other cal",
                   "description": "a cal I use for testing",
                   "timezone": "EST",
                   "timezone-offset": "-4",
               },
               {
                   "id": "18",
                   "name": "cal",
                   "description": "a cal I use for fun",
                   "timezone": "EST",
                   "timezone-offset": "-4",
               },
           ])
       } else {
           return fetch("http://apithing.");
       }
   }

    selectCalendar(personalCalendarID, workCalendarID) {
       console.log("Submitting calendar choice", personalCalendarID, workCalendarID);

        return {
            "status": "success"
        }
    }

    calendarStatus() {
        return {
            "personal-calendar-id": "10",
            "personal-calendar-recent-events": "",
            "personal-calendar-last-sync-timestamp": "",
            "personal-calendar-sync-count": "",
            "personal-calendar-events-private": "",
            "personal-calendar-event-name": "",
            "personal-calendar-event-description": "",
            "work-calendar-id": "10",
            "work-calendar-recent-events": "",
            "work-calendar-last-sync-timestamp": "",
            "work-calendar-sync-count": "",
            "work-calendar-events-private": "",
            "work-calendar-event-name": "",
            "work-calendar-event-description": "",
        }

    }

    updateCalendarStatus(personalCalendarConfig, workCalendarConfig) {
        // {
        //     "personal-calendar-events-private": "",
        // ....
        // }

        // {
        //     "work-calendar-events-private": "",
        // ...
        // }
    }
}

export { ApiService };