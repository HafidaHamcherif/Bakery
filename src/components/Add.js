import React from 'react';

class Add extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            input:'',
            price:1,
        };
        this.input = React.createRef();
      }

    render () {
        return(
            <div>
                <button type="button" class="btn btn-outline-primary" >Add</button>
                <label>
                    <input type="text" ref={this.input} />
                </label>
                <input type="submit" value="Submit" />
            </div>
        );
    }
}

export default Add;
