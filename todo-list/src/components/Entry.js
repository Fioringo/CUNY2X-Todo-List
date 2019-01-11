import React, { Component } from 'react'

class Entry extends Component {
    render(){
        let {
            value
        } = this.props.value;
        return (
            <div className="Entry">
                <div className="Value">
                    {value}
                </div>
            </div>
        );
    }
}

export default Entry;