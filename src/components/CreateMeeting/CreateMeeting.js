import React from 'react';
import MeetingsApiService from '../../services/meetings-api-service'
import Nav from '../Nav/Nav'
// not needed for V1:import { Redirect } from 'react-router'
import './CreateMeeting.css'

export default class CreateMeeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ' ',
            type: ' ',
            recurring: false,
            description: ' ',
            date: '',
            time: '',
            submitAttempted: false,
            afterFrom: false,
            success: false,
            // not needed for V1: redirect: false
        }
    };

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve);
        });
    }

    handleFormChange = async (event) => {
        const target = event.target;

        const value = target.value;
        const name = target.name;

        await this.setStateAsync({
            [name]: value
        })

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
                console.log(res)
            })
            .then(async res => {
                //TODO check if response is ok; if not throw error, catch, add to state
                await this.setState({
                    success: true,
                    submitAttempted: true
                })
       
                /*not needed for V1:
                setTimeout(() => {
                     this.setState({
                         afterFrom: 'Redirecting...'
                     })
                 }, 1000);
                 setTimeout(() => {
                     this.setState({
                         redirect: true
                     })
                 }, 2000);*/

            })

    }

    render() {
        return (
            <>
                <Nav />
                <section className="create-meeting-wrapper">
                    {
                        !this.state.success &&
                        <>
                      <h1 className='create-meeting'>Create a meeting</h1>
                            <form
                                className="create-meeting-form"
                                onSubmit={this.handleSubmit}
                            >
                            
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
                                
                                
                                    <label className="create-meeting-label" htmlFor="type">
                                        Type
                                        <input
                                            className="create-meeting-input"
                                            type="text"
                                            name="type"
                                            required
                                            value={this.state.type}
                                            onChange={this.handleFormChange}
                                        />
                                    </label>
                                
                                    <label className="create-meeting-label" htmlFor="description">
                                        Description
                                        <input
                                            className="create-meeting-input"
                                            type="text"
                                            name="description"
                                            required
                                            value={this.state.description}
                                            onChange={this.handleFormChange}
                                        />
                                    </label>
                           
                                    <label className="create-meeting-label" htmlFor="date">
                                        Meeting Date
                                        <input className="create-meeting-input"
                                            type="date"
                                            name="date"
                                            // required
                                            value={this.state.date}
                                            onChange={this.handleFormChange} />
                                    </label>
                            
                                    <label className="create-meeting-label last-create-meeting-label" htmlFor="time">
                                        Meeting Time
                                        <input className="create-meeting-input"
                                            type="time"
                                            name="time"
                                            //required
                                            value={this.state.time}
                                            onChange={this.handleFormChange} />
                                    </label>
                              

                                    <input className="create-meeting-input-submit" type="submit" />
                            
                            </form>
                            </>

                    }

                    {this.state.submitAttempted && this.state.success &&
                        <p className='meeting-last-message'>Meeting created</p> 
                    }
                    {this.state.submitAttempted && !this.state.success &&
                        <p className='meeting-last-message'>Error: meeting not created</p>
                    }


                    {/* not needed for V1:
                        // todo pass meeting with state get from current state
                        (this.state.success && this.state.redirect) ?
                            <Redirect to="/add-participants" /> :
                            <div></div>
                    */}
                </section>

            </>
        )
    }
}