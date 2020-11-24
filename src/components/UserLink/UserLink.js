import React from 'react';
//import { Link } from 'react-router-dom';
import '../MainLinks.css';

export default class UserLink extends React.Component {
    render() {
        const userId = this.props.user.user_id
        return (
            <>
                <div className="blockDiv">
                    <p>{this.props.user.first_name} {this.props.user.last_name}</p>
                    <input
                        className="selectCheckBox"
                        type="checkbox"
                        key={userId}
                        name="checkBox"
                        value={userId}
                    />
                </div>
            </>
        )
    }
}