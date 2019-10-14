import React, {Component} from 'react'

class Events extends Component {
    constructor(props){
        super(props);

        this.state = {
            clicked: 0
        }

        // this.clickMethod = this.clickMethod.bind(this);
    }

    clickMethod = () => {
        console.log('--- CLICK METHOD BEGIN ---', this.state.clicked);
        this.setState({
            clicked: this.state.clicked + 1
        });
        console.log('--- CLICK METHOD END ---', this.state.clicked);
    }

    render(){
        const { clicked } = this.state;
        return(
            <div>
                <button onClick={ this.clickMethod } type="button">Click Me</button>
                <p>Clicks: { clicked }</p>
            </div>
        );
    }
}

export default Events;