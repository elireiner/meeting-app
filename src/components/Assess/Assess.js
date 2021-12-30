import React from 'react';
import AssessmentsApiService from '../../services/assessments-api-service';
import Nav from '../Nav/Nav';
import uuid from "uuid";
import './Assess.css'

export default class Assess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            one: '',
            two: '',
            three: '',
            four: '',
            five: '',
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

    organizeData = () => {
        const user_id = 1;
        const meeting_id = 1

        return Object.values(this.state).map((value, i) => {
            i = i + 1
            let _id = uuid.v4()
            return {
                _id: _id,
                metric_id: i,
                metric_value: value,
                user_id: user_id,
                meeting_id: meeting_id
            }
        })

    }

    handleSubmit = e => {

        e.preventDefault();
        const assessments = this.organizeData()

        const sendData = async () => {
            return await assessments.map(assessment => {
                return AssessmentsApiService.postAssessment(assessment)
            })
        }

        sendData()
            .then(res => {
                this.setState({
                    lastMessage: 'Success! New assessment created!'
                })
            })
    };

    render() {
        return (
            <>
                <Nav />
                <div className="assess-page-body">

                    <h1 className="assessment-trends-page-h1"> How great was the meeting on these metrics?</h1>
                    <h2 className="assessment-trends-page-h2">Rate on a scale from one to five with 1 being terrible and 5 being great</h2>
                    <form
                        className="assessment-form"
                        onSubmit={this.handleSubmit}
                    >
                      
                            <label className="create-assessment-label" htmlFor="one">
                                How necessary was this meeting?
                                <input
                                    className="create-assessment-input"
                                    type="number"
                                    name="one"
                                    min="1"
                                    max="5"
                                    required
                                    value={this.state.one}
                                    onChange={this.handleFormChange} />
                            </label>
                  

                            <label className="create-assessment-label" htmlFor="two">
                                Before the meeting, how well did we clarify the desired outcomes?
                                <input
                                    className="create-assessment-input"
                                    type="number"
                                    name="two"
                                    min="1"
                                    max="5"
                                    required
                                    value={this.state.two}
                                    onChange={this.handleFormChange} />
                            </label>
                     
                            <label className="create-assessment-label" htmlFor="three" >
                                How well did we stay on point?
                                <input
                                    className="create-assessment-input"
                                    type="number"
                                    name="three"
                                    min="1"
                                    max="5"
                                    required
                                    value={this.state.three}
                                    onChange={this.handleFormChange} />
                            </label>
                      

                            <label className="create-assessment-label" htmlFor="four">
                                How well did we summarize and agree on next steps?
                                <input
                                    className="create-assessment-input"
                                    type="number"
                                    name="four"
                                    min="1"
                                    max="5"
                                    required
                                    value={this.state.four}
                                    onChange={this.handleFormChange} />
                            </label>
                     

                            <label className="create-assessment-label" htmlFor="five">
                                How strongly did we encourage open discussion?
                                <input
                                    className="create-assessment-input"
                                    type="number"
                                    name="five"
                                    min="1"
                                    max="5"
                                    required
                                    value={this.state.five}
                                    onChange={this.handleFormChange} />
                            </label>
                      
                       
                            <input className="create-assessment-input-submit" type="submit" />
                        

                    </form>
                    {
                        (this.state.lastMessage) ?
                            <p>{this.state.lastMessage}</p> :
                            <div></div>
                    }
                </div>
            </>
        )
    }
}