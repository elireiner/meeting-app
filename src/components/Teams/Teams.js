import React from 'react';
import { teams } from '../../mock-data';
import TeamLink from '../TeamLink/TeamLink'

export default class Teams extends React.Component {

    /* handleFilterTextChange = (e) => {
         this.props.handleSearch(e.target.value);
     };*/

    render() {
        let onlyTrends = false;
        const path = this.props.match.path;
        if (path === '/team-trends') {
            onlyTrends = true;
        }

        const links = teams.map(team => <TeamLink onlyTrends={onlyTrends} {...team} />);
        return (
            <>
                <div className="search">

                    <h2 className="heading">These are your current teams</h2>

                    <label className="search-label" htmlFor="search-input">
                        <input
                            type="text"
                            id="search-input"
                            placeholder="Search by department..."
                        //value={this.props.searchText}
                        //onChange={this.handleFilterTextChange}
                        />
                        <i className="fa fa-search search-icon" />
                    </label>
                </div>

                <ul>
                    {links}
                </ul>
            </>
        )
    }
}