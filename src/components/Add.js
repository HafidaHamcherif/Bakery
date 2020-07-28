import React from 'react';
import Slider from './core/Slider'


class Add extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            input:'',
            price: 6

        };
        this.sliderChange=this.sliderChange.bind(this);
    }

    sliderChange(price){
        console.log('sliderChange price', price)
        this.setState({
            price
        });
    }


    render () {
        const {
            price
        } = this.state;
        return(
            <div>
                <input className='form-control' placeholder= 'items'>
                    
                </input>
                <button className='btn btn-primary'>Add</button>
                <Slider
                    min = {1}
                    max = {10}
                    sliderChange = {this.sliderChange}
                    value = {price}
                />
            </div>
        );
    }
}

export default Add;
