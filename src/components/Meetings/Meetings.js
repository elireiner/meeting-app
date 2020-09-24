import React from 'react';
import MeetingLink from '../MeetingLink/MeetingLink';
import { meetings } from '../../mock-data';

export default class Meetings extends React.Component {


    render() {
        const links = meetings.map(meeting => <MeetingLink {...meeting}/>);
        return (
            <>
                <div className="search">

                    <h2 className="heading">These are your current meetings</h2>

                    <label className="search-label" htmlFor="search-input">
                        <input
                            type="text"
                            id="search-input"
                            placeholder="Search by name..."
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