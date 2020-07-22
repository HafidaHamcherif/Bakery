import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            click : []
        };
      }
    
      onAction(){
        const click =  this.state.click
        click.push('No item are invalid')
        this.setState({
            clack:click
        });
    }
    render () {
        return(
            <div>
                <button type="button" class="btn btn-outline-primary"
                    onClick={()=>{
                        const click = this.state.click;
                        click.push('No item are invalid')
                        this.setState({
                            click:click
                        });
                    }}>
                        List
                </button>
                <p>{this.state.click}</p>
            </div>
        );
    }
}

export default List;
