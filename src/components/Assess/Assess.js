import React from 'react';

export default class Assess extends React.Component {
    
    render() {
        return (
            <>
                <h1>How great was the meeting on these metrics?</h1>
                <form>
                    <label>
                        Clarity
                    <input type="number" />
                    </label>
                    <label>
                        Listening
                    <input type="number" />
                    </label>
                    <label>
                        Shared time
                    <input type="number" />
                    </label>
                    <input type="submit" />
                </form>

            </>
        )
    }
}