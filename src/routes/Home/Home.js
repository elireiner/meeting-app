import React from 'react';
import { Link } from 'react-router-dom';
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
        await MeetingApiService.getMeetingsForUser(currentUser)
            .then(this.context.setUsersMeetingList)
            .catch(this.context.setError)

    }

    renderMeetings() {
        let onlyTrends = false;

        const { usersMeetingList = [] } = this.context
        console.log(usersMeetingList)
        return usersMeetingList.map(meeting =>
            <MeetingLink
                key={meeting.meeting_id}
                meeting={meeting}
                onlyTrends={onlyTrends}
            />
        )

        // }

    }


    render() {
        const { error } = this.context

        return (
            <>
                <Nav page="home" />
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