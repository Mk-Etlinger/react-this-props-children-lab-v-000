import React from 'react';
import PropTypes from 'prop-types';

export default class Invitation extends React.Component {
    render() {
        const childElements = React.Children.map(this.props.children, child => {        
            return (
                <div>{child}</div>
            );
        });

        return (
            <div className="invitation">
                <h1>You've been invited!</h1>
                {childElements}
            </div>
        )
    }
}