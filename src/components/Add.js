import React from 'react';
import RCSlider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

class Add extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            input:'',
            price:1 
        };
      }
    render () {
        return(
            <div>
                <button>Add</button>
                <input>{this.state.input}</input>
                <RCSlider/>
                
            </div>
        );
    }
}

export default Add;