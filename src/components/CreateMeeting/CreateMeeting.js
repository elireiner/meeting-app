import React from 'react';
import { Link } from 'react-router-dom';
import MeetingsApiService from '../../services/meetings-api-service'
import Nav from '../Nav/Nav'
import './CreateMeeting.css'

export default class CreateMeeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: '',
            recurring: false,
            description: '',
            date: '',
            time: '',
        }
    };

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve);
        });
    }

    handleFormChange = async (event) => {
        const target = event.target;

        /* if (target.name === 'onlineMedium' || target.name === 'inPerson') {
             if (event.target.checked && !this.state[target.name]) {
                 this.setState({
                     [target.name]: true,
                 });
             }
             else if (event.target.checked && this.state[target.name]) {
                 this.setState({
                     [target.name]: false,
                 });
             }
 
         }*/

        //else {
        const value = target.value;
        const name = target.name;

        /* if (name === 'tutorSubjects') {
             let subjects = [];
             subjects.push(value);
             this.setState({
                 subjects
             });
         }*/

        await this.setStateAsync({
            [name]: value
        })
        //  }
    }

    createDate() {
        return "" + this.state.date + " " + this.state.time
    }

    handleSubmit = e => {
        e.preventDefault();
        const newMeeting = {
            meeting_name: this.state.name,
            meeting_type: this.state.type,
            recurring: this.state.recurring,
            description: this.state.description,
            meeting_time: this.createDate(),
        }
        MeetingsApiService.postMeeting(newMeeting)
            .then(res => {
                this.setState({
                    lastMessage: 'Success! New meeting created!'
                })

            })
    }

    render() {
       let path = {
            pathname: `/add-participants`
        }
        return (
            <>
                <Nav />
                <h1>Create a meeting</h1>
                <section className="create-meeting-wrapper">
                    {
                        (!this.state.lastMessage) ?
                            <form
                                onSubmit={this.handleSubmit}
                            >
                                <div>
                                    <label className="create-meeting-label" htmlFor="name">
                                        Meeting Name
                        <input
                                            className="create-meeting-input"
                                            type="text"
                                            name="name"
                                            required
                                            value={this.state.name}
                                            onChange={this.handleFormChange}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label className="create-meeting-label" htmlFor="type">
                                        type
                        <input
                                            className="create-meeting-input"
                                            type="text"
                                            name="type"
                                            required
                                            value={this.state.type}
                                            onChange={this.handleFormChange}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label className="create-meeting-label" htmlFor="description">
                                        description
                <input
                                            className="create-meeting-input"
                                            type="text"
                                            name="description"
                                            required
                                            value={this.state.description}
                                            onChange={this.handleFormChange}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label className="create-meeting-label" htmlFor="date">
                                        Meeting Date
                <input className="create-meeting-input"
                                            type="date"
                                            name="date"
                                            required
                                            value={this.state.date}
                                            onChange={this.handleFormChange} />
                                    </label>
                                </div>
                                <div>
                                    <label className="create-meeting-label" htmlFor="time">
                                        Meeting Time
                <input className="create-meeting-input"
                                            type="time"
                                            name="time"
                                            required
                                            value={this.state.time}
                                            onChange={this.handleFormChange} />
                                    </label>
                                </div>
                                {/*<div>
                        <label>
                            Recurring Meeting
                <input type="number" />
                        </label>
                    </div>
                    */}
                                <div>
                                    <input
                                        type="submit"
                                    />
                                </div>
                            </form>


                            :
                            <div></div>
                    }
                    {
                        (this.state.lastMessage) ?
                        <section>
                               <p>{this.state.lastMessage}</p>
                               <Link to={path}>Add participants</Link>
                            </section> :
                            <div></div>
                    }
                </section>

            </>
        )
    }
}