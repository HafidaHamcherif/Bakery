import React from 'react';


class Pay extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            basket:[],
            total:0,
            totalVat:0,
            totalecoTax:0
        };
    }

    onClickProduct(name, price){
        this.setState({
            total:null
        });
    }

    render () {
        console.log('Pay/#render this.props', this.props)
        console.log('Pay/#render this.state', this.state)
        return(
            <div>
                Pay
                <div>{this.state.total}</div>
            </div>
        );
    }
}

export default Pay;