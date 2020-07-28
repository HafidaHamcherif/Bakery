import React from 'react';

class List extends React.Component {

    render () {
        console.log('List/#render this.props', this.props)
        return(
            <div>
                <ul className='list-group'>
                    <li className='list-group-items'></li>
                </ul>
            </div>
        );
    }
}

export default List;
