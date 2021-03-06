import React, { Component } from 'react';

class TimerLengthControl extends Component {
    render() {
        return (
            <div className="length-control">
                <div id={this.props.titleID}>{this.props.title}</div>
                <button
                    className="btn-level"
                    id={this.props.minID}
                    onClick={this.props.onClick}
                    value="-">
                    <i className="fa fa-arrow-down fa-2x"></i>
                </button>
                <div className="btn-level" id={this.props.lengthID}>
                    {this.props.length}
                </div>
                <button
                    className="btn-level"
                    id={this.props.addID}
                    onClick={this.props.onClick}
                    value="+">
                    <i className="fa fa-arrow-up fa-2x"></i>
                </button>
            </div>
        )
    }
}

export default TimerLengthControl