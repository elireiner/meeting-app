import React from 'react';
import AssessmentsContext from '../../contexts/AssessmentsContext'
import AssessmentsApiService from '../../services/assessments-api-service'

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

    render() {
        const { usersRecurringAssessmentList = [] } = this.context
        const metrics = usersRecurringAssessmentList.map(metric => {
            return <li key={metric.metric_id}>Metric {metric.metric_id}: {metric.cumulative_avg}</li>
        })
        return (
            <>
            <h1>Cumulative average for recurring meeting {this.props.location.state.meeting.meeting_id} </h1>
                <ul>
                    {metrics}
                </ul>
            </>
        )
    }
}