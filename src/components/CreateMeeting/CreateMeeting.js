import React from 'react';

export default class CreateMeeting extends React.Component {
    render() {
        return (
            <>
                <h1>Create a meeting</h1>
                <form>
                    <label>
                        name
                <input type="number" />
                    </label>
                    <label>
                        timestamp
                <input type="number" />
                    </label>
                    <label>
                        type
                <input type="number" />
                    </label>
                    <label>
                        description
                <input type="number" />
                    </label>
                    <label>
                        timestamp
                <input type="number" />
                    </label>
                    <input type="submit" />
                </form>

            </>
        )
    }
}