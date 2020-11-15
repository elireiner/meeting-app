import React from 'react';
import './Home.css';
import Nav from '../../components/Nav/Nav'
import { Section } from '../../components/Utils/Utils'
import MeetingsContext from '../../contexts/MeetingsContext'
import MeetingApiService from '../../services/meetings-api-service'
import MeetingLink from '../../components/MeetingLink/MeetingLink'

export default class Home extends React.Component {
    static contextType = MeetingsContext

    async componentDidMount() {
        this.context.clearError()


        // TODO: change dynamically depending on user
        let currentUser = 1
        await MeetingApiService.getRecurringMeeting(currentUser)
            .then(this.context.setRecurringMeetingList)
            .catch(this.context.setError)

    }

    renderMeetings() {
        const { recurringMeetingList = [] } = this.context

        const render = {
            onlyTrends: true,
            onlyRecurring: true
        };

        return recurringMeetingList.map(meeting =>
            <MeetingLink
                key={meeting.meeting_id}
                meeting={meeting}
                render={render}
            />
        )

    }


    render() {
        const { error } = this.context

        return (
            <>
                <Nav page="home" />
                <h1>Your Recurring Meetings</h1>
                <section className="homeBody">
                    <Section list className='MeetingsListPage'>
                        {error
                            ? <p className='red'>There was an error, try again</p>
                            : this.renderMeetings()}
                    </Section>
                </section>
            </>
        )
    }
}