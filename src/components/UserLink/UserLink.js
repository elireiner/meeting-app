import React from 'react';
//import { Link } from 'react-router-dom';
import '../MainLinks.css';

export default class UserLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        }
    };
    handleClick = async () => {
        const selectedState = !this.state.selected 
        await this.setState({
            selected: selectedState
        })
        
}
render() {
    /*let path = {
        pathname: `user/${this.props.user._id}`,
        state: { user: this.props }
    }*/

    const buttonText = (this.state.selected) ? 'unselect' : 'select'
    return (
        <>
            {// <Link className='mainLink' to={path}>{this.props.user.first_name}</Link>
            }
            <div className="mainLinkDiv">
                <p >{this.props.user.first_name} {this.props.user.last_name}</p>
                <button onClick={this.handleClick}>{buttonText}</button>
            </div>

        </>
    )
}
}