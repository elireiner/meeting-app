import React, { Component } from 'react'
import TeamListContext from '../../contexts/TeamListContext'
import TeamApiService from '../../services/teams-api-service'
import { Section } from '../../components/Utils/Utils'
import TeamLink from '../../components/TeamLink/TeamLink'

export default class TeamListPage extends Component {
  static contextType = TeamListContext

  async componentDidMount() {
    this.context.clearError()


    // TODO: change dynamically depending on user
    let currentUser = 1
    await TeamApiService.getTeamsForUser(currentUser)
      .then(this.context.setUsersTeamList)
      .catch(this.context.setError)

    TeamApiService.getAllTeams()
      .then(this.context.setTeamList)
      .catch(this.context.setError)
  }

  renderTeams() {
    let onlyTrends = false;
    const path = this.props.match.path;
    if (path === '/team-trends') {
      onlyTrends = true;
    }

    if (this.props.location.state.allTeams) {
      const { teamList = [] } = this.context

      return teamList.map(team =>
        <TeamLink
          key={team.team_id}
          team={team}
          onlyTrends={onlyTrends}
        />
      )
    }

    else if (!this.props.location.state.allTeams) {
      const { usersTeamList = [] } = this.context

      return usersTeamList.map(team =>
        <TeamLink
          key={team.team_id}
          team={team}
          onlyTrends={onlyTrends}
        />
      )
    }

  }

  render() {
    const { error } = this.context
    return (
      <Section list className='TeamListPage'>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderTeams()}
      </Section>
    )
  }
}