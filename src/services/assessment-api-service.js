import config from '../config'
//import TokenService from './token-service'

const AssessmentsApiService = {
  getAllAssessments() {
    return fetch(`${config.API_ENDPOINT}/assessments`, {
      headers: {
        'authorization': `Bearer ${config.API_KEY}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getUsersAssessments(user) {
    return fetch(`${config.API_ENDPOINT}/assessments/${user}`, {
      headers: {
        'authorization': `Bearer ${config.API_KEY}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getUsersAssessmentsForMeeting(user, meeting) {
    return fetch(`${config.API_ENDPOINT}/assessments/${user}/${meeting}`, {
      headers: {
        'authorization': `Bearer ${config.API_KEY}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getAssessmentTrends(user) {
    return fetch(`${config.API_ENDPOINT}/assessments/trends/${user}`, {
      headers: {
        'authorization': `Bearer ${config.API_KEY}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getAssessmentTrendsForMeeting(user, recurringMeetingId) {
    return fetch(`${config.API_ENDPOINT}/assessments/trends/${user}/${recurringMeetingId}`, {
      headers: {
        'authorization': `Bearer ${config.API_KEY}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  postAssessment(AssessmentData) {
    return fetch(`${config.API_ENDPOINT}/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
         'authorization': `Bearer ${config.API_KEY}`
      },
      body: JSON.stringify(AssessmentData),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default AssessmentsApiService