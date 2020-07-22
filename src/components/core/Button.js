import React from 'react';

class Button extends React.Component {
    render() {
        return(
            <div>
                {this.props.children}
                {this.props.isSelected}
                {this.props.onClick}
            </div>           
        );
    }
}

export default Button;