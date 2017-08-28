import React from 'react';
import PropTypes from 'prop-types';

export default class ThemedDecorations extends React.Component {   
    render() {
         const addClassToChild = React.Children.map(this.props.children, child => {
            return(
                <div className={this.props.theme}>{child}</div> 
            );
        });    
                
        return(
            <div>
                {addClassToChild}
            </div>
        )
    }
}

ThemedDecorations.PropTypes = {
    theme: PropTypes.string
}