import React from 'react';
import AssessmentsContext from '../../contexts/AssessmentsContext'
import AssessmentsApiService from '../../services/assessments-api-service'
import Nav from '../Nav/Nav';
import './MeetingTrends.css'

export default class MeetingTrends extends React.Component {
    static contextType = AssessmentsContext

    async componentDidMount() {
        this.context.clearError()

        // TODO: change dynamically depending on user
        let currentUser = 1
        let recurringMeetingId = this.props.location.state.meeting.meeting_id
        await AssessmentsApiService.getAssessmentTrends(currentUser, recurringMeetingId)
            .then(this.context.setUsersRecurringAssessmentList)
            .catch(this.context.setError)

    }
    round(num, decimalPlaces = 2) {
        var p = Math.pow(10, decimalPlaces);
        var n = (num * p) * (1 + Number.EPSILON);
        return Math.round(n) / p;
    }

    render() {

        const { usersRecurringAssessmentList = [] } = this.context
        const metrics = usersRecurringAssessmentList.map(metric => {
            return <p className="trends" key={metric.metric_id}>Metric {metric.metric_id}: {this.round(metric.cumulative_avg)}</p>
        })
        console.log(metrics)
        return (
            <>
                <Nav />
                <div className="trends-page-body">
                    <h1 className="trends-page-h1">Average Rating</h1>
                    <h2 className="trends-page-h2"> Meeting {this.props.location.state.meeting.meeting_id} </h2>
                    {metrics}
                </div>
            </>
        )
    }
}