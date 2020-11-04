import config from '../config'
//import TokenService from './token-service'

const MeetingsApiService = {
  getAllMeetings() {
    return fetch(`${config.API_ENDPOINT}/meetings`, {
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

  getMeetingsForUser(userId) {
    return fetch(`${config.API_ENDPOINT}/meetings/user/${userId}`, {
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

  getMeeting(meetingId) {
    return fetch(`${config.API_ENDPOINT}/meetings/meeting/${meetingId}`, {
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

  postMeeting(meetingData) {
    return fetch(`${config.API_ENDPOINT}/meetings`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${config.API_KEY}`,
      },
      body: JSON.stringify(meetingData),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getRecurringMeeting(userId) {

    return fetch(`${config.API_ENDPOINT}/meetings/recurring/${userId}`, {
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
}

export default MeetingsApiService
