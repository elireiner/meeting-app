import React from 'react';
import AssessmentsContext from '../../contexts/AssessmentsContext'
import AssessmentsApiService from '../../services/assessments-api-service'

export default class MeetingTrends extends React.Component {
    static contextType = AssessmentsContext

    async componentDidMount() {
      this.context.clearError()
  
  
      // TODO: change dynamically depending on user
      let currentUser = 1
      await  AssessmentsApiService.getAssessmentTrends(currentUser)
      .then(data => {
          console.log(data)
      })
        .then(this.context.setUsersRecurringAssessmentList)
        .catch(this.context.setError)
       
    }
    
    render() {
        const { usersRecurringAssessmentList = [] } = this.context
        console.log(usersRecurringAssessmentList)

        return(
            <p>Hello, Worlds!</p>
        )
    }
}