import config from '../config'
//import TokenService from './token-service'

const AssessmentsApiService = {
  getAllTeams() {
    return fetch(`${config.API_ENDPOINT}/teams`, {
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

  getTeamsForUser(user) {
    return fetch(`${config.API_ENDPOINT}/teams/${user}`, {
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

 /* getAssessment(assessmentId) {
    return fetch(`${config.API_ENDPOINT}/assessments/${assessmentId}`, {
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getAssessmentComments(assessmentId) {
    return fetch(`${config.API_ENDPOINT}/assessments/${assessmentId}/comments`, {
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postComment(assessmentId, text) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        assessment_id: assessmentId,
        text,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }*/
}

export default AssessmentsApiService