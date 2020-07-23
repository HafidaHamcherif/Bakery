import React from 'react';


class Add extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            input:'',
            price:1,
        };
    }


    render () {
        console.log('Add/#render this.props', this.props)
        return(
            <div>
                add
                <input className='form-control' placeholder= 'items'></input>
                <button className='btn btn-primary'>Add</button>

            </div>
        );
    }
}

export default Add;
