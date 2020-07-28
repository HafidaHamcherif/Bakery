import React from 'react';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Slider extends React.Component {
    render () {
        return(
            
            <RCSlider
                min = {this.props.min}
                max = {this.props.max}
                value = {this.props.value}
                SliderChange = {this.props.SliderChange}
            />
            
        );
    }
}

export default Slider ; 